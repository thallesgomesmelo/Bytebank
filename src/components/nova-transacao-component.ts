import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import SaldoComponent from "./saldo-component.js";
import Conta from "../types/Conta.js";

const elementForm = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;

elementForm.addEventListener("submit", event => {
  try {
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

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    const novaTransacao: Transacao = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data
    };

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();

    elementForm.reset();
  } catch (error) {
    alert(error.message);
  }
});
