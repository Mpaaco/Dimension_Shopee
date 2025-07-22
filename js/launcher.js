const chkCorreios = document.getElementById('chk-correios');
const chkMoto     = document.getElementById('chk-moto');
const chkSpx      = document.getElementById('chk-SPX');

// Função para lidar com o clique nos checkboxes
async function handleCheck(box, modulePath, fnName) {
  if (!box.checked) return;

  // Salva o checkbox que foi selecionado localmente
  localStorage.setItem('selectedCheckbox', box.id);

  // Atualiza a página
  location.reload();
}

// Ao carregar a página, verifica se havia um checkbox salvo e executa a função correspondente
window.addEventListener('DOMContentLoaded', async () => {
  const savedCheckbox = localStorage.getItem('selectedCheckbox');

  if (savedCheckbox) {
    const checkbox = document.getElementById(savedCheckbox);
    checkbox.checked = true;

    let modulePath, fnName;

    switch (savedCheckbox) {
      case 'chk-correios':
        modulePath = './pages/correios/main_correios.js';
        fnName = 'main_correios';
        break;
      case 'chk-moto':
        modulePath = './pages/moto/main_moto.js';
        fnName = 'main_moto';
        break;
      case 'chk-SPX':
        modulePath = './pages/spx/main.js';
        fnName = 'main';
        break;
    }

    // Desmarca os outros checkboxes
    [chkCorreios, chkMoto, chkSpx]
      .filter(cb => cb.id !== savedCheckbox)
      .forEach(cb => cb.checked = false);

    // Carrega o módulo e executa a função
    const mod = await import(modulePath);
    mod[fnName]();
  }
});

// Associa eventos aos checkboxes
chkCorreios.addEventListener('change', () =>
  handleCheck(chkCorreios, './pages/correios/main_correios.js', 'main_correios')
);
chkMoto.addEventListener('change', () =>
  handleCheck(chkMoto, './pages/moto/main_moto.js', 'main_moto')
);
chkSpx.addEventListener('change', () =>
  handleCheck(chkSpx, './pages/spx/main.js', 'main')
);
