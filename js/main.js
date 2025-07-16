import {handleCalculate, clearForm, validateCampoComprimento, validateCampoLargura, validateCampoAltura} from './formHandlers.js';
import {validateNumberInput, formatNumberInput} from './validation.js';
import {addInputEffects, addButtonHoverEffects} from './effects.js';
import { closeModal } from './modals.js';

const form = document.getElementById('calculatorForm');
const clearBtn = document.getElementById('clearBtn');

const inputs = {
  comprimento: document.getElementById('comprimento'),
  largura: document.getElementById('largura'),
  altura: document.getElementById('altura'),
};

form.addEventListener('submit', (e) => handleCalculate(e, inputs));
clearBtn.addEventListener('click', () => clearForm(inputs));

// Validações específicas
inputs.comprimento.addEventListener('input', () => validateCampoComprimento(inputs.comprimento));
inputs.largura.addEventListener('input', () => validateCampoLargura(inputs.largura));
inputs.altura.addEventListener('input', () => validateCampoAltura(inputs.altura));

// Estilos e interações
addInputEffects(Object.values(inputs));
addButtonHoverEffects(document.querySelectorAll('.btn'));

window.addEventListener('load', () => inputs.comprimento.focus());

// Fecha modais com ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal('modalError');
    closeModal('modalSuccess');
  }
});

// Botões dos modais
const closeModalSuccessBtn = document.getElementById('closeModalSuccessBtn');
if (closeModalSuccessBtn) {
  closeModalSuccessBtn.addEventListener('click', () => closeModal('modalSuccess'));
}

const closeModalErrorBtn = document.getElementById('closeModalErrorBtn');
if (closeModalErrorBtn) {
  closeModalErrorBtn.addEventListener('click', () => closeModal('modalError'));
}