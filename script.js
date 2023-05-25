// document.getElementById("GoToLogin").addEventListener("click",()=>{
//     window.location.href="account.html"
// })

function clickedInput()
{
  document.getElementById("seach-dropdown").style.visibility="visible"
}

document.getElementById("header1Data").addEventListener("click",()=>{
  document.getElementById("seach-dropdown").style.visibility="hidden"
})

//main slider js
let sliderList = document.querySelector("#sf-Slider");
let items = sliderList.querySelectorAll(".sf-SliderBox");
let count = 1;

document.getElementById("leftButton").addEventListener("click", () => {
  prevSlide();
});

document.getElementById("rightButton").addEventListener("click", () => {
  nextSlide();
});

function prevSlide() {
  if (count > 1) {
    count = count - 2;
    sliderList.style.left = "-" + count * 1600 + "px";
    count++;
  }
}

function nextSlide() {
  if (count < 6) {
    sliderList.style.left = "-" + count * 1560 + "px";
    count++;
  }
}

setInterval(function () {
  if (count == 6) {
    count = 0;
    document.getElementById("aaja1").style.left = 0;
    prevSlide();
  } else {
    nextSlide();
  }
}, 2000);


let sliderList1 = document.querySelector("#sf-Slider1");
let items1 = sliderList1.querySelectorAll(".sf-SliderBox1");
let count1 = 1;

document.getElementById("leftButton1").addEventListener("click", () => {
  prevSlide1();
});

document.getElementById("rightButton1").addEventListener("click", () => {
  nextSlide1();
});

function prevSlide1() {
  if (count1 > 1) {
    count1 = count1 - 2;
    sliderList1.style.left = "-" + count1 * 220 + "px";
    count1++;
  }
}

function nextSlide1() {
  if (count1 < 3) {
    sliderList1.style.left = "-" + count1 * 210 + "px";
    count1++;
  }
}


setInterval(function () {
    if (count1 == 3) {
      count1 = 0;
      document.getElementById("aaja1").style.left = "0px";
      prevSlide1();
    } else {
      nextSlide1();
    }
  }, 2000);

