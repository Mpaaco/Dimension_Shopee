
import { handleCalculate, clearForm } from './formHandlers.js';
import { validateNumberInput, formatNumberInput } from './validation.js';
import { addInputEffects, addButtonHoverEffects } from './effects.js';
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

Object.values(inputs).forEach(input => {
    input.addEventListener('keypress', validateNumberInput);
    formatNumberInput(input);
});

addInputEffects(Object.values(inputs));
addButtonHoverEffects(document.querySelectorAll('.btn'));

window.addEventListener('load', () => inputs.comprimento.focus());

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal('modalError');
        closeModal('modalSuccess');
    }
});

const closeModalSuccessBtn = document.getElementById('closeModalSuccessBtn');
if (closeModalSuccessBtn) {
    closeModalSuccessBtn.addEventListener('click', () => closeModal('modalSuccess'));
}
const closeModalErrorBtn = document.getElementById('closeModalErrorBtn');
if (closeModalErrorBtn) {
    closeModalErrorBtn.addEventListener('click', () => closeModal('modalError'));
}