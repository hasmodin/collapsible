let collapsBox = document.querySelectorAll(".collaps-box");
let i ;
for(i=0; i<collapsBox.length; i++) {
    collapsBox[i].addEventListener("click" , function(){
        this.classList.toggle("active");
    });
}

// toggleClass() {
//     let collapsBox = document.querySelectorAll(".co")
// }