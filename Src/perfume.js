// import { showMenSection } from "./men.js";

let perfumeData = [
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/7/b711e368904245710682_1.jpg',
      desc: 'Moi By Nykaa Mini Pocket Perfume - Amour',
      rating: '★★★★★',
      price: 367,
      bestseller: 'BESTSELLER',
      off:"20% OFF"
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/34178f88904245710736_1.jpg',
      desc: 'Moi By Nykaa Mini Pocket Perfume - Joie De Vivre',
      rating: '★★★★',
      price: 789,
      off:"20% OFF",
      bestseller: 'BESTSELLER'
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/9/696e0818904245710729_1.jpg',
      desc: "Moi By Nykaa Mini Pocket Perfume - Raison D'Etre",
      rating: '★★★★★',
      price: 741,
      off:"20% OFF",
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/3/3360372078500.jpg',
      desc: 'Giorgio Armani Acqua Di Gio Eau De Toilette',
      rating: '★★★',
      off:"20% OFF",
      price: 517
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904173505381.jpg',
      desc: 'Ramsons You are lovely Eau De Perfume',
      rating: '★★★★★',
      off:"20% OFF",
      price: 436,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/5/f5820708904245712198_1.jpg',
      desc: 'Nykaa Cosmetics Masaba By Nykaa Mini Pocket Perfume',
      rating: '★★★★',
      off:"20% OFF",
      price: 899,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/7/17057038411061818961_1.jpg',
      desc: 'Carolina Herrera Good Girl Eau De Parfum',
      rating: '★★★★★',
      off:"20% OFF",
      price: 449,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/0/10ml-7640177362063_1_.jpg',
      desc: 'Chopard Happy Chopard Lemon Dulci Eau De Parfum',
      rating: '★',
      price: 757,
      off:"20% OFF"
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/5/75ca31askinn00000007_1.jpg',
      desc: 'Skinn By Titan Tales Ibiza Eau De Parfum For Women',
      rating: '★★★★★',
      off:"30% OFF",
      price: 482,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/3/23804-_1_.jpg',
      desc: 'Salvatore Ferragamo Amo Flowerful Eau de Toilette',
      rating: '★★★',
      off:"30% OFF",
      price: 328
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/0/8011003993826.jpg',
      desc: 'Versace Bright Crystal Eau De Toilette',
      rating: '★★★★★',
      off:"30% OFF",
      price: 769,
      bestseller: 'BESTSELLER'
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/3/63135823562700373169_asp1.jpg',
      desc: 'Jaguar Classic Black Eau De Toilette',
      rating: '★',
      off:"30% OFF",
      price: 353
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/8/e854e6b3348901250153_a.jpg',
      desc: 'DIOR Sauvage Eau De Toilette',
      rating: '★★★★★',
      off:"30% OFF",
      price: 387,
      bestseller: 'BESTSELLER'
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/4/1490e6b3348901368247_a.jpg',
      desc: 'DIOR Sauvage Eau De Parfum',
      rating: '★',
      off:"30% OFF",
      price: 444
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/b/cb313938904245712020_1.jpg',
      desc: 'Masaba By Nykaa Perfume',
      rating: '★★★★★',
      off:"30% OFF",
      price: 359,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/3/f388e368904245710644_1.jpg',
      desc: 'Moi By Nykaa Eau de Perfume',
      rating: '★★★',
      off:"30% OFF",
      price: 329
    
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/c/4c9fe6b3348901368254_a.jpg',
      desc: 'DIOR Sauvage Eau De Parfum',
      rating: '★★★★★',
      off:"30% OFF",
      price: 637,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245715243_1.jpg',
      desc: 'Nykaa Love Struck Perfume',
      rating: '★',
      off:"30% OFF",
      price: 555
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/e/ce4fe368904245710699_1.jpg',
      desc: 'Moi By Nykaa Mini Pocket Perfume',
      rating: '★★★★★',
      off:"30% OFF",
      price: 464,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/5/35abe368904245713843_1.jpg',
      desc: 'Moi By Nykaa Mini Pocket Perfume - Fleur',
      rating: '★',
      off:"40% OFF",
      price: 519
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/a/9a82c90nfm01pgl_1new.jpg',
      desc: 'Skinn by Titan Raw Perfume For Men EDP',
      rating: '★★★★★',
      off:"40% OFF",
      price: 737,
      bestseller: 'BESTSELLER'
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/4/d4ebc90nfw02pfc_1new.jpg',
      desc: 'Skinn by Titan Celeste Perfume For Women EDP',
      rating: '★★★',
      off:"40% OFF",
      price: 426
      
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/m/_/m_8901725959104_1_.jpg',
      desc: 'Engage W2 Perfume Spray For Women',
      rating: '★★★★★',
      price: 824,
      off:"40% OFF",
      bestseller: 'BESTSELLER'
     
    },
    {
      image_url: 'https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/5/7588e368904245710705_1.jpg',
      desc: 'Moi By Nykaa Mini Pocket Perfume - Matin',
      rating: '★',
      off:"40% OFF",
      price: 425
      
    }
   
  ]
  


  displayPerfumes(perfumeData)
  function displayPerfumes(data){
    document.getElementById("product-div").textContent =""
    data.map((elem)=>{
        var div = document.createElement("div")
        div.setAttribute("id", "box") 

        var image = document.createElement("img")
        image.setAttribute("src", elem.image_url)
        image.setAttribute("id", "images")

        var desc = document.createElement("p")
        desc.textContent = elem.desc
        desc.setAttribute("id", "desc")

        var priceDiv = document.createElement("div")
        priceDiv.setAttribute("id", "priceDiv")

        var price = document.createElement("p")
        price.textContent = "MRP:₹" + elem.price
        price.setAttribute("id", "price")

        var off = document.createElement("p")
        off.textContent = elem.off

        priceDiv.append(price, off)

        var rating = document.createElement("p")
        rating.textContent = elem.rating
        rating.setAttribute("id", "rating")
       
        var btnDiv = document.createElement("div")
        btnDiv.setAttribute("id", "btnDiv")

        var button = document.createElement("button")
        button.textContent  = "Add to cart"
        button.setAttribute("id", "button")
        button.addEventListener("click", function(){
            setTocart(elem)
        })

        var icon = document.createElement("i")
        icon.setAttribute("class", "fa-regular  fa-heart");

        btnDiv.append(icon,button)

       div.append(image, desc, priceDiv, rating, btnDiv)
       
       document.getElementById("product-div").append(div)


    })
}


//Sorting functions

function sortByPrice() {
    var value = document.getElementById("select-price").value;

    if (value === "htl") {
    var sorted = perfumeData.sort((a, b) => {
        return b.price - a.price;
    })
    console.log(sorted);
    }

    if (value === "lth") {
    var sorted = perfumeData.sort((a, b) => {
        return a.price - b.price;
    })
    
    }

    displayPerfumes(perfumeData)

}



function sortByNames() {
var value = document.getElementById("select-name").value;

if (value === "ascending") {
 perfumeData.sort((a, b) => {
    if (a.desc > b.desc) {
      return 1;
    }
    if (a.desc < b.desc) {
      return -1;
    }
    return 0;
  })

} 
if (value === "descending") {
  perfumeData.sort((a, b) => {
    if (a.desc > b.desc) {
      return -1;
    }
    if (a.desc < b.desc) {
      return 1;
    }
    return 0;
  })
} 

displayPerfumes(perfumeData)

}


//Add to cart

var cartData = JSON.parse(localStorage.getItem("cart-Data")) || []
function setTocart(elem){
   cartData.push(elem)
   localStorage.setItem("cart-product", JSON.stringify(cartData))
}
