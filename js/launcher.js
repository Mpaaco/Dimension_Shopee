//localização
const chkCorreios = document.getElementById('chk-correios');
const chkMoto     = document.getElementById('chk-moto');
const chkSpx      = document.getElementById('chk-SPX');

async function handleCheck(box, modulePath, fnName) {
  if (!box.checked) return;

  [chkCorreios, chkMoto, chkSpx]
    .filter(cb => cb !== box)
    .forEach(cb => cb.checked = false);

  const mod = await import(modulePath);
  mod[fnName]();
}

// Associa cada checkbox ao seu módulo/função:
chkCorreios.addEventListener('change', () =>
  handleCheck(chkCorreios, './pages/correios/main_correios.js', 'main_correios')
);

chkMoto.addEventListener('change', () =>
  handleCheck(chkMoto, './pages/moto/main_moto.js', 'main_moto')
);

chkSpx.addEventListener('change', () =>
  handleCheck(chkSpx, './pages/spx/main.js', 'main')
);