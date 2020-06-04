const game = {
    counter: 0,
    cells: document.querySelectorAll(".cell"),
    positions: ["","","","","","","","",""],
    symbols: ["o", "x"],
    winningSequences: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    symbolFlag: 0,


    makePlay: function(e) {
        game.positions[e.getAttribute("id")] = game.symbols[game.symbolFlag];
        game.counter++;
        game.checkWinner(e.getAttribute("id"));
    },

    checkWinner: function(index) {
        let actualSymbol = game.symbols[game.symbolFlag];
        let wins;
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
                game.removeAllEvents();
            }
        }
    },

    change: function() {
        if(game.symbolFlag == 1)    return 0;
        else                        return 1;
    },

    draw: function(e) {
        e.currentTarget.innerHTML = game.symbols[game.symbolFlag];
        game.makePlay(e.currentTarget);
        game.symbolFlag = game.change();
        e.currentTarget.removeEventListener("click", game.draw);  
    },

    init: function() {
        let i = 0;
        game.winningSequences = game.fillWins();
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