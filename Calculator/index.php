<?= '<h1> Calculator: version 0.1 </h1><hr>' ?>

<?php
    require_once './index/core/Installing_the_http_and_https_url.php';
?>

<!DOCTYPE html>
<html lang="en">
    <head>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="<?= _CORE_SITE_URL__GC . 'Calculator/index/Css/index.css' ?>">
        <script src="<?= _CORE_SITE_URL__GC . 'Calculator/index/JavaScript/index.js' ?>"></script>

        <title>Calculator</title>

    </head>
    <body>
        
        <div id="Calculator"></div>

    </body>
</html>
