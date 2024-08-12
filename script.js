const accordion = document.getElementsByClassName("accordion");
        
let i;
for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("on");
        let card = this.nextElementSibling; //sibling element is = "p"//
        if(card.style.maxHeight){
            card.style.maxHeight = null;
           
            
        }else{
            card.style.maxHeight = card.scrollHeight + "px";
            
        }
    });

}

function accOn(element){
    element.style.color = "#fd307a";
}
