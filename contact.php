<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $messagetext = $_POST['messagetext'];

    $mailTo = "matthies@kallsen.net";
    $headers = "From: ".$email;
    $txt = $name." wrote via contactform:\n\n".$messagetext;

    mail($mailTo , $subject , $txt , $headers);
    header("Location: ./");
}