import Conta from "../types/Conta.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
const elementRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGrupoTransacoes();
    elementRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
        <div class="transacao-item">
          <div class="transacao-info">
              <span class="tipo">${transacao.tipoTransacao}</span>
              <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
          </div>
          <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
        </div>         
      `;
        }
        htmlRegistroTransacoes += `
      <div class="transacoes-group">
        <strong class="mes-group">${grupoTransacao.label}</strong>
        ${htmlTransacaoItem}
      </div>
    `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes += `<div>Não há transações registradas.</div>`;
    }
    elementRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    }
};
export default ExtratoComponent;
