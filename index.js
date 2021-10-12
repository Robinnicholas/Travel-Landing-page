function navigation(){
    let nav = document.querySelector('header ul');
    nav.classList.toggle("show");
}

function customInputchange(){
    let customInputs = document.querySelectorAll(".custom-input");
    for(let i = 0; i < customInputs.length ; i++){
        customInputs[i].addEventListener("click", () => {
            customInputs[i].parentElement.previousElementSibling.checked = true;
        })
        
        customInputs[i].addEventListener("change", () => {
            if(customInputs[i].value){
                console.log("value present");
                customInputs[i].value = '';
            }
        })
    }
}

function headerScroll(){
    window.addEventListener('scroll', () => {
        let header = document.querySelector("header");
        let heroContent = document.querySelector(".hero-content");
        if( header.clientHeight > heroContent.getBoundingClientRect().top){
            header.classList.add("add-bg");
        }
        if(document.body.getBoundingClientRect().y == 0){
            header.classList.remove("add-bg");
        }
    })
}

window.addEventListener('load', () => {
    customInputchange();    
    headerScroll();
})
