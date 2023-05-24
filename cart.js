var cartitems=JSON.parse(localStorage.getItem('cartitems'));
var cart=document.querySelector('#cart');
var total=cartitems.reduce(function(acc,obj){
    return acc+obj.price*obj.item;
},0);
document.querySelector('#totalprice').textContent=total;
generateCartItems();
function generateCartItems(){
    var total=cartitems.reduce(function(acc,obj){
        return acc+obj.price*obj.item;
    },0);
    document.querySelector('#totalprice').textContent=total;
    document.querySelector('#cart-size').textContent=cartitems.length;
    return(cart.innerHTML=cartitems.map(function(data){
        document.querySelector('#cart-size').textContent=cartitems.length;
        
        let{id,name,price,desc,img,item}=data;
        return`
        <div class="item">
            <div>
                <img src=${img} alt="">
            </div>
            <div>
                <div>
                    ${name}
                </div>
                <div>
                    <i onclick='decrease(${id})' class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">${item}</div>
                    <i onclick='increase(${id})' class="bi bi-plus-lg"></i>
                </div>
                <div>
                    <p id='#price'>Rs ${price}</p>
                </div>
            </div>
            <div id="#remove" onclick='remove(${id})'>
                <i class="bi bi-x-lg"></i>
            </div>
        </div> 
        `
    }).join(" "));
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
}
function remove(id){
    cartitems.map(function(data,i){
        if(data.id===id.id){
            cartitems.splice(i,1);
            localStorage.setItem('cartitems',JSON.stringify(cartitems));
            generateCartItems();
            return;
        }
    })  
}