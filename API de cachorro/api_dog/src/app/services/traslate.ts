import translate from "translate";
translate.engine = "google";

export async function traduzir(texto: string) {
  return await translate(texto, {
    from: "en",
    to: "pt",
  });
}