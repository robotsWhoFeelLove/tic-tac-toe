

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

// const Player = (name, marker) => {
//     const joinGame = (() => console.log(`${name} has entered the game as ${marker}`))();
    
//     const move = (a,b) => {
//         gameBoard.playerMove(a,b,marker);
//         
// }
//   return { 
//     name, 
//     marker, 
//     joinGame,
//     move,
//     };

// };

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

    const playRound = players.forEach((player)=>{
        let row;
        let column;
        row = prompt(`${player.name}, select row`);
        console.log({row})
        column = prompt(`${player.name}, slect column`);
        console.log({column})
        gameBoard.playerMove(row,column,player.marker)
        console.log (`${player.name} places ${player.marker} on row ${row} and column ${column}`);
        let getBoard = console.table(gameBoard.board[0].columns+ "\n" +gameBoard.board[1].columns+" \n" +gameBoard.board[2].columns);
    });
    return{
        players,
        playerOneName,
        playerTwoName,
        playRound
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
