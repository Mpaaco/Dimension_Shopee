
export function calcularPesoCubico(comprimento, largura, altura) {
    return (comprimento * largura * altura) / 6000;
}

export function formatarResultado(pesoCubico) {
    return pesoCubico.toFixed(2) + 'kg';
}
