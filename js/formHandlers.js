
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
    if ( c >= 120.1 )
    {
        alert('Comprimento não pode ser maior que 120 cm.');
        return;
    }
    if ( a >= 80.1 )
    {
        alert(' não pode ser maior que 80 cm.');
        return;
    }
    if ( l >= 80.1 )
    {
        alert('Largura não pode ser maior que 80 cm.');
        return;
    }

    const pesoCubico = calcularPesoCubico(c, l, a);
    const resultadoFormatado = formatarResultado(pesoCubico);
    const somaCm = c + l + a;

    if (pesoCubico > 30.1 || somaCm > 200.1){
        showErrorModal(resultadoFormatado, somaCm);
    } else {
        showSuccessModal(resultadoFormatado,somaCm);
    }
}

export function validateCampoComprimento(input){
    const valor = parseFloat(input.value);
    if (!valor || valor <= 0){
        input.setCustomValidity("O comprimento deve ser um número maior que zero.")
    } else if ( valor >= 120.1 ){
        input.setCustomValidity("O comprimento não pode ser maior que 120 cm.")
    }else {
        input.setCustomValidity("");}

        input.reportValidity();
}

export function validateCampoLargura (input){
    const valor = parseFloat(input.value);
    if (!valor || valor <= 0){
        input.setCustomValidity("A largura deve ser um número maior que zero.")
    } else if (valor >= 80.1 ){
        input.setCustomValidity("A largura não pode ser maior que 80 cm.")
    } else {
        input.setCustomValidity("");
    }

    input.reportValidity();

}

export function validateCampoAltura (input){
    const valor = parseFloat(input.value);
    if (!valor || valor <= 0){
        input.setCustomValidity("A altura deve ser um número maior que zero.")
    } else if (valor >= 80.1 ){
        input.setCustomValidity("A altura não pode ser maior que 80 cm.")
    } else {
        input.setCustomValidity("")
    }

    input.reportValidity();
}

export function clearForm(inputs) {
    inputs.comprimento.value = '';
    inputs.largura.value = '';
    inputs.altura.value = '';
    inputs.comprimento.focus();
}
