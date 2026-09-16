import { router } from "expo-router";
import { Button, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { store } from "@/app/store";
import { GlobalStyles } from "@/app/styles";

export default function Pesquisa() {
    const nomeProduto = store((state) => state.nomeProduto);
  return (
    <ScrollView>
      <View style={GlobalStyles.container}>
        <Text style= {GlobalStyles.textoDaImagem}>Frango frito</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJrqzIbB6A2moeaoWfbcHRvGRkV3MHYQ8mxtt2A9rzrpCdnmsj4_xP09I&s=10" }} />

        <Text style={GlobalStyles.textoDaImagem} >Tilapia</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStGRCrSpsg5ojVn4Cs20v-ClP-2xK6gw_CV0jL6HpWCKRZQn09anE8r_s&s=10" }} />

        <Text style={GlobalStyles.textoDaImagem}>Pomada capilar</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://dmvfarma.vtexassets.com/arquivos/ids/204881/41569_1.jpg?v=638116214189970000" }} />

        <Text style={GlobalStyles.textoDaImagem}>Telurio</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWFAh6fMWAd7yjrxjHs6iFo7JGwNHfX_bUDsi1YRBPA&s=10" }} />

        <Text style={GlobalStyles.textoDaImagem}>Plastideo</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://static.wikia.nocookie.net/warframe/images/e/ea/Plastids-0.png/revision/latest?cb=20171120132627&path-prefix=pt" }} />


        <Text style={GlobalStyles.textoDaImagem}>Celula orokin </Text>
        <Image style={GlobalStyles.image} source={{uri: "https://static.wikia.nocookie.net/warframe/images/2/27/OrokinCell-0.png/revision/latest?cb=20171120131923&path-prefix=pt" }} />


        <Text style={GlobalStyles.textoDaImagem}>Traço do void</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://static.wikia.nocookie.net/warframe/images/9/9c/LuminousIconLarge.png/revision/latest?cb=20180202124300&path-prefix=pt" }} />
        

        <Text style={GlobalStyles.textoDaImagem}>Neurodo</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM4dLY47z44XNsB92wFXYTrBoRkFqNThDDjK-bMvqjA&s=10" }} />
        
        <Text style={GlobalStyles.textoDaImagem}>Reliquia do void</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://static.wikia.nocookie.net/warframe/images/1/1a/VoidProjectionsIronC.png/revision/latest/smart/width/250/height/250?cb=20180628175831&path-prefix=pt" }} />

        

      </View>

      <Button title="cancelar" onPress={() => router.back ()} />

        <Text style={GlobalStyles.textoDaImagem}>voce pesquisou por {nomeProduto || "nenhum produto selecionado"}</Text>
    </ScrollView>
  )
}

