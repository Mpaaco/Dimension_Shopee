
export function validateNumberInput(event) {
    const char = String.fromCharCode(event.which);
    if (/[0-9]/.test(char)) return;
    if (char === '.' && !event.target.value.includes('.')) return;
    event.preventDefault();

}

export function formatNumberInput(input) {
    input.addEventListener('input',function(){
      let cursorPos = input.selectionStart;
      let value = this.value;
      
      value = value.replace(/[^0-9.]/g, '');

      const firstDotIndex = value.indexOf('.');
      if (firstDotIndex !== -1){
        value = value.slice(0, firstDotIndex + 1) + value.slice(firstDotIndex + 1).replace(/\./g,'');
      }
      this.value = value;

      this.setSelectionRange(cursorPos, cursorPos);
    });
}
