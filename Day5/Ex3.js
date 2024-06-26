class Calculation {
    #calcilationLine;
    constructor (calculationLine) {
        this.#calcilationLine = calculationLine;
    }


    set calculationLine(calculationLine) {
        this.#calcilationLine = calculationLine;
    }
    
    get calculationLine() {
        return this.#calcilationLine;
    }
    
    addLastSymbolCalculationLine(symb) {
        this.#calcilationLine = this.#calcilationLine + symb;
    }

    deleteLastSymbol() {
        this.#calcilationLine = this.#calcilationLine.slice(0, -1);
    }

    getLastSymbol(symb) {
        return this.#calcilationLine.slice(-1);
    }
}