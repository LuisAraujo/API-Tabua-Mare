<?php

$cod = $_GET['cod'];
$mes = $_GET['mes'];
$ano = $_GET['ano'];

if($mes == 0)
	$mes="Jan";
else if($mes == 1)
     $mes="Fev";
else if($mes == 2)
     $mes="Mar";
else if($mes == 3)
     $mes="Abr";
else if($mes == 4)
     $mes="Mai";
else if($mes == 5)
     $mes="Jun";
else if($mes == 6)
     $mes="Jul";
else if($mes == 7)
     $mes="Ago";
else if($mes == 8)
     $mes="Set";
else if($mes == 9)
     $mes="Out";
else if($mes == 10)
     $mes="Nov";
else if($mes == 11)
     $mes="Dez";


$cod = "40140";
$mes = "0";
$ano = "2018";

	 echo 'http://www.mar.mil.br/dhn/chm/box-previsao-mare/tabuas/'.$cod."".$mes."".$ano.'.htm';
	 
$url = file_get_contents('http://www.mar.mil.br/dhn/chm/box-previsao-mare/tabuas/'.$cod."".$mes."".$ano.'.htm');

/*
$url = file_get_contents('http://ondas.cptec.inpe.br/~rondas/mares/index.php?cod='.$cod.'&mes='.$mes.'&ano='.$ano);
*/

echo $url;

?>