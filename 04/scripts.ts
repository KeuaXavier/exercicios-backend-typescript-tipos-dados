const produto: { nomeProduto: string, lote: number, ano: number, qtd: number } = {
    nomeProduto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 15
}

function gerarEtiquetas(
    produto: {
        nomeProduto: string,
        lote: number,
        ano: number,
        qtd: number
    }): string[] {
    const etiquetas: string[] = []

    for (let i = 1; i < produto.qtd + 1; i++) {
        etiquetas.push(`${produto.lote}-${produto.ano}-${i.toString().padStart(3, '0')}`);
    }

    return etiquetas
}

console.log(gerarEtiquetas(produto));