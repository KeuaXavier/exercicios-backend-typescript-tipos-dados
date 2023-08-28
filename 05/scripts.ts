const palavra: string = 'programador';

function soletrando(palavra: string): string {
    const resultado: string = palavra.split('').join('-')

    return resultado
}


console.log(soletrando(palavra));