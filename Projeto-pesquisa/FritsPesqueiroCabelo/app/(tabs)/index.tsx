import { router } from "expo-router";
import { Button, ScrollView, Text } from "react-native";


export default function HomeScreen() {
  return (
    <ScrollView>
      <Text style= {{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        Página inicial
      </Text>
      <Button title="Pesquisar" onPress={()=>router.push('/Pesquisa')}/>
      <Text style= {{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Esses aqui e so para warfreme</Text>
      <Button title="Pesquisar Warframe" onPress={()=>router.push('/PesquisaWarfreme')}/>
      <Text style= {{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Voce pesquisou: [Nada] </Text>
    
    </ScrollView>
  )
  }