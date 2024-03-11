import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
const elementSaldo = document.querySelector(".saldo-valor .valor");
const elementDataAcesso = document.querySelector(".block-saldo time");
let saldo = 3000;
if (elementDataAcesso) {
    const dataAcesso = new Date();
    elementDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo) {
    saldo = novoSaldo;
    if (elementSaldo) {
        elementSaldo.textContent = formatarMoeda(saldo);
    }
}
