
// var cartData = JSON.parse(localStorage.getItem("cart-product")) || []


// displayPro(cartData)

// function displayPro(data){
   
//   document.querySelector(".container").textContent = ""
  
//     data.map((elem)=>{
       
//         var mainDiv = document.createElement("div")
//         mainDiv.setAttribute("id", "mainDiv")

//         var leftDiv = document.createElement("div")
//         leftDiv.setAttribute("id", "leftDiv")

//         var image = document.createElement("img")
//         image.setAttribute("src", elem.image_url)
//         image.setAttribute("id", "leftImage")

//         var icon = document.createElement("i")
//         icon.setAttribute("class", "fa-regular  fa-heart");

//         leftDiv.append(icon, image)

//         var rightDiv = document.createElement("div")
//         rightDiv.setAttribute("id", "rightDiv")

//         var desc = document.createElement("p")
//         desc.textContent = elem.desc
//         desc.setAttribute("id", "desc")

//         var rating = document.createElement("p")
//         rating.textContent = "Rating "+elem.rating
//         rating.setAttribute("id", "rating")

//         var price = document.createElement("p")
//         price.textContent = "MRP:₹" + elem.price
//         price.setAttribute("id", "price")

//         var btnDiv = document.createElement("div")
//         btnDiv.setAttribute("id", "btnDiv")

//         var button = document.createElement("button")
//         button.textContent  = "Add to cart"
//         button.setAttribute("id", "button")

//         var input = document.createElement("input")
//         input.setAttribute("type", "text")
//         input.setAttribute("placeholder", "Enter  pincode")
//         input.setAttribute("id", "myInput");

//         btnDiv.append(button, input)

//         rightDiv.append(desc, rating, price,btnDiv )

      
//        mainDiv.append(leftDiv, rightDiv)
//        document.querySelector(".container").append(mainDiv)
        
        
         
//     })
// }



var desc = JSON.parse(localStorage.getItem("desc")) || 0

displayPro(desc)

function displayPro(elem){
   
  document.querySelector(".container").textContent = ""

        
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

        var rLDivContainer = document.createElement("div")
        rLDivContainer.setAttribute("id","rlContainer")
        
        var rLDiv1 = document.createElement("div")
        rLDiv1.setAttribute("id", "rLDiv1")
        var imgPDiv = document.createElement("div")
        imgPDiv.setAttribute("id","imgPDiv")
        var imag = document.createElement("img")
        imag.setAttribute("src", "https://lh3.googleusercontent.com/YgR2EMQ7Jwo9XUH8NS_ky-VH3yBPfDqcgxR4FWNE--oRoh8hom0NurmXVYOljjgkghalxrTMBtW6WtRTsVOUviNgmk3RltKGqoKaxS8jRQ")
        imag.setAttribute("id", "image")
        var p1 = document.createElement("p")
        p1.textContent = "100% Genuine Products"
        p1.setAttribute("id", "ptag")
        imgPDiv.append(imag, p1)
        rLDiv1.append( imgPDiv)

        var rLDiv2 = document.createElement("div")
        rLDiv2.setAttribute("id", "rLDiv2")
        var imgPDiv2 = document.createElement("div")
        imgPDiv2.setAttribute("id","imgPDiv2")
        var imag = document.createElement("img")
        imag.setAttribute("src", "https://lh3.googleusercontent.com/ihciYxMdR9sZs_c16wGhEGV42uP9_S8FhW_yHf7j9F9VM7hHq4MY_T2ccOi0_wDoKQIDHULHRllmAi7r6aHXa25C-XpR4PI9rLaWv7oi")
        imag.setAttribute("id", "image")
        
        var p2 = document.createElement("p")
        p2.textContent = "Easy Return Policy"
        p2.setAttribute("id", "p2tag")
        imgPDiv2.append(imag, p2)
        rLDiv2.append(imgPDiv2)
       
      
        rLDivContainer.append(rLDiv1, rLDiv2)


        rightDiv.append(desc, rating, price,btnDiv,  rLDivContainer )

      
       mainDiv.append(leftDiv, rightDiv)
       document.querySelector(".container").append(mainDiv)
        
        
         
  
}



