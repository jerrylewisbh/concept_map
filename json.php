<?php
require_once 'common.php';
read_data($_GET['dataset'],$_GET['dataset_qs'],$_GET['mapType']);

header('Content-type: application/json');
echo json_encode(array(
    'data'   => $data,
    'errors' => $errors
));
?>
