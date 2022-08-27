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
    <input type="email" id="mail" />
    <label for="">Password <span>*</span></label>
    <input type="password" id="password">
    <a href="">Forgot your password?</a>
    <button>LOGIN</button>
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
    <h4>No account yet?</h4>
    <p>Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.</p>
    <button onclick="sgnup()">Create An Account</button>
  </div>
</div>`;
}
function sidesignup(){
  return ``
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

function sgnup() {
  show.innerHTML = null;
  show.innerHTML = sidelogin();
  
}
