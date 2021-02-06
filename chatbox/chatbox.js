var rentomojo__chatbox = document.querySelector(".chatbox__btn")
rentomojo__chatbox.addEventListener("click", showChatbox)
var src = document.querySelector(".chatbox__icon").src 

function showChatbox(){
    document.querySelector(".chatbox__unreveal").classList.toggle("chatbox__reveal")
    if(document.querySelector(".chatbox__icon").src == src)
    {
        document.querySelector(".chatbox__icon").src = "down_arrow.svg"
    }
    else
    {
        document.querySelector(".chatbox__icon").src = "chat_icon.svg"
    }

    chatPlay()
}

function chatPlay() {
    let date  = new Date().toDateString();
    document.querySelector(".chatbox__one").textContent = date
    let msg1 = document.querySelector(".chatbox__two")
    let msg2 = document.querySelector(".chatbox__three")

    setInterval(() => {
        msg1.style.display = "block"
    }, 1000);

    setInterval(() => {
        msg2.style.display = "block"
    }, 1500);
    
   
    // console.log(date)
}

var scrollUp__btn = document.querySelector(".scrollUp__btn")

window.onscroll = yScroll

function yScroll(){
    if(window.scrollY > window.innerHeight/6)
    {
        scrollUp__btn.classList.add("scrollUp__btn__reveal")
    }
    else
    {
        scrollUp__btn.classList.remove("scrollUp__btn__reveal")
    }
}

scrollUp__btn.addEventListener("click", moveTop)

function moveTop(){
    window.scrollTo({top:0, behavior : "smooth"})
}