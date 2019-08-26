
 <?php
 $name = $_POST['name'];
 $email = $_POST['email'];
 $subject = $_POST['subject'];
 $message = $_POST['message'];

 $to = 'info@ofoghplus.com';
 $message = ' FROM: '.$name.' Email: '.$email.' Message: '.$message;
 $headers = 'From: info@ofoghplus.com' . "\r\n";
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
 echo "ایمیل شماصحیح نیست ,لطفا ایمیل صحیح را وارد نمایید.";

 }elseif($name==""){
 echo "پر کردن فیلد نام ضروری است";
 }elseif($subject==""){
 echo "پر کردن فیلد موضوع ضروری است";
 }else{
mail($to, $subject, $message, $headers); //This method sends the mail.
     echo "پیام شما با موفقیت ارسال شد"; // success message

 }
?>
