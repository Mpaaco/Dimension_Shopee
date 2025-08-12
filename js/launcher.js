const chkCorreios = document.getElementById('chk-correios');
const chkMoto     = document.getElementById('chk-moto');
const chkSpx      = document.getElementById('chk-SPX');

async function handleCheck(box, modulePath, fnName) {
  if (!box.checked) return;

  localStorage.setItem('selectedCheckbox', box.id);

  location.reload();
}

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

    [chkCorreios, chkMoto, chkSpx]
      .filter(cb => cb.id !== savedCheckbox)
      .forEach(cb => cb.checked = false);

    const mod = await import(modulePath);
    mod[fnName]();
  }
});

chkCorreios.addEventListener('change', () =>
  handleCheck(chkCorreios, './pages/correios/main_correios.js', 'main_correios')
);
chkMoto.addEventListener('change', () =>
  handleCheck(chkMoto, './pages/moto/main_moto.js', 'main_moto')
);
chkSpx.addEventListener('change', () =>
  handleCheck(chkSpx, './pages/spx/main.js', 'main')
);
