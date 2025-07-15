export function showErrorModal(resultado, somaCm, pesoMaximo) {
    const modal = document.getElementById('modalError');
    const resultElement = document.getElementById('resultError');

    resultElement.innerHTML = `
        Peso cúbico: ${resultado} <br>
        Soma dos lados: ${somaCm} cm <br>
        Peso máximo permitido: ${pesoMaximo}
    `;
    modal.style.display = 'block';

    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal('modalError');
    });
}

export function showSuccessModal(resultado, somaCm, pesoMaximo) {
    const modal = document.getElementById('modalSuccess');
    const resultElement = document.getElementById('resultSuccess');

    resultElement.innerHTML = `
        Peso cúbico: ${resultado} <br>
        Soma dos lados: ${somaCm} cm <br>
        Peso máximo permitido: ${pesoMaximo}
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
