<?php

// get posted data into local variables
$EmailFrom = "info@rkmcom.com";
$EmailTo = "info@rkmcom.com";
$Subject = "Website Contact Form";
//$FullName = Trim(stripslashes($_POST['name'])); 
//$EmailAddress = Trim(stripslashes($_POST['email'])); 
//$Message = Trim(stripslashes($_POST['message'])); 

$FullName=$_REQUEST['name']; 
$EmailAddress=$_REQUEST['email']; 
$Message=$_REQUEST['message']; 

// validation
$validationOK=true;
//if (Trim($EmailFrom)=="") $validationOK=false;
//if (Trim($FullName)=="") $validationOK=false;
//if (Trim($YourEmailAddress)=="") $validationOK=false;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contacts.html?response=error\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $FullName;
$Body .= "\n";
$Body .= "Email Address: ";
$Body .= $EmailAddress;
$Body .= "\n";
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contacts.html?response=sent\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contacts.html?response=error\">";
}
?>