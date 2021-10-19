function navigation(){
    let nav = document.querySelector('.nav-links');
    let hide = nav.classList.contains("hide-on-mobile");
    return hide = hide ? nav.classList.replace("hide-on-mobile", "show-on-mobile") : 
    nav.classList.replace("show-on-mobile", "hide-on-mobile");
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
            }
        })
    }
}

function video(){
    let videoBtn = document.querySelector(".video");
    let videoStatus = document.querySelector(".paused");
    return videoStatus = videoStatus ? videoBtn.classList.replace("paused","playing") : videoBtn.classList.replace("playing" , "paused");
    
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
    video();
})
