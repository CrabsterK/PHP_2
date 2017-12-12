<?php
session_start();
$_SESSION['login'] = false;

$login = 'bar';
$pass = 'bar';

if ((!$_SESSION['login'])) {
    
    if(($_POST['login'] == $login) AND ($_POST['pass']==$pass)){
        $_SESSION['login']=true;
        header( "Location: aboutPHP.php" );
    }
    else{
        $_SESSION['login'] = false;
        header( "Location: startSession.php" );
    }
}
else{
    header( "Location: aboutPHP.php" );
}
?>