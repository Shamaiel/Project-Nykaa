function Address() {
   
 var store=document.getElementById("store2");
 store.innerHTML=`
 <body id="body1">
    <div class="store1">
        <p>Address</p>
        <p> <input type="number" class="Main" placeholder="Pincode"></p>
        <p><input type="textarea" class="Main" placeholder="House/Flate/Office No"></p>
        <p><input type="textarea" class="Main" placeholder="Road Name/ Area/ Colony"></p>
    </div>
    <div class="store1">
        <p>
            Contact
        </p>
        <p>Information provided here will be used to contact you for delivery updates</p>
       
        <p> <input type="textarea" class="Main" placeholder="name"></p>
        <p><input type="number" class="Main" placeholder="phone number"></p>
        <p><input type="textarea" class="Main" placeholder="email id"></p>
    </div>
    <a href="payment.html">
        <button id="btnAddress">Ship to this Address</button>
    </a>
 `
}
