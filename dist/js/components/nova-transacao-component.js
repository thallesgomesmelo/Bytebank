import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";
const elementForm = document.querySelector(".block-nova-transacao form");
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
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    elementForm.reset();
});
