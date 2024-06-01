//your JS code here. If required.
document.addEventListener('DOMContentLoaded',(event)=>{
    const circle=document.getElementsByClassName("circle");
    const line=document.getElementsByClassName("line");
    
    const next=document.getElementById('next');
    const prev=document.getElementById('prev');
    let count=0;
    next.addEventListener("click", forward);
    prev.addEventListener("click", backward);

    
    function forward(){
        count++;
        if(count>0 && count<circle.length){
           circle[count].classList.add('active');
           line[count-1].classList.add('active');
        }
        
    }

    function backward(){
        count--;
        circle[count+1].classList.remove('active');
           line[count].classList.remove('active');
        if(count>0 && count<circle.length){
           
           circle[count].classList.add('active');
           line[count-1].classList.add('active');
        }
    }

})