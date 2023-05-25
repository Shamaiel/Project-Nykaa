document.querySelector("#mid2>div>div:nth-child(1)").addEventListener("click",payment1);

function payment(){
    var store1=document.querySelector("#mid2>div:nth-child(2)")
   var div1=document.createElement("div");
   var p1=document.createElement("p");
   p1.textContent="One card for all Nykaa apps"
   var hr1=document.createElement("hr")
  
   div1.append(p1,hr1)
   var div2=document.createElement("div")

   var div3=document.createElement("div")
   var p3=document.createElement("p");
   p3.textContent="1. Select UPI App"
   div3.append(p3);

   var div4=document.createElement("div")

   var div41=document.createElement("div")
  var img4=document.createElement("img");
  img4.setAttribute("src","https://adn-static1.nykaa.com/media/wysiwyg/Payments/fashion_icons/googlePay.svg");
  img4.setAttribute("alt","google pay");
  var p4=document.createElement("p")
  p4.textContent="Google Pay";
 
div4.append(img4,p4)
console.log(div4);
   var div4=document.createElement("div")
   var div4=document.createElement("div")
   var div4=document.createElement("div")


   var div2=document.createElement("div")
   var div2=document.createElement("div")
   
   store1.append(div4);
}

document.querySelector("#mid2>div>div:nth-child(5)").addEventListener("click",payment5);



function payment5(){

var div5=document.createElement("div");


}