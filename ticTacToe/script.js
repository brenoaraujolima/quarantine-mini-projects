const game = {
    cells: document.querySelectorAll("div"),
    positions: ["","","","","","","","",""],
    symbols: ["o", "x"],
    symbolFlag: 0,

    init: function() {
        this.cells.forEach((element,index) => {
            element.addEventListener("click", () => {
                element.innerHTML = this.symbols[this.symbolFlag];
                this.positions[index] = this.symbols[this.symbolFlag];
                this.trocar();
                console.log(this.positions);
            });
        });
    },

    trocar: function() {
        if(this.symbolFlag == 0)    this.symbolFlag = 1;
        else                        this.symbolFlag = 0;
    }
};