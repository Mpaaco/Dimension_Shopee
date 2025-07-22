// launcher.js
const chkCorreios = document.getElementById('chk-correios');
const chkMoto     = document.getElementById('chk-moto');
const chkSpx      = document.getElementById('chk-SPX');

async function handleCheck(box, modulePath, fnName) {
  if (!box.checked) return;

  // Se quiser só um ativo por vez, desmarca os outros:
  [chkCorreios, chkMoto, chkSpx]
    .filter(cb => cb !== box)
    .forEach(cb => cb.checked = false);

  // Importa e executa:
  const mod = await import(modulePath);
  mod[fnName]();
}

// Associa cada checkbox ao seu módulo/função:
chkCorreios.addEventListener('change', () =>
  handleCheck(chkCorreios, './correios/main_correios.js', 'main_correios')
);

chkMoto.addEventListener('change', () =>
  handleCheck(chkMoto, './moto/main_moto.js', 'main_moto')
);

chkSpx.addEventListener('change', () =>
  handleCheck(chkSpx, './spx/main.js', 'main.js')
);
