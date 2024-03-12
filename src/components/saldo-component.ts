import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";

const elementSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementDataAcesso) {
  elementDataAcesso.textContent = formatarData(
    Conta.getDataAcesso(),
    FormatoData.DIA_SEMANA_DIA_MES_ANO
  );
}

renderizarSaldo();
function renderizarSaldo(): void {
  if (elementSaldo) {
    elementSaldo.textContent = formatarMoeda(Conta.getSaldo());
  }
}

const SaldoComponent = {
  atualizar() {
    renderizarSaldo();
  }
};

export default SaldoComponent;
