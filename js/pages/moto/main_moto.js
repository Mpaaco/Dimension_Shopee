import {handleCalculateMoto, clearFormMoto, validateCampoComprimentoMoto, validateCampoLarguraMoto, validateCampoAlturaMoto} from './formHandlers_moto.js';
import {addInputEffects, addButtonHoverEffects} from '../../global/effects.js';
import { closeModal } from '../../global/modals.js';

const form = document.getElementById('calculatorForm');
const clearBtn = document.getElementById('clearBtn');

const inputs = {
  comprimento: document.getElementById('comprimento'),
  largura: document.getElementById('largura'),
  altura: document.getElementById('altura'),
};

form.addEventListener('submit', (e) => handleCalculateMoto(e, inputs));
clearBtn.addEventListener('click', () => clearFormMoto(inputs));

// Validações específicas
inputs.comprimento.addEventListener('input', () => validateCampoComprimentoMoto(inputs.comprimento));
inputs.largura.addEventListener('input', () => validateCampoLarguraMoto(inputs.largura));
inputs.altura.addEventListener('input', () => validateCampoAlturaMoto(inputs.altura));

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