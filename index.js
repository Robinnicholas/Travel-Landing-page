function navigation(){
    let nav = document.querySelector('nav');
    nav.classList.toggle("show");
    let line1 = document.querySelector('.line1');
    let line2 = document.querySelector('.line2');
    let line3 = document.querySelector('.line3');

    let show = document.querySelector(".show");
    if(show){
        nav.style.transform = "translate(0)";
        line1.style.display = "none";
        line2.style.transform = "rotate(45deg)";
        line2.style.transition = ".5s";
        line3.style.transform = "rotate(315deg) translate(5px,-6px)";
        line3.style.transition = ".5s";
    }else{
        nav.style.transform = "translate(100%)";
        line1.style.display = "block";
        line2.style.transform = "rotate(0deg)";
        line2.style.transition = ".5s";
        line3.style.transform = "rotate(0deg)";
        line3.style.transition = ".5s";
    }
}

function customInputchange(){
    let customInputs = document.querySelectorAll(".custom-input");
    let placeHolderTexts = document.querySelectorAll('.placeholder-text');
    let radioCircles = document.querySelectorAll('label');

    for(let i = 0; i< customInputs.length ; i++){
        radioCircles[i].addEventListener("click", () => {
            console.log("label clicked");
            customInputs[i].parentElement.previousElementSibling.checked = "true";
        })
        customInputs[i].addEventListener("focusin", () => {
            customInputs[i].parentElement.previousElementSibling.checked = "true";
            customInputs[i].addEventListener('input', () => {
                placeHolderTexts[i].style.transform = "translate(0,-25px)";
                if(!customInputs[i].value){
                    placeHolderTexts[i].style.transform = "translate(0)";
                }
            });
        });
    }
}

window.addEventListener('load', () => {
    customInputchange();    
})
