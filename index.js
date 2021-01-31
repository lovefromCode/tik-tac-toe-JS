let boardDB = {
  isToggle: true,
  circleCount: 0,
  crossCount: 0,
  circleWin: false,
  crossWin: false,
};

let dp = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


const circle = "./images/circle.png";
const cross = "./images/cross.png";


const handleClick = (event) => {
    if(boardDB.isToggle === true) {
      if(boardDB['circleWin'] == false && boardDB['crossWin'] == false) {
        document.getElementById(event.target.id).innerHTML = `<img src=${circle} width="80">`;
        boardDB.isToggle = false;
        boardDB['circleCount']++;
        dp[event.target.id.slice(4,5)][event.target.id.slice(5)] = 'circle';
      }

        if(boardDB.circleCount >= 2 && boardDB.crossCount >= 2) {
          if(boardDB['circleWin'] == false && boardDB['crossWin'] == false) {
            let winner = decideWinner();
            if(winner === undefined) {
              if((boardDB.circleCount === 5 && boardDB.crossCount === 4)) {
                document.querySelector('.showResult').textContent =  `Match Draw`;
              }
            } else {
              document.querySelector('.showResult').textContent = `Winner is: ${winner}`;
            }
          }
        }
        
      } else {
        if(boardDB['circleWin'] == false && boardDB['crossWin'] == false) {
          document.getElementById(event.target.id).innerHTML = `<img src=${cross} width="80">`;
          boardDB.isToggle = true;
          boardDB['crossCount']++;
          dp[event.target.id.slice(4,5)][event.target.id.slice(5)] = 'cross';
        }
        
        if(boardDB.circleCount >= 2 && boardDB.crossCount >= 2) {
          if(boardDB['circleWin'] == false && boardDB['crossWin'] == false) {
            let winner = decideWinner();
            if(winner === undefined) {
              if((boardDB.circleCount === 5 && boardDB.crossCount === 4)) {
                document.querySelector('.showResult').textContent =  `Match Draw`;
              }
            } else {
            document.querySelector('.showResult').textContent =  `Winner is: ${winner}`;
            }
        }
      }
    }    
};

let cellElement = document.querySelectorAll("[dd]");

cellElement.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

let decideWinner = () => {

      let i, j = 0;

        // check row
        for(i=0; i<3; i++) {
          if(dp[i][j] === 'circle') {
            if(dp[i][j] !== null && dp[i][j] == dp[i][j+1] && dp[i][j+1] == dp[i][j+2]) {
              boardDB.circleWin = true;
              return('Circle');

            }
          } else if(dp[i][j] === 'cross') {
            if(dp[i][j] !== null && dp[i][j] == dp[i][j+1] && dp[i][j+1] == dp[i][j+2]) {
              boardDB.crossWin = true;
              return('Cross');

            }
          }    
        }

        // check column
        let m, n = 0
        for(m=0; m<3; m++) {
          if(dp[n][m] === 'circle') {
            if(dp[n][m] !== null && dp[n][m] == dp[n+1][m] && dp[n+1][m] == dp[n+2][m]) {
              boardDB.circleWin = true;
              return('Circle');

            }
          } else if(dp[n][m] === 'cross') {
            if(dp[n][m] !== null && dp[n][m] == dp[n+1][m] && dp[n+1][m] == dp[n+2][m]) {
              boardDB.crossWin = true;
              return('Cross');
            }
          }    
        }

        // check diagonal
        // check 1st daigonal
          if(dp[0][0] === 'circle') {
            if(dp[0][0] !== null && dp[0][0] == dp[1][1] && dp[1][1] == dp[2][2]) {
              boardDB.circleWin = true;
              return('Circle');
            }    
          } else if(dp[0][0] === 'cross') {
            if(dp[0][0] !== null && dp[0][0] == dp[1][1] && dp[1][1] == dp[2][2]) {
              boardDB.crossWin = true;
              return('Cross');
            }
          }

        // check 2nd daigonal
          if(dp[0][2] === 'circle') {
            if(dp[0][2] !== null && dp[0][2] == dp[1][1] && dp[1][1] == dp[2][0]) {
              boardDB.circleWin = true;
              return('Circle');
            }    
          } else if(dp[0][2] === 'cross') {
            if(dp[0][2] !== null && dp[0][2] == dp[1][1] && dp[1][1] == dp[2][0]) {
              boardDB.crossWin = true;
              return('Cross');
            }
          } 

  }
