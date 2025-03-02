let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#R-btn");
let newBtn=document.querySelector(".new");
let contain=document.querySelector(".msg_c");
let message=document.querySelector("#msg ");
let turnO=true;
let count=0;
let winningpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

];
const resetGame=()=>{
    turnO=true;
    count=0;
    enableboxes(); 
    contain.classList.add("hide");
    newBtn.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
 if(turnO){
     box.innerText="O";
     box.style.color="red";
     turnO=false;}
     else {
        box.innerText="X";
        box.style.color="green";
         turnO=true;
     }
     box.disabled=true;
     count++;
     let isWinner=checkWinner();
     if(count===9 && !isWinner){
        gameDraw();
     }
    });
});
const gameDraw=()=>{
    message.innerText = `Game was a Draw.`;
  contain.classList.remove("hide");
  newBtn.classList.remove("hide");
  disableboxes();
    
};
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""; 
    }
};

const showwinner=(winner)=>{
    message.innerText=`Congratulation, winner is ${winner}`;
     contain.classList.remove("hide");
newBtn.classList.remove("hide");
disableboxes();

};
    const checkWinner=()=>{

        for(let pattern of winningpattern) {
              let  pvalue1 = boxes[pattern[0]].innerText;
       let           pvalue2 = boxes[pattern[1]].innerText;
     let    pvalue3 =boxes[pattern[2]].innerText;
if(pvalue1!=""&& pvalue2!=""&& pvalue3 !=""){
    if(pvalue1===pvalue2&& pvalue2===pvalue3){
        showwinner(pvalue1);
        
    }
}
        }
        
    }; 
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);