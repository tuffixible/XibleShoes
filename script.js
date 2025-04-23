// Seleciona o formulário
const formulario = document.getElementById('formulario-contato');

// Adiciona um evento de envio ao formulário
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Obtém os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Verifica se os campos estão preenchidos
  if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Verifica se o email é válido
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  // Se tudo estiver correto, exibe uma mensagem de sucesso
  alert('Mensagem enviada com sucesso!');
});
