function calcularMediaAluno(a1, a2, a3) {

    if(a1 === undefined || a2 === undefined) throw Error ("As notas A1 e A2 devem ser informadas!")

    if(a1 < 0 || a2 < 0) throw new Error ("As notas A1 e A2 não podem ser negativas!")
    
    if(a3 === undefined){
        return a1 * 0.4 + a2 * 0.6
    }

    if(a3 < 0) throw new Error ("A nota A3 não pode ser negativa!")

    return Math.max(a1 * 0.4 + a3 * 0.6, a2 * 0.4 + a3 * 0.6)
}

module.exports = { calcularMediaAluno };
