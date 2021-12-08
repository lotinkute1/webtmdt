const scrollTop = document.querySelector(".scroll-top");

function hideScrollBtn(){
    if(window.pageYOffset <= 0) scrollTop.classList.add("hidden");
    else scrollTop.classList.remove("hidden")
};
hideScrollBtn();
window.addEventListener("scroll",hideScrollBtn)