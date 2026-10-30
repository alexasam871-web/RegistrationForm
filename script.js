document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let message = document.getElementById("message");

    if (name == "" || email == "" ||
        password == "" || confirm == "") {

        message.innerHTML = "Please fill all fields!";
        message.style.color = "red";

    } else if (password != confirm) {

        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";

        
    }else {
    alert("Registration Successful!");

    window.location.href = "welcome.html";
}


});
