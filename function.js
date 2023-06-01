
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
    var body=document.querySelector("body");
    var div=document.createElement("div");
    body.innerHTML=``;
    body.innerHTML=new Date();
     
 }

function NetBank(){
    var card=document.getElementById("selectcard").value;
   console.log(card);
   var newvalue=document.getElementById("payment-Box");
   var div=document.createElement("div")
   div.setAttribute("class","netbankstyle")
  var div1=document.createElement("div");
  var h3=document.createElement("h3");
  h3.textContent="Pay through "+card+ " Bank NetBanking";
  div1.append(h3);

  div.append(div1);

  var body=document.querySelector("body");
  body.innerHTML=``;

  body.append(div1);
  body.innerHTML=`
  <div class="netbankstyle" style=>
  <div>
      <h4>Login to NetBanking</h4>
      Customer ID/ User ID:<input type="text" id="text">
      <p id="color">Forgot Customer ID</p>
      <button id="netbank" onclick="continue1()">
          CONTINUE
      </button>

  </div>
  <div>
      <p>Dear Customer,</p>
      <p>Welcome to the new login page of HDFC Bank NetBanking.
          Its lighter look and feel is designed to give you the best possible user experience. Please continue to
          login using your customer ID and password.</p>
  </div>
</div>
`;
  

}
function continue1(){
    console.log("jaan");
    
    var body=document.querySelector("body");
    var image=document.createElement("img");
    image.setAttribute("src","https://momentumacademy.net/wp-content/uploads/2020/05/Paymentsuccessful21.png");
    image.setAttribute("Alt","sucessfull image");
    var div=document.createElement("div");
    div.setAttribute("class","paymentimg")
    div.append(image);
   body.innerHTML=``;
   
   body.append(div);
       
       }


function PayLetter(){

    var body=document.querySelector("#payment-Box");
var num=document.getElementById("number1").value;
console.log("sanjeev");
if(num.length==10){
    body.innerHTML=`
    <div id="payletter">
       <div>
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Zest_Simpl/Simpl.svg" alt="payletter">
       </div>
       <div>
        <h4>
            SIMPLE
        </h4>
        <P>
            You are not eligible for this payment option
        </P>
       </div>
    </div>
    `;

}
else{
    alert("Enter Correct Number");
}

  
}

function Cashondelivery(){
    var body=document.querySelector("#payment-Box");
    var button=document.getElementById("btn5").textContent="Order Placed";
   
} 

function PayWallet(){
    console.log("kush");
    var body=document.querySelector("#payment-Box");
var num=document.getElementById("number6").value;
console.log("sanjeev");
if(num.length==10){
    body.innerHTML=`
    <div id="payletter">
       <div>
        <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/Zest_Simpl/Simpl.svg" alt="payletter">
       </div>
       <div>
        <h4>
            SIMPLE
        </h4>
        <P>
            You are not eligible for this payment option
        </P>
       </div>
    </div>
    `;

}
else{
    alert("Enter Correct Number");
}
 

}

function GiftCard(){
    console.log("san")
}

function emi(){
    console.log("waha")
    var body=document.querySelector("#payment-Box");
   
    console.log("sanjeev");
  
        body.innerHTML=`
        <div id="payletter">
           <div>
            <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/alert.svg" alt="payletter">
           </div>
           <div>
            <h4>
                SIMPLE
            </h4>
            <P>
               
EMI option is available only on orders above Rs 4000.
            </P>
           </div>
        </div>
        `;
    
   
    
}