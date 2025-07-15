
export function validateNumberInput(event) {
    const char = String.fromCharCode(event.which);
    if (/[0-9]/.test(char)) return;
    if (char === '.' && !event.target.value.includes('.')) return;
    event.preventDefault();
}

export function formatNumberInput(input) {
    input.addEventListener('input', function () {
        let value = this.value.replace(/[^0-9.]/g, '');
        const parts = value.split('.');
        if (parts.length > 2) {
            value = parts[0] + '.' + parts.slice(1).join('');
        }
        this.value = value;
    });
}
