// =================== hide scorll top button
const scrollTop = document.querySelector(".scroll-top");
//==================== fixed nav
const header= document.querySelector("#header");

function hideElement(){
    if(window.pageYOffset <= 0) scrollTop.classList.add("hidden");
    else scrollTop.classList.remove("hidden")

    if(window.pageYOffset >= 175) header.classList.add("hidden-header");
    else header.classList.remove("hidden-header")

    console.log(window.pageYOffset );
    
};
hideElement();
window.addEventListener("scroll",hideElement)




