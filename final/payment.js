
window.addEventListener("load",execute)

function execute(){
    $(document).ready(function() {
        $('.redo').click(function() {
            $('.success, .error').toggle();
        });
        });
    document.querySelectorAll(".redo").forEach(e=>e.addEventListener("click",gotohome)) 
}


function gotohome(){
    let val=event.target.textContent
    if(val!=="Home Page"){
        window.location.href="main.html"
    }
}
