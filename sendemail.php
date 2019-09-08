
 <?php
 $name = $_POST['name'];
 $email = $_POST['email'];
 $subject = $_POST['subject'];
 $message = $_POST['message'];

 $to = 'info@ofoghplus.com';
 $message = ' FROM: '.$name.' Email: '.$email.' Message: '.$message;
 $headers = 'From: info@ofoghplus.com' . "\r\n";
mail($to, $subject, $message, $headers); //This method sends the mail.
     echo "پیام شما با موفقیت ارسال شد";
?>
