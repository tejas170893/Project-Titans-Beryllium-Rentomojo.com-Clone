function validatePhone(){
    let mobInput= document.getElementById("left__three__sub")
   
    let cartItems = document.getElementById("displayCart").innerHTML

    if(cartItems == ""){
        window.alert("Please add a product in your cart")
    } else {

        mobInput.style.display = "flex"
    }
    document.getElementById("toAdrs").addEventListener("click", validityChecker)

    let checkout = document.querySelector("#checkout")
    checkout.style.color = "red"
}

function validityChecker(){

    let mobileNo = document.getElementById("mob").value

    // console.log(mobileNo)
    document.getElementById("mob").value = ""
    let data = JSON.parse(localStorage.getItem("User_Detail"))

    console.log(data)

    if (data == null){
        window.alert("Please login to complete the checkout")
    } else {
        if (valid(mobileNo, data)){
            console.log('valid')
            let add = document.getElementById("left__four__form")
            add.style.display = "flex"
            document.getElementById("left__three__sub").style.display = "none"
            let verification = document.querySelector("#verification")
            verification.style.color = "red"
        } else {
            window.alert("Please provide a valid phone no.")
        }   
    }
}

function valid(num1, data){
    let num2 = data.mob;
    if(Number(num1) == Number(num2)){
        return true
    }
    return false
}

let form = document.querySelector('form')
form.addEventListener('submit', finalCheckout)

function finalCheckout(){
    event.preventDefault()
    console.log("working")
    let formData = new FormData(event.target)

    let address = formData.get('home')
    let pincode = formData.get('pincode')
    let cardNo = formData.get('cardNo')
    let cvv = formData.get('cvv')

    if(address == ""){
        window.alert("Address Detials should not be empty")
    } else if(pincode == ""){
        window.alert("pincode Detials should not be empty")
    } else if(cardNo == ""){
        window.alert("Card Detials should not be empty")
    } else if(cvv == ""){
        window.alert("CVV Detials should not be empty")
    } else {
        window.location = 'loading.html'
    }
}




// codes for cart cards starts here ************************

window.addEventListener("load", onLoading)

function onLoading(){
    
    let sum = 0
    let data = JSON.parse(localStorage.getItem("cart"))
    if(data.length<1){
        window.location.href="cart.html"
        console.log("empty arrow")
        console.log(data)
    }
    else{
        // console.log(data)
        for (let i = 0; i < data.length; i++){
            createCard(data[i])
            sum += Number(data[i].price)
        }
    
        let deposit = document.getElementById('deposit')
        deposit.textContent = data.length * 1500
    
        let totalDisplay = document.getElementById("totalDisplay")
        totalDisplay.textContent = data.length * 1500
    
        let monRent = document.getElementById('monRent')
        monRent.textContent = sum;
        
    }
  
}

function createCard(data){
    let cardDisplay = document.getElementById("displayCart")
    let html = `
    <div class="outer">
        <div class="inner">
            <div class="content">
                <div class="content__left">
                    <img src=${data.img} alt= ${data.name}>
                </div>
                <div class="content__right">
                    <p>${data.name} </p><i class="fa fa-trash" aria-hidden="true" id = ${data.id} onclick = "deleteCartItem(this)"></i>
                    <ul class="content__rightul">
                        <li class="content__rightli">
                            <p>Rent</p>
                            <span>&#8377 ${data.price}</span>
                        </li>
                        <li class="content__rightli">
                            <p>Deposit</p>
                            <span>&#8377 1500 </span>
                        </li>
                    </ul>
                </div>
        </div>
        <div class="quantity__time">
            <span class="span__1">
                <i class="fas fa-minus"></i>
                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
                1
                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
                <i class="fas fa-plus"></i>
            </span>
            <span class="span__2">3 Months</span>
        </div>
         </div> 
        <div class="outer__text">
            <i class="fas fa-truck">&nbsp</i><span> Free delivery by 6th Feb 2021</span>
        </div>
    </div>
    `
    cardDisplay.innerHTML += html
}

function deleteCartItem(event){
    
    let data = JSON.parse(localStorage.getItem("cart"))

    let id = event.id
    var item = data.find(function(d) {
        return d.id == event.id;
    });

    let removeByAttr = function(arr, attr, value){
        var i = arr.length;
        while(i--){
           if( arr[i] 
               && arr[i].hasOwnProperty(attr) 
               && (arguments.length > 2 && arr[i][attr] === value ) ){ 
               arr.splice(i,1);    
           }
        }
        return arr;
    }

    data = removeByAttr(data, 'id', id)

    localStorage.setItem('cart', JSON.stringify(data))
    document.getElementById("displayCart").innerHTML = ""

    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){
         x.className = x.className.replace("show", ""); 
      },3000);

      console.log(x)

    onLoading()
}
