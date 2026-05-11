let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let turn=true;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        turn?(btn.innerText="O",turn=false):(btn.innerText="X",turn=true);
        btn.disabled=true;
        checkWinner();
    });
    
});
reset.addEventListener("click",()=>{
    btns.forEach(k=>{
        k.innerText="";
        k.disabled=false;
    })
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
        const a = btns[pattern[0]].innerText;
        const b = btns[pattern[1]].innerText;
        const c = btns[pattern[2]].innerText;
        if(a===b&&b===c&&a!=""){
            alert(a + " Won");
            btns.forEach(k=>{k.disabled=true;});
        }
    }
    
}
    