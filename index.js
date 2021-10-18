function navigation(){
    let nav = document.querySelector('.nav-links');
    let hide = nav.classList.contains("hide-on-mobile");
    return hide = hide ? nav.classList.replace("hide-on-mobile", "show-on-mobile") : 
    nav.classList.replace("show-on-mobile", "hide-on-mobile");
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
    headerScroll();
})
