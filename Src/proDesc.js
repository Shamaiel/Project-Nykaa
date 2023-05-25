// var products=[

//     {
//         image_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/1/c157735nymcfn0000032_nkw1.jpg",
//         desc:"MCaffeine Naked & Raw Tan Removal Coffee Face Mask",
//         max:645,
//         price:550,
//         off:"30% OFF",
//         rating: '★★★★★'
//     } 
//     // {
//     //     image_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/8/b8e2578nykmcf0000009_1rvm.jpg",
//     //     desc:"MCaffeine Coffee Hydrating Face Serum For Glowing Skin with ...",
//     //     max:575,
//     //     price:450,
//     //     off:"25% OFF",
//     //     rating: '★★★★★'
//     // } ,
//     // {
//     //     image_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3349666007891.jpg",
//     //     desc:"Paco Rabanne 1 Million Eau De Toilette",
//     //     max:4500,
//     //     price:3000,
//     //     off:"45% OFF",
//     //     rating: '★★★★★'
//     // } ,  
//     // {
//     //     image_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787232233_1.jpg",
//     //     desc:"Schwarzkopf Professional Osis + Session Label Strong Hold Ha...",
//     //     max:750,
//     //     price:600,
//     //     off:"30% OFF",
//     //     rating: '★★★★★'
//     // } , 
//     // {
//     //     image_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/0/7027578nymcfn0000026_1rvm.jpg",
//     //     desc:"MCaffeine Naked & Rich Deep Moisturizing Choco Body Lotion",
//     //     max:400,
//     //     price:300,
//     //     off:"20% OFF",
//     //     rating: '★★★★★'
//     // } ,  
//     // {
//     //     image_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/a/1a28038NYMCFCOM00062_1.jpg",
//     //     desc:"MCaffeine Coffee-Choco Cocktail Kit - Relax & De-Stress",
//     //     max:850,
//     //     price:600,
//     //     off:"35% OFF",
//     //     rating: '★★★★★'
//     // } 


// ]

var cartData = JSON.parse(localStorage.getItem("cart-product")) || []

displayPro(cartData)

function displayPro(data){
    
    document.querySelector(".container").textContent = ""
    data.map((elem)=>{
       
        var mainDiv = document.createElement("div")
        mainDiv.setAttribute("id", "mainDiv")

        var leftDiv = document.createElement("div")
        leftDiv.setAttribute("id", "leftDiv")

        var image = document.createElement("img")
        image.setAttribute("src", elem.image_url)
        image.setAttribute("id", "leftImage")

        var icon = document.createElement("i")
        icon.setAttribute("class", "fa-regular  fa-heart");

        leftDiv.append(icon, image)

        var rightDiv = document.createElement("div")
        rightDiv.setAttribute("id", "rightDiv")

        var desc = document.createElement("p")
        desc.textContent = elem.desc
        desc.setAttribute("id", "desc")

        var rating = document.createElement("p")
        rating.textContent = "Rating "+elem.rating
        rating.setAttribute("id", "rating")

        var price = document.createElement("p")
        price.textContent = "MRP:₹" + elem.price
        price.setAttribute("id", "price")

        var btnDiv = document.createElement("div")
        btnDiv.setAttribute("id", "btnDiv")

        var button = document.createElement("button")
        button.textContent  = "Add to cart"
        button.setAttribute("id", "button")

        var input = document.createElement("input")
        input.setAttribute("type", "text")
        input.setAttribute("placeholder", "Enter  pincode")
        input.setAttribute("id", "myInput");

        btnDiv.append(button, input)

        rightDiv.append(desc, rating, price,btnDiv )

      
       mainDiv.append(leftDiv, rightDiv)
       document.querySelector(".container").append(mainDiv)
        
        
         
    })
}