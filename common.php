<?php
error_reporting(E_ALL & ~E_NOTICE);
require_once 'markdown/Markdown.inc.php';

use \Michelf\Markdown;

function connectNeo4J()
{
    $username = 'neo4j';
    $password = 's08o07l01';

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "http://localhost:7474/db/data/cypher");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_HEADER, true);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");

    curl_setopt($ch, CURLOPT_USERPWD, "$username:$password");
    $query = [
        "query" => "CALL apoc.export.json.query(\"MATCH path=(n:$_SESSION[label])-[r]->(p:$_SESSION[label])
MATCH (m:$_SESSION[label]{name:'$_SESSION[dataset_qs]'}) where (toUpper(n.name) <> toUpper(p.name)) and
 ((n.communityLouvain = m.communityLouvain) or (n.pathlenght = $_SESSION[complLevel]) or ((toInt(n.relevanceByPageRank) = $_SESSION[complLevel]) and 
 (toInt(p.relevanceByPageRank) = $_SESSION[complLevel])) and ((toInt(n.relevanceBytfidf) = $_SESSION[complLevel]) and (toInt(p.relevanceBytfidf) = $_SESSION[complLevel]))) 
 return collect(path) as list\", '../../wamp64/www/concept_map/data/default/$_SESSION[dataset_qs].json')"];

    $query = json_encode($query);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json; ', 'Content-Type: application/json', 'Content-Length: ' . strlen($query), 'X-Stream: true'));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $query);

    $result = curl_exec($ch);
    $response = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
}

function get_html_docs($obj)
{
    global $config, $data, $errors;

    $name = str_replace('/', '_', $obj['name']);
    $filename = "data/".$_SESSION['dataset']."/".$_SESSION['dataset_qs']."/$name.mkdn";

    $name = str_replace('_', '\_', $obj['name']);
    $type = $obj['type'];
    if ($config['types'][$type]) {
        $type = $config['types'][$type]['long'];
    }

    $markdown = "## $name *$type*\n\n";

    if (file_exists($filename)) {
        $markdown .= "### Documentation\n\n";
        $markdown .= file_get_contents($filename);
    } else {
        $markdown .= "<div class=\"alert alert-warning\">No documentation for this object</div>";
    }

    if ($obj) {
        $markdown .= "\n\n";
        $markdown .= get_depends_markdown('Depends on', $obj['depends']);
        $markdown .= get_depends_markdown('Depended on by', $obj['dependedOnBy']);
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

function get_depends_markdown($header, $arr)
{
    $markdown = "### $header";
    if (count($arr)) {
        $markdown .= "\n\n";
        foreach ($arr as $name) {
            $markdown .= "* {{" . $name . "}}\n";
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
    global $config;

    $config = json_decode(file_get_contents("data/".$_SESSION['dataset']."/config.json"), true);
    $config['jsonUrl'] = "json.php";
}

function read_data()
{
    global $config, $data, $errors;
    if (!$config) read_config();

    $json = json_decode(file_get_contents("data/" . $_SESSION['dataset'] ."/". $_SESSION['dataset_qs'] .".json"), true);

    //$json = json_decode(file_get_contents("data/" . $_SESSION['dataset'] . $_SESSION['dataset_qs'] .".json"), true);
    $data = array();
    $errors = array();

    //print_r($_SESSION);
    foreach ($json['list'] as $obj) {
        $idS = strtoupper($obj['nodes'][0]['id']);
        $nameS = strtoupper($obj['nodes'][0]['properties']['name']);
        $typeS = strtoupper($obj['nodes'][0]['properties']['classes'][0]);
        if (!key_exists(strtoupper($obj['nodes'][0]['properties']['name']), $data)) {
            $data[$nameS]['id'] = $idS;
            $data[$nameS]['name'] = $nameS;
            $data[$nameS]['type'] = $typeS;
            $data[$nameS]['depends'] = array();
        }
    }
    unset($obj);

    foreach ($json['list'] as $obj) {
        $id = strtoupper($obj['nodes'][1]['id']);
        $name = strtoupper($obj['nodes'][1]['properties']['name']);
        $type = strtoupper($obj['nodes'][1]['properties']['classes'][0]);
        $object = strtoupper($obj['nodes'][0]['properties']['name']);
        $rel = strtoupper($obj['rels'][0]['label']);
        if (!key_exists(strtoupper($obj['nodes'][1]['properties']['name']), $data)) {
            $data[$name]['id'] = $id;
            $data[$name]['name'] = $name;
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
    }

    foreach ($data as &$obj) {
        $obj['dependedOnBy'] = array();
    }

    unset($obj);

    foreach ($data as &$obj) {
        foreach ($obj['depends'] as $name) {

            if ($data[$name["object"]]) {
                $data[$name["object"]]['dependedOnBy'][] = $obj['name'];
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
