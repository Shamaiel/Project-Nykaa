document.querySelector("form").addEventListener("submit", adddata)
var customerarray = JSON.parse(localStorage.getItem("credentials")) || []
function adddata() {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(name)

    var obj = {
        name: name,
        mobile: mobile,
        email: email,
        password:password

    }
    customerarray.push(obj)
    localStorage.setItem("credentials", JSON.stringify(customerarray))
    login()
}
function login(){
    alert("You are successfully signed up.Press OK to proceed to login page")
window.location.href = "login.html";
}