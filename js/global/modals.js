export function showErrorModal(resultado, somaCm) {
    const modal = document.getElementById('modalError');
    const resultElement = document.getElementById('resultError');

    resultElement.innerHTML = `
        Peso Cúbico: ${resultado} <br>
        Soma dos Lados: ${somaCm} cm <br>
    `;
    modal.style.display = 'block';

    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal('modalError');
    });
}

export function showSuccessModal(resultado, somaCm) {
    const modal = document.getElementById('modalSuccess');
    const resultElement = document.getElementById('resultSuccess');

    resultElement.innerHTML = `
        Peso Cúbico: ${resultado} <br>
        Soma dos Lados: ${somaCm} cm <br>
     `;
    modal.style.display = 'block';

    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal('modalSuccess');
    });
}

export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    } else {
        console.warn(`Modal com ID "${modalId}" não encontrado.`);
    }
}
