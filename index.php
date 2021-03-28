<?php

  if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) 
  {
    $uri = 'https://';
  } 
  else
  {
    $uri = 'http://';
  }
  
  $uri .= $_SERVER['HTTP_HOST'];
  header('Location: '.$uri.'/dashboard/');  
  exit;

?>
Something is wrong with the XAMPP installation :-(

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
      <header>
        <nav>
          <div><a href="">1 Calculator.</a></div>
          <div><a href="">2 Editor de text.</a></div>
          <div><a href="">3 Editor de imagine.</a></div>
          <div><a href="">4 Mine jocă.</a></div>
        </nav>
      </header>
  </body>
</html>

