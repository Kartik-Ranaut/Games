let b11= document.querySelector("#b11");
let b12= document.querySelector("#b12");
let b13= document.querySelector("#b13");

let b21= document.querySelector("#b21");
let b22= document.querySelector("#b22");
let b23= document.querySelector("#b23");

let b31= document.querySelector("#b31");
let b32= document.querySelector("#b32");
let b33= document.querySelector("#b33");

let button=document.querySelectorAll(".btn");

// button.addEventListener('click',()=>{
//     console.log("button.id");
// });
let count=0;

button.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(count%2==0){
            button.innerHTML='X';
            count++;
            console.log(b11.innerHTML==b22.innerHTML=='X');
            checkWinX();
        }
        else{
            button.innerHTML='O';
            count++;
            console.log(b11.innerHTML);

            checkWinO();
        }
        
    })
})

function checkWinX(){
    if(b11.innerHTML=='X' && b12.innerHTML=='X' && b13.innerHTML=='X' ){
        alert("player "+b11.innerHTML+" wins");
    }
    else if(b21.innerHTML=='X' && b22.innerHTML=='X' && b23.innerHTML=='X'){
        alert("player "+b21.innerHTML+" wins");
    }
    else if(b31.innerHTML=='X' && b32.innerHTML=='X' && b33.innerHTML=='X'){
        alert("player "+b31.innerHTML+" wins")
    }

    else if(b11.innerHTML=='X' && b21.innerHTML=='X' && b31.innerHTML=='X'){
        alert("player "+b11.innerHTML+" wins")
    }
    else if(b12.innerHTML=='X' && b22.innerHTML=='X' && b32.innerHTML=='X'){
        alert("player "+b12.innerHTML+" wins")
    }
    else if(b13.innerHTML=='X' && b23.innerHTML=='X' && b33.innerHTML=='X'){
        alert("player "+b13.innerHTML+" wins")
    }

    else if(b11.innerHTML=='X' && b22.innerHTML=='X' && b33.innerHTML=='X'){
        alert("player "+b11.innerHTML+" wins")
    }
    else if(b31.innerHTML=='X' && b22.innerHTML=='X' && b13.innerHTML=='X'){
        alert("player "+b13.innerHTML+" wins")
    }
    else{
        console.log("no one sat");
    }
}

function checkWinO(){
    if(b11.innerHTML=='O' && b12.innerHTML=='O' && b13.innerHTML=='O' ){
        alert("player "+b11.innerHTML+" wins");
    }
    else if(b21.innerHTML=='O' && b22.innerHTML=='O' && 'O' && b23.innerHTML=='O'){
        alert("player "+b21.innerHTML+" wins");
    }
    else if(b31.innerHTML=='O' && b32.innerHTML=='O' && b33.innerHTML=='O'){
        alert("player "+b31.innerHTML+" wins")
    }

    else if(b11.innerHTML=='O' && b21.innerHTML=='O' && b31.innerHTML=='O'){
        alert("player "+b11.innerHTML+" wins")
    }
    else if(b12.innerHTML=='O' && b22.innerHTML=='O' && b32.innerHTML=='O'){
        alert("player "+b12.innerHTML+" wins")
    }
    else if(b13.innerHTML=='O' && b23.innerHTML=='O' && b33.innerHTML=='O'){
        alert("player "+b13.innerHTML+" wins")
    }

    else if(b11.innerHTML=='O' && b22.innerHTML=='O' && b33.innerHTML=='O'){
        alert("player "+b11.innerHTML+" wins")
    }
    else if(b31.innerHTML=='O' && b22.innerHTML=='O' && b13.innerHTML=='O'){
        alert("player "+b13.innerHTML+" wins")
    }
    else{
        console.log("no one sat");
    }
}