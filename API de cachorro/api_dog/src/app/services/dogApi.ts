import { traduzir } from "./traslate";

export async function buscarRacas() {
  const response = await fetch(
    "https://dogapi.dog/api/v2/breeds",
    {
      cache: "no-store",
    }
  );

  const data = await response.json();

  const racasTraduzidas = await Promise.all(
    data.data.map(async (dog: any) => ({
      ...dog,
      attributes: {
        ...dog.attributes,
        description: await traduzir(
          dog.attributes.description
        ),
      },
    }))
  );

  return racasTraduzidas;
}