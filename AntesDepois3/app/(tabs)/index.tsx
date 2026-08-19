import { AntesDepois } from "@/components/ui/CardAntesDepois";
import { CardsHorizontais, Props } from "@/components/ui/cards";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const prop1: Props = {
    imagem: {
      uri: "https://ferramentasgerais.vteximg.com.br/arquivos/ids/972017/Cadeado-de-latao-CR-25---PAPAIZ---0100250CX---PAPAIZ.jpg"
    },
    linha1: "Cadeado",
    linha2: "Papaiz",
    linha3: "R$ 50,00"
  };

  const prop2: Props = {
    imagem: {
      uri: "https://jadoces.com.br/wp-content/uploads/2023/08/rot-big-frutibelo_c28c6f61d610a1d3158c54e01ab167a6.png"
    },
    linha1: "Pirulito",
    linha2: "Freegells",
    linha3: "R$ 01,00"
  };

  const lista: Props[] = [prop1, prop2];

  return (
    <ScrollView>

      <CardsHorizontais lista={lista} />

      <AntesDepois
        Titulo="Jones"
        Antes="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReBHy_0yHcU4Vflx0bEr9lIy6W-M7zaKjf7UHKS7ZJCK7gQwgIosxMmNz8&s=10"
        Depois="https://pbs.twimg.com/media/F9dbk_3WAAE87g2.jpg"
      />

      <AntesDepois
      Titulo="sim"
      Antes="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwgpYg7dcMb94fbcVBp0_oLBLf8ORdW7Th_p0078wcg&s=10"
      Depois="https://preview.redd.it/tenno-i-ask-for-your-best-wf-memes-v0-yso1aiszso3f1.jpeg?auto=webp&s=a06c9015683a4e51cd52d7ee621a83bf9a9471ab"
      />
      


    </ScrollView>
  );
}