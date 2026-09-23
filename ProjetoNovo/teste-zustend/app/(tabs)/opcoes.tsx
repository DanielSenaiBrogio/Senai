import { View, Button, Text } from "react-native";
import { router } from "expo-router";
import { useOptionStore } from "@/hooks/use-option-store";

export default function TelaOptions() {
  const adicionarOpcao = useOptionStore(
    (state) => state.adicionarOpcao
  );

  function selecionarProduto(produto: string) {
    adicionarOpcao(produto);
    router.back();
  }



  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text
        onPress={() => selecionarProduto("Tilapia frita")}
        style={{ marginBottom: 20 }}
      >
        Tilapia frita
      </Text>

      <Text
        onPress={() => selecionarProduto("Frango frito")}
        style={{ marginBottom: 20 }}
      >
        Frango frito
      </Text>

      <Text
        onPress={() => selecionarProduto("Pomada capilar")}
        style={{ marginBottom: 20 }}
      >
        Pomada capilar
      </Text>

      <Button
        title="Voltar"
        onPress={() => router.back()}
      />
    </View>
  );
}