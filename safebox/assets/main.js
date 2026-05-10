const upBtn = document.querySelector(".up")

window.onscroll = function() {
this.scrollY >=1000 ?  upBtn.classList.add("show") :  upBtn.classList.remove("show")
}

upBtn.onclick = function() {
    window.scrollTo({
        top: 0 ,
        behavior: "smooth" 
    }
    )
}