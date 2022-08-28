function sidelogin() {
  return `<div id="signin">
  <div class="top">
    <div class="topsign">
      <h2>SIGN IN</h2>
      <button onclick="cls()">
        CLOSE <span id="nohover">—</span> <span id="onhover">X</span>
      </button>
    </div>
  </div>
  <div id="logininput">
    <label for="">Email address <span>*</span></label>
    <input type="email" id="mail" placeholder="enter email here" />
    <label for="">Password <span>*</span></label>
    <input type="password" id="pass" placeholder="enter password here">
    <a href="">Forgot your password?</a>
    <button onclick="log()">LOGIN</button>
  </div>
  <div class="fullbtn" id="facebook">
    <div>
      <p>Sign in with Facebook</p>
      <i class="fa-brands fa-facebook-f"></i></i>
    </div>
  </div>
  <div class="fullbtn" id="google">
    <div>
      <p>Sign in with Google</p>
      <i class="fa-brands fa-google"></i>
    </div>
  </div>
  <div id="noaccount">
    <i class="fa-regular fa-user"></i>
    <input type="text" id="name" placeholder="enter name here">
    <input type="text" id="email" placeholder="enter email here">
    <input type="password" id="Password" placeholder="enter password here">
    <h4>No account yet?</h4>
    <p>Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.</p>
    <button onclick="sgnup()">Create An Account</button>
  </div>
</div>`;
}
let login = document.getElementById("login");
let show = document.getElementById("sidelogin");
login.addEventListener("click", user);
function user() {
  show.innerHTML = null;
  show.innerHTML = sidelogin();
}

function cls() {
  show.innerHTML = null;
}
let signup = document.getElementById("signup");
function sgnup() {
  let name=document.getElementById("name").value
  let email=document.getElementById("email").value
  let password=document.getElementById("Password").value
  let obj={
    name:name,
    email:email,
    password:password,
  };
  console.log(obj)
  if(!name || !email || !password){
    alert("fill all the inputs")
  }else{
    let obj={
      name,email,password
    }
  }
  localStorage.setItem("sruthi",JSON.stringify(obj))
  document.getElementById("name").value=""
  document.getElementById("email").value=""
  document.getElementById("password").value=""
  alert("sign up succesful")
  window.location.href="#logininput"
}


let data=JSON.parse(localStorage.getItem("sruthi"))||[]

function log(){
  let email=document.getElementById("mail").value;
  let password=document.getElementById("pass").value;
  if(!email|| !password){
    alert("fill all inputs")
  }else{
    if(data.email===email && data.password===password){
        alert("Login Succesful")
        window.location.href="https://kimaye.com/account/login"

    }else{
      alert('Wrong Creditials')
    }
  }
}