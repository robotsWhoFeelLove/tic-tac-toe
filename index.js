

const gameBoard = (() => {console.log("gameBoard ran")
    let board = [
        {
        row : 1,
        columns : [null,null,null]
        },
        {
        row: 2,
        columns : [null,null,null]
        },
        {
        row: 3,
        columns : [null,null,null]
        }
        ]
        
        const playerMove=(moveRow,moveColumn,marker)=> {
            board[moveRow-1].columns.splice(moveColumn-1,1,marker);

        }

        return {
            playerMove,
            board,
        }
    })()


let checkWin = (()=>{
let r1C1 = gameBoard.board[0].columns[0];
let r1C2 = gameBoard.board[0].columns[1];
let r1C3 = gameBoard.board[0].columns[2];
let r2C1 = gameBoard.board[1].columns[0];
let r2C2 = gameBoard.board[1].columns[1];
let r2C3 = gameBoard.board[1].columns[2];
let r3C1 = gameBoard.board[2].columns[0];
let r3C2 = gameBoard.board[2].columns[1];
let r3C3 = gameBoard.board[2].columns[2];
 
if(r1C1 == "X" && r1C2 == "X" && r1C3 == "X" ||
    r1C1 == "O" && r1C2 == "O" && r1C3 == "O" ||
    r2C1 == "X" && r2C2 == "X" && r2C3 == "X" ||
    r2C1 == "O" && r2C2 == "O" && r2C3 == "O" ||
    r3C1 == "X" && r3C2 == "X" && r3C3 == "X" ||
    r3C1 == "O" && r3C2 == "O" && r3C3 == "O" ||
    r1C1 == "X" && r2C1 == "X" && r3C1 == "X" ||
    r1C1 == "O" && r2C1 == "O" && r2C1 == "O" ||
    r1C2 == "X" && r2C2 == "X" && r3C2 == "X" ||
    r1C2 == "O" && r2C2 == "O" && r2C2 == "O" ||
    r1C3 == "X" && r2C3 == "X" && r3C3 == "X" ||
    r1C3 == "O" && r2C3 == "O" && r3C3 == "O" ||
    r1C1 == "X" && r2C2 == "X" && r3C3 == "X" ||
    r3C1 == "O" && r2C2 == "O" && r1C3 == "O" ||
    r3C1 == "X" && r2C2 == "X" && r1C3 == "X"
    ){
return true;
}
}
)


const gameController = ((playerOneName="Player One", playerTwoName="Player Two")=>{
    let position;
    const players = [
        {
            name: playerOneName,
            marker: "X"
        },
        {
            name: playerTwoName,
            marker: "O"
        }
    ]
    console.log(players);


    let isResult = false;
    let player;
    let i = 0
    // while (!isResult){
     
    const showText = function(text){
        let display = document.querySelector(".display");
        display.innerHTML=""
        let displayText = document.createElement("div");
        displayText.textContent = text
        display.appendChild(displayText);
        display.classList.toggle("hidden");
        setTimeout(()=>{display.classList.toggle("hidden")},
        1500)
        
    }

    function playRound() {
        console.log("playRound ran");

        // document.querySelector(".display").classList.toggle("hidden");   
        // if(isResult){
        player = players[i];

        showText(`${player.marker}!!!! It's your move, ${player.name}`)
            

        // let display = document.querySelector(".display");
        // display.innerHTML=""
        // let displayText = document.createElement("div");
        // displayText.textContent = `${player.marker}!!!! It's your move, ${player.name}`
        // display.appendChild(displayText);
        // display.classList.toggle("hidden");
        // setTimeout(()=>{display.classList.toggle("hidden")},
        // 2000)
        // return{
        //     players,
        //     playerOneName,
        //     playerTwoName,
        //     playRound,
        //     i
        // }   
    }
    playRound()

document.body.addEventListener("click", (e)=>{console.log(e.target);
    if(e.target.className.substring(0,5)==="space"){
                // let selectedSpace = document.e.target.classList
                if(e.target.textContent != "X" || e.target.textContent != "O"){
                e.target.textContent = player.marker;
                let position = e.target.id.substring(5);
                console.log({position})
                e.target.classList.add(`${player.marker.toLowerCase()}-space`);
                playerClick(position)
            } else {
                showText ("That space is already taken!")
            }}});
        
            
 let playerClick =  function(position){console.log({position});

            console.log({position});
            let rowNum= Math.floor((position-1)/3)+1;
            console.log({rowNum});
            let columnNum = position - ((rowNum - 1) *3);
            console.log({columnNum});
        // row = prompt(`${player.name}, select row`);
        // console.log({row});
        // column = prompt(`${player.name}, select column`);
        // console.log({column});

            // if(gameBoard.board[rowNum-1].columns[columnNum-1]){
            //     console.log("Move is taken, please select another row");
            //     console.log("Please select another column");
            // } else {
                gameBoard.playerMove(rowNum,columnNum,player.marker);
                console.log (`${player.name} places ${player.marker} on row ${rowNum} and column ${columnNum}`); 
              
            // }
        
      
        
  
        let getBoard = console.table(gameBoard.board[0].columns+ "\n" +gameBoard.board[1].columns+" \n" +gameBoard.board[2].columns);

        if(checkWin()){
                isResult = true;
                showText(`${player.name} wins!!`);
            }

        i===1? i= i-1 :
            i=i+1;
            console.log({i})
        
        if(!isResult){
            playRound();
        }
        document.body.removeEventListener("click",playerClick())
        // playRound
        }
})   



// if (!isResult){
//     playRound()}
// })
// ();
document.querySelector("#play").addEventListener("click",()=>{
    let playerOne = document.querySelector("#player-one").value == ""? "Player One":
    document.querySelector("#player-one").value ;
    let playerTwo = document.querySelector("#player-two").value == ""? "Player Two":
    document.querySelector("#player-two").value ;
        gameController(playerOne,playerTwo);

    document.querySelector(".display").classList.toggle("hidden");
}
);

document.querySelector("#reset").addEventListener("click",function(){
   location.reload()}
)








