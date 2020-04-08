<?php
require_once 'common.php';
connectNeo4J();
read_data();

header('Content-type: application/json');
echo json_encode(array(
    'data'   => $data,
    'errors' => $errors
));
?>
