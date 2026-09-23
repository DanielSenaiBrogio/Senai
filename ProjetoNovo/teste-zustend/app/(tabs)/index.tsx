
import { router } from "expo-router";
import { Text, View, Button } from "react-native";
import { useOptionStore } from "@/hooks/use-option-store";

export default function HomeScreen() {
  const opcoes = useOptionStore((state) => state.opcoes);

  return (
    <View
      style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 20}}
    >

      <Text>Opções Escolhidas:</Text>

      {opcoes.length === 0 ? (
        <Text>NENHUMA</Text>
      ) : ( 
        opcoes.map((opcao, index) => (
          <Text key={index}>
            {opcao}
          </Text>
        ))
      )}

      <Button
        title="Ir para página opções"
        onPress={() => router.push("/(tabs)/opcoes")}
      />
    </View>
  );
}