<?php
  header("Access-Control-Allow-Origin: *");
  header('Access-Control-Allow-Headers: Content-Type');

  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  if( empty($_POST['name']) && empty($_POST['email']) ) {
    echo "Error. Empty form";
    exit();
  }

  $name = $_POST['name'];
  $company = $_POST['company'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $usersubject = $_POST['subject'];
  $message = $_POST['message'];

  //$adminEmail = "tivasyuk@i.ua";
  $adminEmail = "ekosonicwest@ukr.net, tivasyuk@i.ua";

  $subject = "message from ekosonic-west.com";
  $message = "Ім'я: $name\r\nКомпанія: $company\r\nТелефон: $phone\r\nТема повідомлення: $usersubject\r\n$message\r\n";
  $headers = "Content-Type: text/plain; charset=utf-8\r\n" .
    "From: $email\r\n" .
    "Reply-To: $email\r\n";

  if (mail($adminEmail, $subject, $message, $headers)) {
    echo "Message sent successfully";
  }
  else {
    echo "Error sending message";
  }
?>
