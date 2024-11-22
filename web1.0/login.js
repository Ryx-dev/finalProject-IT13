const users = [
  ["gian@gmail.com", "gian123"],
  ["joryx@gmail.com", "joryx123"],
  ["jc@gmail.com", "jc123"],
  ["andrea@gmail.com", "andrea123"],
  ["kervinjade@gmail.com", "kervinjade123"],
  ["leo@gmail.com", "leo123"],
  ["kelly@gmail.com", "kelly123"],
  ["seandale@gmail.com", "seandale123"]
];

const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
togglePassword.addEventListener('click', function() {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;this.classList.toggle('fa-eye-slash');
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u[0] === email && u[1] === password);

  if (user) {
    Swal.fire({
      title: 'Welcome Back User!',
      text: 'You have logged in successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
       
      window.location.href = "index.html";  
    });
   
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Invalid email or password.',
      icon: 'error',
      confirmButtonText: 'Try Again'
    });
  }
});


  