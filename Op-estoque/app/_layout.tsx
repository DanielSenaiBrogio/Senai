import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tela Inicial", headerTitleAlign: 'center'}} />
      <Stack.Screen name="screens/sobreScreen" options={{ title: "Sobre este App", headerTitleAlign: 'center'}} />
      <Stack.Screen name="screens/produtosScreen" options={{ title: "Produtos", headerTitleAlign: 'center'}} />
      <Stack.Screen name="screens/EntradaDeProduto" options={{ title: "Entrada de Produtos", headerTitleAlign: 'center'}} />
      <Stack.Screen name="screens/SaidaDeProduto" options={{ title: "Saida do Produto", headerTitleAlign: 'center'}} />
    </Stack>
  );
}
