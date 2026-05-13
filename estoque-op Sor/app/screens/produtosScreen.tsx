import { useState } from "react";

import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Searchbar } from "react-native-paper";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { IprodutosDoEstoque } from "../interfaces/iprodutosDoEstoque";

export default function ProdutosScreen() {

    const [parametro, setParametro] = useState("");

    const [produtos] = useState<IprodutosDoEstoque[]>([
        {
            id: '1',
            nome: 'Leite Piracanjuba',
            quantidade: 4,
            unidadeMedida: 'Un',
            imagem: require('../../assets/images/Leite_piracanjuba.jpg'),
        },

        {
            id: '2',
            nome: 'LEITE DE SACO',
            quantidade: 10,
            unidadeMedida: 'Un',
            imagem: require('../../assets/images/Leite_de_saco.jpg'),
        },

        {
            id: '3',
            nome: 'Leite de Jarro',
            quantidade: 8,
            unidadeMedida: 'Un',
            imagem: require('../../assets/images/leite_de_jarro.jpg'),
        },

        {
            id: '4',
            nome: 'Leite de Boi',
            quantidade: 15,
            unidadeMedida: 'Un',
            imagem: require('../../assets/images/Leite_de_boi.jpg'),
        },
    ]);

    return (
        <SafeAreaProvider>

            <View style={styles.container}>

                <ImageBackground
                    style={styles.fundo}
                    source={require('../../assets/images/fundo.jpg')}
                    resizeMode="cover"
                >

                    <Searchbar
                        value={parametro}
                        onChangeText={(value) => setParametro(value)}
                        placeholder="Produto ou Categoria"
                        mode="view"
                        iconColor="rgb(100,0,0)"
                        style={styles.searchBar}
                        inputStyle={styles.texto}
                    />

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >

                        <View style={styles.cardsContainer}>

                            {
                                produtos.map((detalhe) => (

                                    <View
                                        key={detalhe.id}
                                        style={styles.card}
                                    >

                                        <Image
                                            style={styles.imagem}
                                            source={detalhe.imagem}
                                            resizeMode="contain"
                                        />

                                        <View style={styles.dados}>

                                            <Text style={styles.categoria}>
                                                Categoria: Alimentos
                                            </Text>

                                            <Text style={styles.nomeProduto}>
                                                {detalhe.nome}
                                            </Text>

                                            <Text style={styles.quantidade}>
                                                Quantidade: {detalhe.quantidade} {detalhe.unidadeMedida}
                                            </Text>

                                        </View>

                                    </View>

                                ))
                            }

                        </View>

                    </ScrollView>

                </ImageBackground>

            </View>

        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    fundo: {
        width: '100%',
        height: '100%',
        padding: 10,
        gap: 15,
    },

    cardsContainer: {
        paddingVertical: 10,
        gap: 15,
    },

    searchBar: {
        backgroundColor: 'white',
        borderRadius: 10,
    },

    texto: {
        fontSize: 18,
    },

    card: {

        backgroundColor: 'rgba(245,245,220,0.95)',

        minHeight: 100,

        borderWidth: 2,
        borderColor: 'black',

        borderRadius: 15,

        padding: 10,

        flexDirection: 'row',

        alignItems: 'center',

        gap: 15,
    },

    imagem: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    dados: {
        flex: 1,
        justifyContent: 'space-evenly',
    },

    categoria: {
        fontSize: 13,
        color: '#444',
    },

    nomeProduto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(100,0,0)',
    },

    quantidade: {
        fontSize: 14,
        fontWeight: '500',
    },

});