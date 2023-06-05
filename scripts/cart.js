var cartData=JSON.parse(localStorage.getItem('cart-product'))
var i='a';
cartData.forEach(function(data){
  data.id=i;
  i=i+1;
  data['item']=1;
})
localStorage.setItem('cartitems',JSON.stringify(cartData));

var cartitems = JSON.parse(localStorage.getItem('cartitems'));
var cart=document.querySelector('#cart');
var promo=document.querySelector('#promo');
var bt=document.querySelector('#bt');
var emptycart=document.querySelector('#emptycart');
var grandtotalprice=document.querySelector('#grandtotalprice');
var cartlayout=document.querySelector('#cart-layout');
document.querySelector('#button-addon2').addEventListener('click',function(){
    var discount=document.querySelector('#promocode').value;
    applydiscount(discount);
});
var total=cartitems.reduce(function(acc,obj){
    return acc+obj.price*obj.item;
},0);
calculate();
generateCartItems();
function generateCartItems(){
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
    if(cartitems.length!=0){
        var total=cartitems.reduce(function(acc,obj){
            return acc+obj.price*obj.item;
        },0);
        document.querySelector('#totalprice').textContent=total;
        grandtotalprice.textContent=total;
        return(cart.innerHTML=cartitems.map(function(data){  
            let{desc,id,image_url,item,max,off,price}=data;
            return`
                <div class="item">
                <div>
                    <div class="img">
                        <img src="${image_url}" alt="">
                    </div>
                    <div class="name">
                        <p>${desc}</p>
                    </div>
                    <div class="delete">
                        <i class="bi bi-trash" onclick='remove(${id})'></i>
                    </div>
                </div>
                <hr>
                <div>
                    <div>
                        <p>Quantity:</p>
                        <i class="bi bi-dash" onclick='decrease(${id})'></i>
                        <p id='${id}'>${item}</p>
                        <i class="bi bi-plus" onclick='increase(${id})'></i>
                    </div>
                    <div>
                        <b>₹<b id='price'>${price*item}</b></b>
                    </div>
                </div>
            </div>
            `
        }).join(" "));
    }else{
        cartlayout.innerHTML="";
        cart.innerHTML="";
        promo.innerHTML="";
        bt.innerHTML="";
        emptycart.innerHTML=
            `<img src="./empty-cart-4816550-4004141.webp" alt="">
            <p>Your Shopping Bag is empty</p>
            <p>This feels too light,Go on, add all your favourites</p>
            <button type="button" class="btn btn-primary"><a href="index.html">Start Shopping</a></button>`
    }
    
}
function increase(id){
    console.log(id);
    var target=cartitems.find(function(data){
        return data.id===id.id;
    })
    target.item+=1;
    total+=target.price;
    update(id);
}
function decrease(id){
    var target=cartitems.find(function(data){
        return data.id===id.id;
    })
    if(target.item===0) return;
    else{
        target.item-=1;
        total-=target.price;
    }  
    update(id);
}
function update(id){
    var target=cartitems.find(function(data){
        return data.id===id.id;
    })
    localStorage.setItem('cartitems',JSON.stringify(cartitems));
    document.getElementById(id.id).innerHTML=target.item;
    calculate();
}
function calculate(){
    var totalqty=0;
    cartitems.forEach(function(x){
        totalqty+=x.item;
    },0)
    document.querySelector('#cart-size').textContent=totalqty;
    document.querySelector('#totalprice').textContent=total;
    grandtotalprice.textContent=total;
    generateCartItems();
}
function remove(id){
    cartitems.map(function(data,i){
        if(data.id===id.id){
            cartitems.splice(i,1);
            cartData.splice(i,1);
            localStorage.setItem('cartitems',JSON.stringify(cartitems));
            localStorage.setItem('cart-product',JSON.stringify(cartData));
            calculate();
            generateCartItems();
            return;
        }
    })  
}
function applydiscount(discount){
    if(discount==='masai30'){
        discountapplied=true;
        document.querySelector('#totalprice').textContent=total;
        document.querySelector('#discountStatus').textContent=total*0.3
        grandtotalprice.textContent=total-total*0.3;
    }else{
        alert('Promo code not found')
    }
}