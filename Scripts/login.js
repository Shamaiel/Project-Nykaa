var loginarr=JSON.parse(localStorage.getItem("credentials"))||[]
document.querySelector("form").addEventListener("submit",check)
var flag=0;
function check(){
    event.preventDefault();
  var mobile=document.getElementById("number").value;
  var password=document.getElementById("number2").value;
 // console.log(mobile)
  loginarr.map(function(ele){
      
      if((mobile===ele.mobile ||mobile===ele.email) && (password===ele.password)){
        alert("Welcome Back Nykaa User")
        window.location.href = "index.html";
        flag=1;
      }
     
  })
  if(flag==0){
  alert("Please sign up first")
  signup()
  }
}
 function signup(){
  window.location.href = "signup.html";
 }
 