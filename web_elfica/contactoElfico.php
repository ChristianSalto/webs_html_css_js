<?php

$for = 'romeosaltovk@gmail.com';
$subject = 'Mensaje desde romeosaltovk@gmail.com';

$mailheader = "From: " . $_POST['email'] . "\r\n";
$mailheader .= "Replay-To: " . $_POST['email'] . "\r\n";
$mailheader .= "Content-type: text/html; charset=utf-8\r\n";

$MESSAGE_BODY = "Nombre: " . $_POST['name'] . "\n";
$MESSAGE_BODY .= "\n<br>Email: " . $_POST['email'] . "\n";
$MESSAGE_BODY .= "\n<br>Mensaje: " .  $_POST['message'] . "\n";

mail($for, $subject, $MESSAGE_BODY, $mailheader);

header('Location: http://localhost:8081/');
