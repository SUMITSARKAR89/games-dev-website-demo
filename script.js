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
};


const menuBtn = document.querySelectorAll(".menu-icon");
const nav = document.getElementById("nav");
const open = document.querySelectorAll(".open");
const close = document.querySelectorAll(".close");

open[0].addEventListener("click", () =>{
    nav.style.left ="0";
    open[0].style.display = "none";
    close[0].style.display = "block";
});

close[0].addEventListener("click", () => {
    nav.style.left = "-100%";
    open[0].style.display = "block";
    close[0].style.display = "none";
});


const counts = document.querySelectorAll('.count')
const speed = 100

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})
