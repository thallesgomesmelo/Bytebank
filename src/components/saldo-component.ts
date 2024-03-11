import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";

const elementSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
const elementDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

let saldo: number = 3000;

if (elementDataAcesso) {
  const dataAcesso: Date = new Date();
  elementDataAcesso.textContent = formatarData(
    dataAcesso,
    FormatoData.DIA_SEMANA_DIA_MES_ANO
  );
}

export function getSaldo(): number {
  return saldo;
}

atualizarSaldo(saldo);
export function atualizarSaldo(novoSaldo: number): void {
  saldo = novoSaldo;

  if (elementSaldo) {
    elementSaldo.textContent = formatarMoeda(saldo);
  }
}
