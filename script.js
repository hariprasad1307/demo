function login() {
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    if (username === "example" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your username and password.");
    }
}

function signup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getEleme0ntById("signupPassword").value;
    let otp=Math.floor(Math.random()*10000);
        Email.send({
            SecureToken :"137c267c-7fc5-406f-9a0f-3ca1a422f87b",
            To : email.value,
            From : "hariprasad13072005@gmail.com",
            Subject : "This is the subject",
            Body : "your otp is"+otp
        }).then(
          message => alert("otp send")
        );
    

    
}

document.getElementById("togglePassword").addEventListener("click", function() {
    togglePassword("loginPassword");
});

document.getElementById("toggleSignupPassword").addEventListener("click", function() {
    togglePassword("signupPassword");
});

function togglePassword(passwordFieldId) {
    let passwordField = document.getElementById(passwordFieldId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
    
}
