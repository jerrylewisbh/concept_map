<?php
$dataset_qs = '';
error_reporting(E_ALL & ~E_NOTICE);
require_once 'markdown/Markdown.inc.php';

use \Michelf\Markdown;

function get_html_docs($obj)
{
    global $config, $data, $errors;

    $name = str_replace('/', '_', $obj['name']);
    //$filename = "data/".$_SESSION['dataset']."/".$_SESSION['dataset_qs']."/$name.mkdn";

    $name = str_replace('_', '\_', $obj['name']);
    $abstract = str_replace('_', '\_', $obj['abstract']);
    $type = $obj['type'];
    if ($config['types'][$type]) {
        $type = $config['types'][$type]['long'];
    }

    $markdown = "## $name *$type*\n\n";

    if (!is_null($abstract)) {
        $markdown .= "### Documentation\n\n";
        $markdown .= "<div class=\"alert alert-warning\">$abstract</div>";
    } else {
        $markdown .= "<div class=\"alert alert-warning\">No documentation for this object</div>";
    }

    if ($obj) {
        $markdown .= "\n\n";
        $markdown .= get_depends_markdown('Depends on', $obj['depends'], $obj['name']);
        $markdown .= get_depends_markdown('Depended on by', $obj['dependedOnBy'], $obj['name']);
    }

    // Use {{object_id}} to link to an object
    $arr = explode('{{', $markdown);
    $markdown = $arr[0];
    for ($i = 1; $i < count($arr); $i++) {
        $pieces = explode('}}', $arr[$i], 2);
        $name = $pieces[0];
        $id_string = get_id_string($name);
        $name_esc = str_replace('_', '\_', $name);
        $class = 'select-object';
        if (!isset($data[$name]["object"])) {
            $class .= ' missing';
            //$errors[] = "Object '$obj[name]' links to unrecognized object '$name'";
        }
        $markdown .= "<a href=\"#$id_string\" class=\"$class\" data-name=\"$name\">$name_esc</a>";
        $markdown .= $pieces[1];
    }

    $html = Markdown::defaultTransform($markdown);
    // IE can't handle <pre><code> (it eats all the line breaks)
    $html = str_replace('<pre><code>', '<pre>', $html);
    $html = str_replace('</code></pre>', '</pre>', $html);
    return $html;
}

function get_depends_markdown($header, $arr, $nameC)
{
    $markdown = "### $header";
    if (count($arr)) {
        $markdown .= "\n\n";
        if($header == "Depended on by"){
            foreach ($arr as $name) {
                $markdown .= "* [{$name['type']}] {{" . $name['object']."}}  \n";
            }
        }else{
            foreach ($arr as $name) {
                $markdown .= "* {{" . $name['object']."}} [{$name['type']}] '{$nameC}' \n";
            }
        }

        $markdown .= "\n";
    } else {
        $markdown .= " *(none)*\n\n";
    }
    return $markdown;
}

function get_id_string($name)
{
    return 'obj-' . preg_replace('@[^a-z0-9]+@i', '-', $name);
}

function read_config()
{
    global $config, $dataset_qs;
    session_start();
    /*session is started if you don't write this line can't use $_Session  global variable*/
    $_SESSION["dataset_qs"] = $_POST['dataset_qs'];
    $_SESSION["dataset"] = "default";
    $_SESSION["complLevel"] = $_POST['complLevel'];
    $_SESSION["mapType"] = $_POST['mapType'];
    $_SESSION["label"] = $_POST['dataset_qs']."_Wiki_N2";
    $config = json_decode(file_get_contents("data/default/config.json"), true);
    $config['jsonUrl'] = "json.php?dataset=".$_SESSION['dataset']."&dataset_qs=".$_SESSION['dataset_qs']."&mapType=".$_SESSION['mapType'];
}

function read_data($dataset, $dataset_qs,$mapType)
{
    global $config, $data, $errors;
    if (!$config) read_config();

    //$json = json_decode(file_get_contents("data/" . $dataset ."/". $dataset_qs ."_".$mapType.".json"), true);

    $json = json_decode(file_get_contents("data/default/Carl_Bosch_Conceptual.json"), true);
    $data = array();
    $errors = array();
    $a = 2;
    //print_r($_SESSION);
    foreach ($json['list'] as $obj) {
        $idS = strtoupper($obj['nodes'][0]['id']);
        $nameS = strtoupper($obj['nodes'][0]['properties']['name']);
        $abstractS = $obj['nodes'][0]['properties']['abstract'];
        $typeS = strtoupper($obj['nodes'][0]['properties']['classes'][0]);
        if (!key_exists(strtoupper($obj['nodes'][0]['properties']['name']), $data)) {
            $data[$nameS]['id'] = $idS;
            $data[$nameS]['posY'] = $obj['nodes'][0]['properties']['pathLenght'] *(1/$obj['nodes'][0]['properties']['pagerank']) *20;
            $data[$nameS]['posX'] = ($obj['nodes'][0]['properties']['communityLouvain'])*50 + ($a*30);
            $data[$nameS]['weight'] = $obj['nodes'][0]['properties']['weight'];
            $data[$nameS]['name'] = $nameS;
            $data[$nameS]['abstract'] = $abstractS;
            $data[$nameS]['type'] = $typeS;
            $data[$nameS]['depends'] = array();
        }
        $a++;
    }
    unset($obj);

    foreach ($json['list'] as $obj) {
        $id = strtoupper($obj['nodes'][1]['id']);
        $name = strtoupper($obj['nodes'][1]['properties']['name']);
        $abstract = $obj['nodes'][1]['properties']['abstract'];
        $type = strtoupper($obj['nodes'][1]['properties']['classes'][0]);
        $object = strtoupper($obj['nodes'][0]['properties']['name']);
        $rel = strtoupper($obj['rels'][0]['label']);
        if (!key_exists(strtoupper($obj['nodes'][1]['properties']['name']), $data)) {
            $data[$name]['id'] = $id;
            $data[$name]['posY'] =  $obj['nodes'][1]['properties']['pathLenght'] * (1/$obj['nodes'][1]['properties']['pagerank']) *20;
            $data[$name]['posX'] = ($obj['nodes'][1]['properties']['communityLouvain']) *50 + ($a * 30);
            $data[$name]['weight'] = $obj['nodes'][1]['properties']['weight'];
            $data[$name]['name'] = $name;
            $data[$name]['abstract'] = $abstract;
            $data[$name]['type'] = $type;
            $data[$name]['depends'] = array();
            $depends['object'] = $object;
            $depends['type'] = $rel;
            array_push($data[$name]['depends'], $depends);
        } else {
            $depends['object'] = $object;
            $depends['type'] = $rel;
            array_push($data[$name]['depends'], $depends);
        }
        $a++;
    }

    foreach ($data as &$obj) {
        $obj['dependedOnBy'] = array();
    }

    unset($obj);

    foreach ($data as &$obj) {
        foreach ($obj['depends'] as $name) {

            if ($data[$name["object"]]) {
                $dependedOnBy = array();
                $dependedOnBy['object'] = $obj['name'];
                $dependedOnBy['type'] = $name["type"];

                $data[$name["object"]]['dependedOnBy'][] = $dependedOnBy;
            } else {
                $errors[] = "Unrecognized dependency: '$obj[name]' depends on '$name'";
            }
        }
    }
    unset($obj);
    foreach ($data as &$obj) {
        $obj['docs'] = get_html_docs($obj);
    }
    unset($obj);
}

?>
