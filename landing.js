// SIMPLE HASH FUNCTION (simulate bcrypt)
function hashPassword(password) {
    return btoa(password); // base64 (demo hashing)
}
// CAPTCHA
function generateCaptcha() {
    let chars = "ABCDEFG123456";
    let captcha = "";
    for (let i = 0; i < 5; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById("captchaText").innerText = captcha;
}

generateCaptcha();

// REGISTER
function register() {
    let user = document.getElementById("regUser").value;
    let pass = hashPassword(document.getElementById("regPass").value);

    if (user === "" || pass === "") {
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    alert("Registered Successfully ");
    showLogin();
}

// LOGIN
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = hashPassword(document.getElementById("loginPass").value);

    let storedUser = localStorage.getItem("user");
    let storedPass = localStorage.getItem("pass");

    let captchaText = document.getElementById("captchaText").innerText;
    let captchaInput = document.getElementById("captchaInput").value;

    if (captchaText !== captchaInput) {
        alert("Captcha Wrong ");
        generateCaptcha();
        return;
    }

    if (user === storedUser && pass === storedPass) {
        alert("Login Success ");

        // 👉 REDIRECT TO YOUR MAIN PAGE
        window.location.href = "index.html";
    } else {
        alert("Invalid Login ");
    }
}

// SWITCH FORMS
function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}
