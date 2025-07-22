import {handleCalculate, clearForm, validateCampoComprimento, validateCampoLargura, validateCampoAltura} from './formHandlers_correios.js';
import {addInputEffects, addButtonHoverEffects} from './effects_correios.js';
import { closeModal } from './modals_correios.js';

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

function closeAndReload(id) {
  closeModal(id);
  location.reload();
}

// ESC
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeAndReload('modalError');
  }
});

// Botões dos modais
const btnSuccess = document.getElementById('closeModalSuccessBtn');
if (btnSuccess) {
  btnSuccess.addEventListener('click', () => closeAndReload('modalSuccess'));
}

const btnError = document.getElementById('closeModalErrorBtn');
if (btnError) {
  btnError.addEventListener('click', () => closeAndReload('modalError'));
}