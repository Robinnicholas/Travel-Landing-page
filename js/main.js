function customInputchange(){
    let placeholderTexts = document.querySelectorAll(".placeholder-text");
    let customInputs = document.querySelectorAll(".custom-input");

    customInputs[0].addEventListener('focusin', () => {
        placeholderTexts[0].style.transform = "translate(25px, -15px)";
        placeholderTexts[0].style.transition = " .2s ease-in-out";
        customInputs[0].parentElement.previousElementSibling.checked = true;
    });
    
    customInputs[0].addEventListener('focusout', () => {
        if(!customInputs[0].value){
            placeholderTexts[0].style.transform = "translate(45px, 20px)";
            placeholderTexts[0].style.transition = " .2s ease-in-out";
        }else{
            placeholderTexts[0].style.transform = "translate(25px, -15px)";
            placeholderTexts[0].style.transition = " .2s ease-in-out";
        }
        
    });
    customInputs[1].addEventListener('focusin', () => {
        placeholderTexts[1].style.transform = "translate(25px, -15px)";
        placeholderTexts[1].style.transition = " .2s ease-in-out";
        customInputs[1].parentElement.previousElementSibling.checked = true;
    });
    
    customInputs[1].addEventListener('focusout', () => {
        if(!customInputs[1].value){
            placeholderTexts[1].style.transform = "translate(45px, 20px)";
            placeholderTexts[1].style.transition = " .2s ease-in-out";
        }else{
            placeholderTexts[1].style.transform = "translate(25px, -15px)";
            placeholderTexts[1].style.transition = " .2s ease-in-out";
        }
    });
}

function navigation(){
    let close = document.querySelector('nav');
    close.classList.toggle("hide");
}


window.addEventListener('load', () => {
    customInputchange();    
})



