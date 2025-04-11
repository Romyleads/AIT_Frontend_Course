<?php
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

$yourEmail = "romyleads@gmail.com";
$yourAppPassword = "czvehuzgtichsttb";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $message = trim($_POST["message"] ?? "");
    $bot = trim($_POST["bot-check"] ?? "");

    if ($bot !== "" || empty($message)) {
        http_response_code(400);
        echo "Spam или пустое сообщение.";
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $yourEmail;
        $mail->Password = $yourAppPassword;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom($yourEmail, 'GitHub Contact Form');
        $mail->addAddress($yourEmail);

        $mail->Subject = 'Новое сообщение с формы';
        $mail->Body = $message;

        $mail->send();
        echo "OK";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Ошибка при отправке: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405);
    echo "Метод не поддерживается";
}
?>