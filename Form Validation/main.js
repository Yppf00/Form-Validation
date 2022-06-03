let name = document.getElementById('username');
let mail = document.getElementById('mail');
let password = document.getElementById('password');
let repeat_password = document.getElementById('repeat-password');
let valider = document.getElementById('valider');
let info = document.getElementsByClassName('info');
let messages = [
   "Username must be at least 3 characters long",
   "Username must be less than 15 characters long",
   "Enter valid mail",
   "Password must be at least 8 characters long",
   "Passwords are not the same",
];
valider.addEventListener('click', function () {
   if (name.value.length < 3) {
      name.style.borderColor = 'red';
      info[0].innerHTML = '<span>' + messages[0] + '</span>';
   } else if (name.value.length > 15) {
      name.style.borderColor = 'red';
      info[0].innerHTML = '<span>' + messages[1] + '</span>';
   } else {
      name.style.borderColor = 'green';
   }
   name.addEventListener('click', function () {
      info[0].innerText = "";
      name.style.borderColor = '#ccc';
   });
   if (mail.value.indexOf('@') == -1 || mail.value.indexOf('.') == -1) {
      mail.style.borderColor = 'red';
      info[1].innerHTML = '<span>' + messages[2] + '</span>';
   } else {
      mail.style.borderColor = 'green';
   }
   mail.addEventListener('click', function () {
      mail.style.borderColor = '#ccc';
      info[1].innerText = "";
   });
   if (password.value.length < 8) {
      password.style.borderColor = 'red';
      info[2].innerHTML = '<span>' + messages[3] + '</span>';
   } else {
      password.style.borderColor = 'green';
   }
   password.addEventListener('click', function () {
      password.style.borderColor = '#ccc';
      info[2].innerText = "";
   });
   if (password.value != repeat_password.value) {
      repeat_password.style.borderColor = 'red';
      info[3].innerHTML = '<span>' + messages[4] + '</span>';
   } else {
      repeat_password.style.borderColor = 'green';
   }
   repeat_password.addEventListener('click', function () {
      repeat_password.style.borderColor = '#ccc';
      info[3].innerText = "";
   });
   if (name.value.length > 3 && name.value.length < 15 && mail.value.indexOf('@') != -1 && mail.value.indexOf('.') != -1 && password.value.length > 7 && password.value == repeat_password.value) {
      alert('Form is valid');
   }
});
