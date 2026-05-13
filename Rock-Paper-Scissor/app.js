let cs=document.querySelector("#cs");
let us=document.querySelector("#us");
let choice=document.querySelectorAll(".choice");
let resultText=document.querySelector("#resultText");
let csScore = 0;
let usScore = 0;

choice.forEach(c=>{
    c.addEventListener("click",()=>{
        let compChoice=Math.floor(Math.random()*3)+1;
        //1 FOR ROCK
        //2 FOR PAPER
        //3 FOR SCISSOR

        if((c.id==="rock"&&compChoice==2)||
        (c.id==="paper"&&compChoice==3)||
        c.id==="scissors"&&compChoice==1){
        csScore++;
        cs.innerText = csScore;
        resultText.innerText="Computer Won";
        }
        else if((c.id==="rock"&&compChoice==3)||
        (c.id==="paper"&&compChoice==1)||
        c.id==="scissors"&&compChoice==2){
         usScore++;
         us.innerText = usScore;
        resultText.innerText="User Won";
        }
        else{
             csScore++;
             usScore++;
             cs.innerText = csScore;
             us.innerText = usScore;
            resultText.innerText="Draw";
        }
    })
})

