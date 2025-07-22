// Espera o HTML carregar primeiro
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("checkboxSPX").addEventListener("change", function (e) {
    if (e.target.checked) {
      rodarSPX();
    }
  });

  document.getElementById("checkboxOwnFlex").addEventListener("change", function (e) {
    if (e.target.checked) {
      rodarMoto();
    }
  });

  document.getElementById("checkboxCorreios").addEventListener("change", function (e) {
    if (e.target.checked) {
      rodarCorreios();
    }
  });
});
