let rocks=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissors");
let msg=document.querySelector(".res");
let u_msg=document.querySelector(".you_score");
let c_msg=document.querySelector(".co_score");
let choice;
let rock1=0;
let paper1=1;
let scissor1=2;
let comp=0;
let m=``;
let your_score=0;
let comp_score=0;

const winner=(choice)=>{
    comp= Math.floor(Math.random() * 3);
    if(choice===comp){
        m=`It's a draw`;
        msg.style.backgroundColor="#393d3f";
    }
    else if(choice===0 && comp===1){
        m=`You lost, paper beats rock`;
        comp_score++;
        msg.style.backgroundColor="red";
    }
    else if(choice===0 && comp===2){
        m=`You win, rock beats scissors`;
        your_score++;
        msg.style.backgroundColor="Green";
    }
    else if(choice===1 && comp===0){
        m=`You win, paper beats rock`;
        your_score++;
        msg.style.backgroundColor="Green";
    }
    else if(choice===1 && comp===2){
        m=`You lost, scissors beats paper`;
        comp_score++;
        msg.style.backgroundColor="red";
    }
    else if(choice===2 && comp===0){
        m=`You lost, rock beats scissors`;
        comp_score++;
        msg.style.backgroundColor="red";
    }
    else if(choice===2 && comp===1){
        m=`You win, scissors beats paper`;
        your_score++;
        msg.style.backgroundColor="Green";
    }
    msg.innerText=m;
    u_msg.innerText=your_score;
    c_msg.innerText=comp_score;
}

rocks.addEventListener("click",()=>{
    choice=0;
    winner(choice);

});
paper.addEventListener("click",()=>{
    choice=1;
    winner(choice);
});
scissor.addEventListener("click",()=>{
    choice=2;
    winner(choice);
});