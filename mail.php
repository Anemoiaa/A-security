<?php

$recepient = "rphomin69@gmail.com";
$sitename = "A-security";

$phone = trim($_POST["phone"]);
$message = "Номер телефона: $phone";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");