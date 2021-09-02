const contactMeForm = document.getElementById("contactme");

function lowerCaseValidate(email) {
  return /[a-z]/.test(email) && /[A-Z]/.test(email);
}

contactMeForm.addEventListener("submit", function (event) { 
  event.preventDefault();
  const ERROR_MESSAGE = "Email should be in  lower case";
  const email = document.getElementById('useremail').value;
  const name = document.getElementById('username').value;
  const message = document.getElementById('usermessage').value;
  const user = { name, email, message };
  localStorage.setItem('userData', JSON.stringify(user));
  if(lowerCaseValidate(email)){
    document.getElementById("p-error").innerHTML =ERROR_MESSAGE;
  }else{
      console.log(email)
  }

});
