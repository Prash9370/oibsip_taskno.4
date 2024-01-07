
function login() {
  let usernameInput = document.getElementById('username');
  let passwordInput = document.getElementById('password');
  if(localStorage.getItem(usernameInput.value)){
    let storedPassword = retractString(localStorage.getItem(usernameInput.value));
    if (passwordInput.value === storedPassword) {
      alert('Login successful!');
      logdisplay();
    }else {
      alert('Invalid username or password. Please try again.');
    }
  }else {
    alert('Invalid username or password. Please try again.');
  }
};

function signupvisible(){
  document.getElementById("container").style.display="none";
  document.getElementById("signup-container").style.display="block";
}
function loginvisible(){
  document.getElementById("signup-container").style.display="none";
  document.getElementById("container").style.display="block";
}
function signup(event){
  let username = document.getElementById('signup_uname');
  let password = document.getElementById('signuppass');
  let savedacc = localStorage.getItem(username.value);
  if(!savedacc){
    localStorage.setItem(username.value,convertString(password.value));
    alert("Signed Up Successfully!");
  }else{
    alert("Username Already Exists !!!");
  }
  event.preventDefault();
}
function logdisplay(){
  document.getElementById("container").style.display="none";
  document.getElementById("signup-container").style.display="none";
  document.getElementById("heading").style.display="none";
  document.getElementById("body").style.display="block";
}