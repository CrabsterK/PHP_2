<?php

    foreach($_POST as $key=>$value)
    {
        setcookie("$key", "$value", time()+1200);
    }
    echo '<h1 style="text-align:center;">ZAPISANO</h1>';
    header( "refresh:1;url=cookies.php" );

?>