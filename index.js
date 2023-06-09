

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





        // if(board[((moveRow-1)*3)+moveColumn-1] == null){console.log("Valid Move")
        //     board.splice((((moveRow-1)*3)+(moveColumn-1)),1,marker.toUpperCase());
        //     console.log("board position is "+ ((moveRow-1)*3)+(moveColumn-1));
        // } else {
        //     console.log("Position is taken.")
        // }
        // const playerMove = _playerMove()
        // console.log(board);
        
        }

        return {
            playerMove,
            board,
        }
    })()


// const checkWin = (gameBoard.board.forEach((spot,i) => {
//     spot.columns.forEach((column,j) => {
//        let boardPositions = [];

//         boardPositions.push(`r${i+1}c${j+1}|${column}`);
//         console.log(boardPositions);
//         return {boardPositions}
//          })

// })
//  )
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
    r1C3 == "O" && r2C3 == "O" && r2C3 == "O" ||
    r1C1 == "X" && r2C2 == "X" && r3C3 == "X" ||
    r3C1 == "O" && r2C2 == "O" && r1C3 == "O"
    ){
return true;
}
}
)


const gameController = ((playerOneName="Player One", playerTwoName="Player Two")=>{
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

    // let i=0
    let isResult = false;
    let player;
    while (!isResult){
     
        // alert(players[i].name)

     const playRound = (() => {console.log("playRound ran");
        for(i =0; i < 2 ; i++){

        if(isResult){
        
            break
        }

 
        player = players[i];
        let row;
        let column;
        row = prompt(`${player.name}, select row`);
        console.log({row});
        column = prompt(`${player.name}, select column`);
        console.log({column});
        let checkBoard = (()=> { console.log("ran Checkboard");
            if(gameBoard.board[row-1].columns[column-1]){
                row= prompt("Move is taken, please select another row");
                column= prompt("Please select another column");

            }})();
        checkBoard;
        gameBoard.playerMove(row,column,player.marker)
            console.log (`${player.name} places ${player.marker} on row ${row} and column ${column}`);

        let getBoard = console.table(gameBoard.board[0].columns+ "\n" +gameBoard.board[1].columns+" \n" +gameBoard.board[2].columns);
        // i < 2? i = ++i:
        // i = 0;
        if(checkWin()){
                isResult = true;
                console.log(`${player.name} wins!!`);
            }
            // checkWin();
            // return{
            //     player
            // }
        }
                
        })()}


    return{
        players,
        playerOneName,
        playerTwoName,
    }    
})();








// const Ian= player('Ian', "X");
// const Sarah = player('Sarah',"O");
// const Bad = player('bad',"X");
// // console.log(players);

// // const playerMove = playerMove();
// Ian.move(1,2);
// Sarah.move(2,2);
// Ian.move(1,3);
// Sarah.move(3,1);
