const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

const currSec = document.querySelector(".sec");
const currMin = document.querySelector(".min");
const currHr = document.querySelector(".hr");

var timer;

play.addEventListener("click", ()=>{
    if(timer) return;
    timer = setInterval(()=>{
        currSec.innerHTML = parseInt(currSec.innerHTML) +1;
        if(parseInt(currSec.innerHTML)<10) currSec.innerHTML="0"+currSec.innerHTML;
        if(parseInt(currSec.innerHTML)==100){
            currMin.innerHTML = parseInt(currMin.innerHTML) +1;
            if(parseInt(currMin.innerHTML)<10) currMin.innerHTML="0"+currMin.innerHTML;
            if(parseInt(currMin.innerHTML)==60){
                currHr.innerHTML = parseInt(currHr.innerHTML) +1;
                if(parseInt(currHr.innerHTML)<10) currHr.innerHTML="0"+currHr.innerHTML;
                currMin.innerHTML="00";
            }

            currSec.innerHTML="00";
        }
    }, 10);
})

reset.addEventListener("click", ()=>{
    if(timer){clearInterval(timer);
    
    timer=undefined;}
    currSec.innerHTML="00";
    currMin.innerHTML="00";
    currHr.innerHTML="00";
})

pause.addEventListener("click",()=>{
    if(timer) 
    {clearInterval(timer);
    timer=undefined;}
})