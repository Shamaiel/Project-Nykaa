var loginarr=JSON.parse(localStorage.getItem("credentials"))||[]
document.querySelector("form").addEventListener("submit",check)
var flag=0;
function check(){
    event.preventDefault();
  var mobile=document.getElementById("number").value;
  var password=document.getElementById("number2").value;
 // console.log(mobile)
 if( mobile==="" ||password===""){
       
  alert("Fill complete details first")
}
else{
  loginarr.map(function(ele){
      
      if((mobile===ele.mobile ||mobile===ele.email) && (password===ele.password)){
        alert("Welcome Back Nykaa User")
      
        flag=1;
        gotoindex()
      }
     
  })
  if(flag==0){
  alert("Please sign up first")
  signup()
  }
}
}
 function signup(){
  window.location.href = "signup.html";
 }
 function gotoindex(){
  window.location.href = "index.html";
 }
 


 var customerarray = JSON.parse(localStorage.getItem("credentials")) || [];
 function displayName(customerarray) {
   customerarray.map((elem) => {
     var userName = elem.name;
     document.getElementById("GoToLogin1").display = "none";
     document.getElementById("getn").textContent = userName;
    
   });
 }

 

 



 