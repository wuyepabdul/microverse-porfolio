const contactMeForm = document.getElementById('contactme');

function lowerCaseValidate(email) {
  return /[a-z]/.test(email) && /[A-Z]/.test(email);
}

contactMeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const ERROR_MESSAGE = 'Email should be in  lower case';
  const email = document.getElementById('email').value;
  if (lowerCaseValidate(email)) {
    document.getElementById('p-error').innerHTML = ERROR_MESSAGE;
  } else {
    contactMeForm.submit();
  }
});
