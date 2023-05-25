var cartitems=JSON.parse(localStorage.getItem('cartitems'));
var cart=document.querySelector('#cart');
var promo=document.querySelector('#promo');
var bt=document.querySelector('#bt');
var emptycart=document.querySelector('#emptycart');
var discountapplied=false;
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
    if(cartitems.length!=0){
        var total=cartitems.reduce(function(acc,obj){
            return acc+obj.price*obj.item;
        },0);
        document.querySelector('#totalprice').textContent=total;
        return(cart.innerHTML=cartitems.map(function(data){  
            let{id,name,price,desc,img,item}=data;
            return`
                <div class="item">
                <div>
                    <div class="img">
                        <img src="${img}" alt="">
                    </div>
                    <div class="name">
                        <p>${name}</p>
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
        cart.innerHTML="";
        promo.innerHTML="";
        bt.innerHTML="";
        emptycart.innerHTML=
            `<img src="images/empty-cart-4816550-4004141.png" alt="">
            <p>Your Shopping Bag is empty</p>
            <p>This feels too light,Go on, add all your favourites</p>
            <button type="button" class="btn btn-primary">Start Shopping</button>`
    }
    
}
function increase(id){
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
    generateCartItems();
}
function remove(id){
    cartitems.map(function(data,i){
        if(data.id===id.id){
            cartitems.splice(i,1);
            localStorage.setItem('cartitems',JSON.stringify(cartitems));
            calculate();
            generateCartItems();
            return;
        }
    })  
}
function applydiscount(discount){
    if(discount==='masai30'){
        discountapplied=true;
        total-=total*0.3;
        document.querySelector('#totalprice').textContent=total;
    }else{
        alert('Promo code not found')
    }
}