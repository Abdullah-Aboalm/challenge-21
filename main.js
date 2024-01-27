let spans = document.querySelectorAll(".rating span");
let rate1 = document.querySelector("#rate");

spans.forEach(function (ele) {
  ele.onclick = function () {
    spans.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    rate1.textContent = `You selected ${ele.classList.contains("active")? ele.textContent : 0} out of 5`;
  };
});

let btn = document.querySelector("#sub");
let mainC = document.querySelector("#main-card");
let thanksC = document.querySelector("#thanks-card");
let btnBack = document.querySelector("#back");
let btnBackI = document.querySelector("#back i");

btn.addEventListener("click", function () {
  mainC.style.cssText = "display: none";
  thanksC.style.cssText = "display: block";
  btnBack.style.cssText = "display: block;";
  btnBackI.style.cssText = "position: relative; top: 50%; transform: translateY(-50%)";
});

btnBack.addEventListener("click", function () {
  mainC.style.cssText = "display: block";
  thanksC.style.cssText = "display: none";
  btnBack.style.cssText = "display: none";
});


