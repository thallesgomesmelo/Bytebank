const elementSaldo = document.querySelector(".saldo-valor .valor");
const elementForm = document.querySelector(".block-nova-transacao form");
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
    const inputTipoTransacao = elementForm.querySelector("#tipoTransacao");
    const inputValor = elementForm.querySelector("#valor");
    const inputData = elementForm.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao === "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao === "Transferência" ||
        tipoTransacao === "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
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
