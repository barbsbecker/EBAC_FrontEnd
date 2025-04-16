const form = document.getElementById('formContato');
const tabela = document.getElementById('tabelaContatos').querySelector('tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o reload da página

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();

  if (nome && telefone) {
    const novaLinha = document.createElement('tr');

    const colunaNome = document.createElement('td');
    colunaNome.textContent = nome;

    const colunaTelefone = document.createElement('td');
    colunaTelefone.textContent = telefone;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);

    tabela.appendChild(novaLinha);

    form.reset(); // Limpa os campos
  }
});