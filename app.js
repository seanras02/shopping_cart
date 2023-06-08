const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
let cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIOpen = false;

let tw = 0; 
let sf   = 0;
let kq  = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
             case "sf":
                sf += 1;
                break;
            case "tw":
                tw += 1;
                break;
            case "kq":
                kq +=1;
                break;
        }

        if(modalIOpen === false){
        shoppingModal.style.display ="flex";
        modalIOpen = true;
        setTimeout(function(){
            shoppingModal.style.display = "none";
            modalIOpen = false;
        },2000);
    }
    }
}

const checkOutButton = document.getElementById("js--checkOutButton");
const checkOutWindow = document.getElementById("js--checkOutWindow");
let checkOutIsOpen = false;

checkOutButton.onclick = function(){
    if(checkOutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkOutWindow.style.display = "block";
        checkOutIsOpen = true;
        document.getElementById("js--amount-sf").innerHTML = sf + "x";
        document.getElementById("js--amount-tw").innerHTML = tw + "x";
        document.getElementById("js--amount-kq").innerHTML = kq + "x";

        return;
    }
        document.querySelector("main").style.display = "block";
        checkOutWindow.style.display = "none";
        checkOutIsOpen = false;


}