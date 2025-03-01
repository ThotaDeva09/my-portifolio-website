
function validateForm() {
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const subject=document.getElementById("subject").value
   const message = document.getElementById("message").value;

   if (name === "" || email === "" || subject=="" || message === "") {
     alert("Please fill out all fields.");
     return false;
   }

   alert("Message sent successfully!");
   return true;
 }
