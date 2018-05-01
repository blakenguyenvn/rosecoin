<?php
    require 'PHPMailer/class.phpmailer.php';
    require 'PHPMailer/class.smtp.php';

    //== Only process POST requests.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    	
        //== Get the form fields and remove whitespace.
        $email = strip_tags(filter_var(trim($_POST["contact_mail"]), FILTER_SANITIZE_EMAIL));
        $message = strip_tags(trim($_POST["contact_message"]));

        $mail_body = '<p>Customer email: <strong>' . $email . '</strong></p>';
        $mail_body .= '<p>Message: <strong>' . $message . '</strong></p>';

        //== Email
        $from_mail = 'no-reply@whispers.live';
        $from_name = 'Whispers Server';
        $to_mail = 'support@whispers.live';
        $to_name = 'Whispers Support';

        //== Mandrill Config
        $mail_host = 'smtp.mandrillapp.com';                   // Specify main and backup server
        $mail_port = 2525;                                      // Enable SMTP authentication
        $mail_username = 'william@voxypad.com';                // SMTP username
        $mail_password = '_B4L4QartPZaFaoqdWYAXA'; 

        //== Send mail
        $mail = new PHPMailer;

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = $mail_host;                 // Specify main and backup server
        $mail->Port = $mail_port;                                    // Set the SMTP port
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = $mail_username;                // SMTP username
        $mail->Password = $mail_password;                  // SMTP password: OB_XQ3xtNETqHXhTMk7PIw
        // $mail->SMTPSecure = 'tls'; 

        $mail->From = $from_mail;
        $mail->FromName = $from_name;
        $mail->AddAddress($to_mail, $to_name);  // Add a recipient

        $mail->IsHTML(true);                                  // Set email format to HTML

        $mail->Subject = 'Contact form submit';
        $mail->Body    = $mail_body;

        $mail->AltBody = '';

        if(!$mail->Send()) {
            $result['status'] = 'error';
            $result['message'] = 'Message could not be sent.' . 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            $result['status'] = 'success';
            $result['message'] = 'Your email has been sent successfully!';
        }

        echo json_encode($result);
        exit;
        

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        $result['status'] = 'error';
        $result['message'] = "Oops! Something went wrong.";

        echo json_encode($result);
        exit;
    }

?>