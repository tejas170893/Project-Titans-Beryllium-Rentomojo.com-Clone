window.addEventListener("load", loaded)

function loaded(){
    let loginBtn = document.getElementById("loginBtn")
    loginBtn.addEventListener("click", displayLogin)    
}

function displayLogin(){
    console.log("work")
    let boxDisplay = document.getElementById("login__box")
    boxDisplay.style.display = "flex"

    let btn = document.getElementById("btn")
    btn.addEventListener("click", collectMobNo)
}

function collectMobNo(){

    let mob = document.getElementById("mob").value

    let data = JSON.parse(localStorage.getItem("User_Detail")) || {}
    data["mob"] = mob;

    localStorage.setItem("User_Detail", JSON.stringify(data))
    movetoNext()
}

function movetoNext(){

    let firstlogin = document.getElementById("login__input")
    firstlogin.innerHTML = ""

    let html = `<div class="login__input__text">
                    Enter your PAN and email to  <br>  SignUp or Login
                </div>
                

                <div class = "login__input__box" id="login__input__box">                
                    <input type="text" placeholder="Enter your PAN number*" id="pan">           
                </div>

                <div class = "login__input__box" id="login__input__box">                
                    <input type="text" placeholder="Enter your email address*" id="email">
                </div>


                <button id="btn2"> Continue </button>`

    firstlogin.innerHTML = html      
    movetoPAN()
}

function movetoPAN(){
    let btn2 = document.getElementById("btn2")
    btn2.addEventListener("click", collectPAN)
}



function collectPAN(){

    let pan = document.getElementById("pan").value
    let email = document.getElementById("email").value

    let data = JSON.parse(localStorage.getItem("User_Detail")) || {}
    data["pan"] = pan;
    data["email"] = email;

    localStorage.setItem("User_Detail", JSON.stringify(data))
    
    let btn = document.getElementById("loginBtn")
    btn.textContent = ""
    btn.textContent = pan
    btn.style.backgroundColor = "#ffffff"
    btn.style.color = "#dc3226"
    btn.style.border =  "1px solid #dc3226"

    let disPlay = document.getElementById("login__box")
    disPlay.style.display = "none"
    
}

