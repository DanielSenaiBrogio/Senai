import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
        <Stack.Screen name="telas/telaCadastro" options={{ title: 'Cadastro' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
}
