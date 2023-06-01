
function creditid(){


 
   var body=document.querySelector("body");
  var num=document.getElementById("number").value;
  console.log(typeof num)
  var cvv=document.getElementById("checkbox").value;
  var checkbox=document.getElementById("cvv").value;
  if(num.length!=0&&cvv.length!=0&&checkbox.length!=0){
    var otp=prompt("Enter otp")
    if(otp=="12345"||otp=="23456"||otp=="24591"||otp=="34567"||otp=="15268"||otp=="45678"||otp=="62737"||otp=="56789"||otp=="13579"||otp==24680){
        var image=document.createElement("img");
        image.setAttribute("src","https://momentumacademy.net/wp-content/uploads/2020/05/Paymentsuccessful21.png");
        image.setAttribute("Alt","sucessfull image");
        var div=document.createElement("div");
        div.setAttribute("class","paymentimg")
        div.append(image);
       body.innerHTML=``;
       
       body.append(div);
       
       }
       else{
        alert("Please Enter Correct Otp")
       }
  }
  else{
    if(num.length==0){
       alert("Enter Card Number");
    }
    else if(cvv.length==0){
        alert("Enter CVV Number");
    }
    else if(checkbox.length==0){
        alert("Tick the Box");
    }
}
  


}

 function pay(){
  
    var upi=document.getElementById("upi").value;
     
 }

function NetBank(){
    console.log("manshi")

}

function PayLetter(){

    console.log("jaan")
}

function Cashondelivery(){
    console.log("kushwaha")
} 

function PayWallet(){
    console.log("kush")
}

function GiftCard(){
    console.log("san")
}

function emi(){
    console.log("waha")
}