const elementSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementForm = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;

let saldo = 3000;

elementForm.addEventListener("submit", event => {
  /**
   * Usado para submeter o formulario sem recarregar a página,
   * igual é feito por padrão nos formularios.
   */
  event.preventDefault();

  if (!elementForm.checkValidity()) {
    alert("Por favor, preencha todos os campos da transação!");
    return;
  }

  const inputTipoTransacao = elementForm.querySelector(
    "#tipoTransacao"
  ) as HTMLSelectElement;
  const inputValor = elementForm.querySelector("#valor") as HTMLInputElement;
  const inputData = elementForm.querySelector("#data") as HTMLInputElement;

  let tipoTransacao: string = inputTipoTransacao.value;
  let valor: number = inputValor.valueAsNumber;
  let data: Date = new Date(inputData.value);

  if (tipoTransacao === "Depósito") {
    saldo += valor;
  } else if (
    tipoTransacao === "Transferência" ||
    tipoTransacao === "Pagamento de Boleto"
  ) {
    saldo -= valor;
  } else {
    alert("Tipo de Transação é inválido!");
    return;
  }

  elementSaldo.textContent = saldo.toString();

  const novaTransacao = {
    tipo: tipoTransacao,
    valor: valor,
    data: data
  };

  elementForm.reset();
});
