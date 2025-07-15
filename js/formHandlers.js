
import { calcularPesoCubico, formatarResultado } from './calculate.js';
import { showErrorModal, showSuccessModal } from './modals.js';

export function handleCalculate(event, inputs) {
    event.preventDefault();

    const { comprimento, largura, altura } = inputs;
    const c = parseFloat(comprimento.value);
    const l = parseFloat(largura.value);
    const a = parseFloat(altura.value);

    if (!c || !l || !a || c <= 0 || l <= 0 || a <= 0) {
        alert('Preencha corretamente todos os campos com valores maiores que zero.');
        return;
    }

    const pesoCubico = calcularPesoCubico(c, l, a);
    const resultadoFormatado = formatarResultado(pesoCubico);
    const somaCm = c + l + a;

    pesoCubico > 30
        ? showErrorModal(resultadoFormatado, somaCm, '30kg')
        : showSuccessModal(resultadoFormatado, somaCm, '30kg');
}

export function clearForm(inputs) {
    inputs.comprimento.value = '';
    inputs.largura.value = '';
    inputs.altura.value = '';
    inputs.comprimento.focus();
}
