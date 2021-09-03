const contactMeForm = document.getElementById('contactme');

function lowerCaseValidate(email) {
  return /[A-Z]/.test(email);
}

contactMeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const ERROR_MESSAGE = 'Email should be in  lower case';
  const email = document.getElementById('useremail').value;
  const name = document.getElementById('username').value;
  const message = document.getElementById('usermessage').value;
  const user = { name, email, message };
  localStorage.setItem('userData', JSON.stringify(user));
  if (lowerCaseValidate(email)) {
    document.getElementById('p-error').innerHTML = ERROR_MESSAGE;
  } else {
    contactMeForm.submit();
  }
});

window.addEventListener('load', () => {
  if (localStorage.length > 0) {
    const userData = JSON.parse(localStorage.getItem('userData'));
    document.getElementById('useremail').value = userData.email;
    document.getElementById('username').value = userData.name;
    document.getElementById('usermessage').value = userData.message;
  }
});