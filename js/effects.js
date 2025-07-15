
export function addInputEffects(inputs) {
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#FF6B35';
            input.style.boxShadow = '0 0 0 3px rgba(255, 107, 53, 0.1)';
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '#ddd';
            input.style.boxShadow = 'none';
        });
    });
}

export function addButtonHoverEffects(buttons) {
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
}
