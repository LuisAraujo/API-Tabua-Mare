<?php
$cod = $_GET['cod'];
$mes = $_GET['mes'];
$ano = $_GET['ano'];

$url = file_get_contents('http://www.mar.mil.br/dhn/chm/box-previsao-mare/tabuas/40118Ago2015.htm');

/*
$url = file_get_contents('http://ondas.cptec.inpe.br/~rondas/mares/index.php?cod='.$cod.'&mes='.$mes.'&ano='.$ano);
*/

echo $url;

?>