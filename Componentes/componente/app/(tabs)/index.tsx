import { View } from "react-native";
import BotaoTexto, { BotaoProps } from "../../components/ui/botoes";
import InputesProps from "../../components/ui/inputes";
import CardsProps from "../../components/ui/Card";



export default function HomeScreen() {
  return (
    <View style={{ display: "flex", gap: 20, padding: 20 }}>
      {/* <BotaoTexto texto="Salvar" corFundo="blue" corDaBorda="black" LarguraDaBorda={2} />
      <BotaoTexto texto="Cancelar" corFundo="gray" corDoTexto="white" LarguraDaBorda={2} />
      <BotaoTexto texto="Editar" corFundo="yellow" corDoTexto="black" corDaBorda="black" LarguraDaBorda={2} />
      <InputesProps rotulo = "Coloca seu nome ai" corDaFonteDoInput="red" larguraDaBordaInferior={4} corDaBordaInferior="black" fontSize={18} padding={10} /> */}

      <CardsProps
        nome="Alexandre de Moraes"
        fotoDaPessoa="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQWao7EzW5RkwY5HIGozIFyFq4KYCfDvjlaMYEe6yqssFZ8Tgl4-PrmqGwld9W6R8TCOTBxuSG7DIZWECw9-JOODXM-g4sQDvgts8hWz-ZG8NAdGVHsg68wc0fD4WDp1IKKSjMfpJt6bsXW&s=19"
        profissao="Dono do pais" />


    </View>



  );
}