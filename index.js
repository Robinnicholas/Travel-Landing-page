function navigation(){
    let nav = document.querySelector('.nav-links');
    return nav.classList.toggle("show-on-mobile");
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
    let videoSection = document.querySelector(".video");
    let videoTag = document.querySelector("video");
    if(videoTag.paused){
        videoTag.play()
        videoSection.classList.replace("paused", "playing"); 
    } else{
        videoTag.pause();
        videoSection.classList.replace("playing", "paused"); 
    }
}

function headerScroll(){
    window.addEventListener('scroll', () => {
        let header = document.querySelector("header");
        return (window.scrollY > 43) ? header.classList.add("add-bg") : header.classList.remove("add-bg");
    })
}

window.addEventListener('load', () => {
    customInputchange();    
    headerScroll();
})
