const game = {
    cells: document.querySelectorAll(".cell"),
    positions: ["","","","","","","","",""],
    symbols: ["o", "x"],
    winningSequences: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    symbolFlag: 0,
    runningFlag: false,


    makePlay: function(e) {
        game.positions[e.getAttribute("id")] = game.symbols[game.symbolFlag];
        game.checkWinner(e.getAttribute("id"));
    },

    checkWinner: function(index) {
        let actualSymbol = game.symbols[game.symbolFlag];
        for(let i of game.winningSequences) {
            for(let j=0; j<3; j++) {
                if(i[j]==index) {
                    i[j] = actualSymbol;
                }
            }
            if(i[0]==i[1] && i[1]==i[2]) {
                game.identifyWinner(i);
            }
        }
    },

    identifyWinner: function(ar) {
        for(let i=0; i<game.winningSequences.length; i++) {
            if(ar == game.winningSequences[i]) {
                ar = game.fillWins();
                game.cells[ar[i][0]].style.color = "#FFD700";
                game.cells[ar[i][1]].style.color = "#FFD700";
                game.cells[ar[i][2]].style.color = "#FFD700";
                game.winFlag = true;
                game.removeAllEvents();
            }
        }
    },

    change: function() {
        if(game.symbolFlag == 1) {
            document.querySelectorAll(".player")[0].className = "player active";
            document.querySelectorAll(".player")[1].className = "player";
            return 0;
        } else {
            document.querySelectorAll(".player")[1].className = "player active";
            document.querySelectorAll(".player")[0].className = "player";
            return 1;
        }
            
    },

    draw: function(e) {
        e.currentTarget.innerHTML = game.symbols[game.symbolFlag];
        game.makePlay(e.currentTarget);
        game.symbolFlag = game.change();
        e.currentTarget.removeEventListener("click", game.draw);  
    },

    init: function() {
        game.positions= ["","","","","","","","",""];
        game.winningSequences = game.fillWins();
        game.cells.forEach((el) => {
            el.style.color = "white";
        });
        game.addBoardEvents();
        if(game.runningFlag == false) {
            game.runningFlag = true;
            document.querySelector(".regame").addEventListener("click", () => {
                for(i of game.cells) {
                    i.innerHTML = "";
                }
                document.querySelectorAll(".player")[0].className = "player active";
                document.querySelectorAll(".player")[1].className = "player";
                game.init();
            });
        }
    },

    addBoardEvents: function() {
        game.symbolFlag = 0;
        let i = 0;
        for(let el of this.cells) {
            el.addEventListener("click", game.draw);
            el.setAttribute("id", i);
            i++;
        }
    },

    fillWins: function() {
        return     [[0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]];
    },

    removeAllEvents: function() {
        game.cells.forEach((el)=> {
            el.removeEventListener("click", game.draw);
        })
    }
};