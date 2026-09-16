import { router } from "expo-router";
import { Button, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { store } from "@/app/store";
import { GlobalStyles } from "../styles";

export default function Pesquisa() {
    const nomeProduto = store((state) => state.nomeProduto);
  return (
    <ScrollView>
      <View style={GlobalStyles.container}>
        <Text style= {GlobalStyles.textoDaImagem}>Mesa primed</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR719jhhJlQw_0G2QCVktgdHujIC7bvo9z-EQ_fhVzcmmP-_vxVAeC53sI&s=10" }} />

        <Text style={GlobalStyles.textoDaImagem} >Uriel</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://preview.redd.it/what-kind-of-abilities-are-you-thinking-urial-will-have-v0-3j0vbv6q5fmf1.png?auto=webp&s=1b293aef89c4777e5ea5ab547980c0ca5c7858e2" }} />

        <Text style={GlobalStyles.textoDaImagem}>koumei</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://i.redd.it/vpa2jfukhjsd1.jpeg" }} />

        <Text style={GlobalStyles.textoDaImagem}>Gauss primed</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://static.wikia.nocookie.net/warframe/images/8/8d/GaussPrimeFull.png/revision/latest?cb=20240907144132" }} />

        <Text style={GlobalStyles.textoDaImagem}>Equinox</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://static.wikia.nocookie.net/warframe/images/f/f7/EquinoxPrimeFull.png/revision/latest?cb=20240909222440" }} />


        <Text style={GlobalStyles.textoDaImagem}>Nekros Primed</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd68Wy1CXH8MirA6rFlbwXPdydlYoruzkmX5BrMpGubA&s=10" }} />


        <Text style={GlobalStyles.textoDaImagem}>Oraxia </Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDkBXYKfQfp6U-y_fjzYzSra-OsM0KUbBiORDrM1GuA&s=10" }} />
        

        <Text style={GlobalStyles.textoDaImagem}>Jade</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiYQmb7OOudMcN1PjQalp37-wdRi5D02DGOmdaF7cFv6ZgaGcqw2TC__l&s=10" }} />
        
        <Text style={GlobalStyles.textoDaImagem}>Wisp Primed</Text>
        <Image style={GlobalStyles.image} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81fL5aBTD5l2KycK5DSXX7OHasX4tyK5SYLKfXspcgg&s" }} />

        

      </View>

      <Button title="cancelar" onPress={() => router.back ()} />

        <Text style={GlobalStyles.textoDaImagem}>voce pesquisou por {nomeProduto || "nenhum produto selecionado"}</Text>
    </ScrollView>
  )
}

