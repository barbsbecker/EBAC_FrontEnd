const formulario = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const campoA = parseFloat(document.getElementById('campoA').value);
  const campoB = parseFloat(document.getElementById('campoB').value);

  if (campoB > campoA) {
    mensagem.textContent = '✅ Sucesso! Campo B é maior que Campo A.';
    mensagem.className = 'mensagem positiva';
    mensagem.style.display = 'block';
  } else {
    mensagem.textContent = '❌ Erro: Campo B deve ser maior que Campo A.';
    mensagem.className = 'mensagem negativa';
    mensagem.style.display = 'block';
  }
});
