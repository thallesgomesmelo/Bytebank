import { FormatoData } from "../types/FormatoData.js";

export function formatarMoeda(valor: number): string {
  return valor.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
  });
}

export function formatarData(
  date: Date,
  formato: FormatoData = FormatoData.PADRAO
): string {
  if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO) {
    return date.toLocaleDateString("pt-br", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  } else if (formato === FormatoData.DIA_MES) {
    return date.toLocaleDateString("pt-br", {
      day: "2-digit",
      month: "2-digit"
    });
  }

  return date.toLocaleDateString("pt-br");
}
