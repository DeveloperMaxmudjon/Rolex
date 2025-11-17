
document.querySelector(".joinNow").onclick = function () {
    document.getElementById("joinMenu").style.top = "90px";
};

document.querySelector(".closeJoinMenu").onclick = function () {
    document.getElementById("joinMenu").style.top = "-1500px";
};


function generatePassword() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "@#$%&<>?";

  const all = lower + upper + numbers + symbols;
  let password = "";

  password += lower[Math.floor(Math.random() * lower.length)];
  password += upper[Math.floor(Math.random() * upper.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  for (let i = password.length; i < 9; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }

  password = password

  return password;
}

console.log(generatePassword());

document.getElementById("generatePass").onclick = function() {
    document.getElementById("getPassword").value = generatePassword();
}


const passwordInput = document.getElementById("getPassword");
const toggleButton = document.getElementById("showPassword");

const hideIcon = document.getElementById("hide");
const showIcon = document.getElementById("show");

hideIcon.style.display = "none";

toggleButton.onclick = function () {


    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.title = "Hide Password";

        hideIcon.style.display = "none";
        showIcon.style.display = "block";

    } else {
        passwordInput.type = "password";
        toggleButton.title = "Show Password";


        hideIcon.style.display = "block";
        showIcon.style.display = "none";
    }
};



let regEmail = "";
let pass = "";
let first = "";
let last = "";


document.getElementById("newUser").onclick = function() {

    const firstName = document.getElementById("getFirstName").value;
    const lastName  = document.getElementById("getLastName").value;
    const email    = document.getElementById("getEmail").value;
    const password  = document.getElementById("getPassword").value;
    const confirm   = document.getElementById("configPassword").value;

    const errFirst  = document.getElementById("errorFirstName");
    const errLast   = document.getElementById("errorLastName");
    const errEmail  = document.getElementById("emailErrorJoin");
    const errPass   = document.getElementById("passwordErrorJoin");
    const errConf   = document.getElementById("configPasswordErrorSignIn");

    errFirst.innerHTML = "";
    errLast.innerHTML = "";
    errEmail.innerHTML = "";
    errPass.innerHTML = "";
    errConf.innerHTML = "";




    if (firstName.length === 0) {errFirst.innerHTML = "Enter your first name"};
    if (lastName.length === 0) {errLast.innerHTML = "Enter your last name"};

    if (email.length === 0) {
        errEmail.innerHTML = "Enter an email";
    } else if (!email.includes('@') || !email.includes(".")) {
            errEmail.innerHTML = "Enter a valid email (must contain @ and .)";
    }

    if (password.length <= 7) {
        errPass.innerHTML = "From 8 to 25 characters"
    }else if (password.length === 0) {
        errPass.innerHTML = "Enter a password"
    }
    if (confirm.length === 0 ) {
        errConf.innerHTML = "Config a password"
    } else if (confirm !== password && confirm.length <= 8) {
        errConf.innerHTML = "The password must match"
    }

    if (firstName.length >= 2 && lastName.length >= 2 && email.length >= 8 && password.length >= 8 && confirm.length >= 8 && password === confirm) {
        regEmail = email;
        pass = password;
        first = firstName;
        last = lastName;
        console.log(regEmail, pass, first, last)
    }

};