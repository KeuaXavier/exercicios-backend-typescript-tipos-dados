
function criarTabuada(numeros: number[]): string {
    let resultado: string = '';

    for (const numero of numeros) {
        for (let multiplicador = 0; multiplicador < 11; multiplicador++) {
            const multiplicacao: number = numero * multiplicador

            resultado += `${numero} x ${multiplicador} = ${multiplicacao} \n`
        }
        resultado += `---------------\n`
    }

    return resultado;
}

const numeros: number[] = [1, 2, 3]

console.log(criarTabuada(numeros))