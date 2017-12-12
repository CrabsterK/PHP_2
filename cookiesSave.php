<?php
    $time = time()+1200;
    foreach($_POST as $key=>$value)
    {
        setcookie("$key", "$value", $time);
    }
    echo '<h1 style="text-align:center;">ZAPISANO</h1>';
    header( "refresh:1;url=cookies.php" );
    echo "Ważność cookies: 1200 sekund";
?>




