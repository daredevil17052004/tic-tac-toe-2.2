const boxElement = document.querySelectorAll(".box");
var winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

var xAttempts = [];
var oAttempts = [];
var click = 0;
var gameWon = 0;
const message = document.getElementById("message");
const gameResult = document.getElementById("result");
const restartBtn = document.getElementById("button");

boxElement.forEach(box=>{
    box.onclick = handleClick;
})

function handleClick(e){
    // console.log(e.target);
    // console.log(e.target.getAttribute("id"));


    const i = e.target.getAttribute("id");
    const text = document.createElement('p');
    text.setAttribute('id','text');
    boxElement[i-1].appendChild(text);
    console.log(boxElement[i-1]);


    if(click%2==0){
        xAttempts.push(parseInt(i-1));
        // console.log(xAttempts);
        text.innerHTML = "X";
        text.style.color = "#FAB201";
        result(winningCombinations,xAttempts,"X");
    }else{
        oAttempts.push(parseInt(i-1));
        // console.log(oAttempts);
        text.innerHTML = "O";
        text.style.color = "#FAB201";
        result(winningCombinations,oAttempts,"O");
    }
    click++;
    if ( click == 9 && gameWon == 0){
        gameResult.style.visibility = "visible";
        message.innerHTML = "It's a tie.";
    }
}


function result( winningCombinations,attempts,player){
    let flag = 0;
    let chec = [];
    for (var i = 0; i < winningCombinations.length ;i++){
        console.log("done")
        // console.log(winningCombinations[i]);
        if(Array.isArray(winningCombinations[i])){
            console.log("done 2")
            result(winningCombinations[i],attempts,player);
        }else{
            console.log("done 3")

            if(attempts.includes(winningCombinations[i])){
                console.log("done 4")
                

                chec.push(true);
                flag++;
            }else{
                console.log("done 5")
                chec.push(false);
            }
        }
    }
    if(chec.every(check => check === true)&& flag>2){
        console.log("done")
        gameResult.style.visibility = "visible";
        message.innerHTML = "'" + player + "'"+ "Won the game";
        gameWon = 1;
    }
}


restartBtn.onclick=() => {
    history.go(0);
}