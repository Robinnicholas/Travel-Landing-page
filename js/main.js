function customInputchange(){
    let customInputs = document.querySelectorAll(".custom-input");
    let placeHolderTexts = document.querySelectorAll('.placeholder-text');

    for(let i = 0; i< customInputs.length ; i++){
        customInputs[i].addEventListener("focusin", () => {
            customInputs[i].parentElement.previousElementSibling.checked = "true";
            customInputs[i].addEventListener('input', () => {
                placeHolderTexts[i].style.transform = "translate(-20px,-33px)";
                if(!customInputs[i].value){
                    placeHolderTexts[i].style.transform = "translate(0)";
                }
            });
        });
    }
}

function navigation(){
    let close = document.querySelector('nav');
    close.classList.toggle("hide");
}


window.addEventListener('load', () => {
    customInputchange();    
})



