// document.querySelector("#mid2>div>div:nth-child(1)").addEventListener("click",payment1);


var creditCardLink = document.getElementById("credit-Card");
creditCardLink.addEventListener("click",showcreditCard)
var paymentBox = document.getElementById("payment-Box");
function showcreditCard(){
  paymentBox.innerHTML=`
  <div id="upr1">
  <p>One card for all Nykaa apps</p>
      </div>
      <hr>
      <div id="midc1">
          <div>
              <p>WE ACCEPT</p>
              <span><img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/VISA.svg" alt="visa"></span>
              <span><img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/mastercard.svg" alt="visa img"></span>
              <span><img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/Rupay.svg" alt="rupay"></span>
              <span><img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/AMEX.svg" alt=""></span><br>
  
              <input type="number" name="" id="number"placeholder="Enter Card Number"><br>
              <input type="password" name="" id="cvv"placeholder="CVV"><br>
              <input type="checkbox" name="" id="checkbox">Save this card securely for future
  <span id="san2">Know More </span><br>
              <button>
    Verify & Pay
              </button>
  
          </div>
      </div>
  `
}

var UPI=document.getElementById("upi1").addEventListener("click",upishow);
var paymentBox1 = document.getElementById("payment-Box");
function upishow(){
   paymentBox1.innerHTML=`
   <div id="upr1">
   <p>Pay with UPI</p>
</div>
<hr>
<div id="midl1">
   <div>
       <p>1. Select UPI App</p>
   </div>
   <div>
       <div>
           <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/fashion_icons/googlePay.svg" alt="google">
           <p style="margin-top:7px">Google Pay</p>
       </div>
       <div>
           <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/PhonePe.svg" alt="PhonePe">
           <p style="margin-top:7px">PhonePe</p>
       </div>
       <div>
           <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/Paytm.svg" alt="Paytm">
           <p style="margin-top:7px" >Paytm</p>
       </div>
       <div>
           <img src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/UPI-Logo-vector%201.svg" alt="Other UPI">
           <p style="margin-top:7px">Other UPI</p>
       </div>
   </div>
</div>
<div id="midl2" style="display: block">
   <p>2. Enter UPI/VPA Id</p>
   <input type="text" name="" id="upi" placeholder="Enter UPI ID">
</div>
<div id="btn1">
<button> Pay</button>
</div>
   `
  
}

var NetBanking=document.getElementById("Net-Banking").addEventListener("click",NetBankingData);
var paymentBox3 = document.getElementById("payment-Box");
function NetBankingData(){
    paymentBox3.innerHTML=`
    <div id="upr1">
    <p>Pay with Net Banking</p>
    </div>
    <hr>
<div id="midn1">
    <select name="" id="selectcard">
        <option value="">Select the card</option>
        <option value="">
            AXIS</option>
            <option value="">
                HDFC</option>
            <option value="">
                ICICI</option>
            <option value="">KOTAK</option>
            <option value="">
                SBI</option>
            <option value="">
                YES</option>
            <option value="" id="other">Other Bank</option>
    </select>
</div>
<button id="btn2">
    Pay using Net-Banking
</button>
    
    `
}

var payLetter=document.getElementById("Payletter").addEventListener("click",Payletter);
var paymentBox4 = document.getElementById("payment-Box");

function Payletter(){
    paymentBox4.innerHTML=`
    <div id="upr1">
    <p>Buy Now & Pay Later</p>
    </div>
    <hr>
<div id="midpl">
<input type="number" name="" id="number1"placeholder="Enter Your number">
</div>
<button id="btn3">
check & Pay
</button>
    `
    
}

var CashOnDelivery=document.getElementById("CashOnDelivery").addEventListener("click",CashDelivery);
var paymentBox5= document.getElementById("payment-Box");

function CashDelivery(){
paymentBox5.innerHTML=`
<div id="upr1">
<p>Pay at your doorstep</p>
</div> 
<hr>
<div id="mildo">
<span><img src="https://images-static.nykaa.com/media/wysiwyg/Icon/Iconoffer.png" alt="">
</span>
<p>Pay through Paytm wallet, Simpl or CRED Pay and get exciting cashbacks upto Rs. 500</p>
</div>
<button id="btn5">
Place Order
</button>
`

}


var PaytmWallet=document.getElementById("PaytmWallet").addEventListener("click",PaytmWallet1);
var paymentBox6= document.getElementById("payment-Box");
function PaytmWallet1(){
    paymentBox6.innerHTML=`
    <div id="upr1">
        <p>Pay with Paytm</p>
    </div>
    <hr>
    <div id="midw">
        <input type="number" name="" id="number6"placeholder="Enter Your Number">
    </div>
    <button id="btn6">
       Link
    </button>
    
    `
}

var GiftCart=document.getElementById("GiftCard").addEventListener("click",GiftCard1);
var paymentBox7= document.getElementById("payment-Box");
function GiftCard1(){
    paymentBox7.innerHTML=`
    <div id="upr1">
    <p>One card for all Nykaa apps</p>
    </div>
    <hr>
<div id="midg">
    <input type="number" name="" id="number7"placeholder="Enter Number">
</div>
<div id="num7">
    <input type="number" name="" id="pin"placeholder="PIN">
    <button id="btn7">Proceed</button>
</div>
    
    `
}

var EMI=document.getElementById("emi").addEventListener("click",EMI1);
var paymentBox8= document.getElementById("payment-Box");
function EMI1(){
    paymentBox8.innerHTML=`
    <div id="upr1">
    <p>Pay with EMI</p>
    </div>
    <hr>
<div>
    <p> * check the EMI List & Shopping more than 4000</p>
</div>
<button id="btn8">proceed</button>
    `
}