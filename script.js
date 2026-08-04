// LÓGICA EM JAVASCRIPT PARA AJUSTE DE FONTE
const TAMANHO_PADRAO = 22;
let tamanhoAtual = TAMANHO_PADRAO;

function alterarTamanhoTexto(delta) {
  tamanhoAtual += delta;
  
  // Limites de tamanho (Mínimo 18px e Máximo 38px)
  if (tamanhoAtual < 18) tamanhoAtual = 18;
  if (tamanhoAtual > 38) tamanhoAtual = 38;

  document.body.style.fontSize = tamanhoAtual + 'px';
}

function resetarTamanhoTexto() {
  tamanhoAtual = TAMANHO_PADRAO;
  document.body.style.fontSize = TAMANHO_PADRAO + 'px';
}