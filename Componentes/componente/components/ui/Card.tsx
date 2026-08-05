import {View, Image, Text } from "react-native";

export type CardsProps = {
    nome: string
    fotoDaPessoa: string
    profissao: string;
}
export default function Cards({
  nome,
  fotoDaPessoa,
  profissao,
}: CardsProps) {
  return (
    <View style={{}}>
      <Image source={{ uri: fotoDaPessoa }} style={{ width: 200, height: 200 }} />
      <Text>{nome}</Text>
      <Text>{profissao}</Text>
    </View>
  );
}
