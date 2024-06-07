const form = document.getElementById("formulario");
const containerMensagem = document.getElementById("mensagem");
const numeroA = document.getElementById("numeroA");
const numeroB = document.getElementById("numeroB");

function validaNumero(numA, numB) {
  const comparacao = numA < numB;
  return comparacao;
}

form.addEventListener("submit", function (e) {
  let formEValido = false;
  e.preventDefault();

  const mensagemErro = `O número do campo <b>B</b> deve ser maior que o <b>A</b>!`;
  const mensagemSucesso = `O número do campo B é maior que o do campo A!`;

  formEValido = validaNumero(numeroA.value, numeroB.value);

  if (formEValido) {
    containerMensagem.innerHTML = mensagemSucesso;
    containerMensagem.classList = "mensagem-sucesso";
  } else {
    containerMensagem.innerHTML = mensagemErro;
    containerMensagem.classList = "mensagem-erro";
  }
});

const btnLimpar = document.getElementById("btn-limpar");

btnLimpar.addEventListener("click", function () {
  containerMensagem.classList = "mensagem-disabilitada";
});
