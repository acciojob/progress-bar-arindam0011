document.addEventListener('DOMContentLoaded', (event) => {
    const circle = document.getElementsByClassName("circle");
    const line = document.getElementsByClassName("line");
    let ct=0;
    for(let i of circle){
        i.id = `circle-${ct++}`;
    }

    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
   
    
    let count = 0;
    let ct2=count-1;
    prev.disabled = true;
    next.addEventListener("click", forward);
    prev.addEventListener("click", backward);


    function forward() {
        ct2++;
        if (count < line.length) {
            circle[count+1].classList.add('active');
            line[count].classList.add('active');
        }
        if(count<line.length-1){
            count++;
            
        }
        if(count>0){
            prev.disabled=false;
        }

        if (ct2 === line.length) {
            next.disabled = true;
        }
    }
  
    
    function backward() {
        ct2--;
        circle[count+1].classList.remove('active');
        line[count].classList.remove('active');
        if(count<line.length && count>0){
           count--; 
           
        }

        if (count < circle.length - 1) {
            next.disabled = false;
        }
        

        if(ct2==-1){
            prev.disabled=true;
        }

    }
    

})