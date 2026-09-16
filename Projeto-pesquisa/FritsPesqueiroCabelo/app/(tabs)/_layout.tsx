import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Principal' }} />
      <Tabs.Screen name="Pesquisa" options={{ title: 'Pesquisa' }} />
      <Tabs.Screen name="PesquisaWarfreme" options={{ title: 'Pesquisa Warframe' }} />
    </Tabs>
  );
}
