<?php
$cod = $_GET['cod'];
$mes = $_GET['mes'];
$ano = $_GET['ano'];

if($ano == 0)
$ano="Jan";
else if($ano == 1)
     $ano="Fev";
else if($ano == 1)
     $ano="Fev";
else if($ano == 2)
     $ano="Mar";
else if($ano == 3)
     $ano="Abr";
else if($ano == 4)
     $ano="Mai";
else if($ano == 5)
     $ano="Jun";
else if($ano == 6)
     $ano="Jul";
else if($ano == 7)
     $ano="Ago";

$url = file_get_contents('http://www.mar.mil.br/dhn/chm/box-previsao-mare/tabuas/'.$cod.'Ago'.$ano.'.htm');

/*
$url = file_get_contents('http://ondas.cptec.inpe.br/~rondas/mares/index.php?cod='.$cod.'&mes='.$mes.'&ano='.$ano);
*/

echo $url;

?>