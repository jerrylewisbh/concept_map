<?php
require_once 'common.php';
read_data($_GET['dataset'],$_GET['dataset_qs']);

header('Content-type: application/json');
echo json_encode(array(
    'data'   => $data,
    'errors' => $errors
));
?>
