function customInputchange(){
    let customInputs = document.querySelectorAll(".custom-input");
    let placeHolderTexts = document.querySelectorAll('.placeholder-text');

    for(let i = 0; i< customInputs.length ; i++){
        customInputs[i].addEventListener("focusin", () => {
            if(!customInputs[i].value){
                customInputs[i].parentElement.previousElementSibling.checked = "true";
                
            }
        })
        customInputs[i].addEventListener("focusout", () => {
            if(customInputs[i].value){
                console.log("value is present");
                placeHolderTexts[i].style.transform = "translate(-20px,-33px)";
            }
        })
    }
}

function navigation(){
    let close = document.querySelector('nav');
    close.classList.toggle("hide");
}


window.addEventListener('load', () => {
    customInputchange();    
})



