let game = {
    cells: document.querySelectorAll(".cell"),
    positions: ["","","","","","","","",""],
    symbols: ["o", "x"],
    symbolFlag: 0,

    change: function() {
        if(game.symbolFlag == 1)    return 0;
        else                        return 1;
    },

    draw: function(e) {
        e.currentTarget.innerHTML = game.symbols[game.symbolFlag];
        game.symbolFlag = game.change();
        e.currentTarget.removeEventListener("click", game.draw);
    },

    init: function() {
        for(var el of this.cells) {
            console.log(el);
            el.addEventListener("click", game.draw);
        }
    }
};