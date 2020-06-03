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
        if(game.counter >= 6) 
            game.checkWinner(e.getAttribute("id"));
    },

    checkWinner: function(index) {
        let count = 0, actualSymbol = game.symbols[game.symbolFlag];
        for(let i of game.winningSequences) {
           for(let j of i) {
               if(game.positions[j] == actualSymbol) {
                    count++;
                    console.log(count);
               }
                else {
                    count = 0;
                    console.log(count);
                }    
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
        for(let el of this.cells) {
            el.addEventListener("click", game.draw);
            el.setAttribute("id", i);
            i++;
        }
    }
};