<?php
require_once('class.phpmailer.php');// include the class name
	$mail = new PHPMailer(); // create a new object
	$mail->IsSMTP(); // enable SMTP
	$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	$mail->SMTPAuth = true; // authentication enabled
	$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for GMail
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 587; // or 587
	$mail->IsHTML(true);
	$mail->Username = "username@gmail.com";
	$mail->Password = "XXXX";
	$mail->SetFrom("sdfsdf.idr@gmail.com");
	$mail->Subject = "Here is the subject";
	$mail->Body = "This is the HTML message body <b>in bold!</b>";
	$name = "sender@gmail.com";
	$mail->AddAddress('reciever@gmail.com', $name);
	 if(!$mail->Send()){
	    echo "Mailer Error: " . $mail->ErrorInfo;
	}
	else{
	    echo "Message has been sent";
	}
?>
