import {  useState, useEffect } from "react";
import api from "../services/api";

import {
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

    const [produtos, setProdutos] = useState<IprodutosDoEstoque[]>([]);
    async function BuscarProdutos() {

    try {

        const response = await api.get('/produto');

        console.log(response.data);

        setProdutos(response.data);

    } catch (error) {

        console.log(error);

    }

}
useEffect(() => {
    BuscarProdutos();
}, []);

const produtosFiltrados = produtos.filter((produto) =>

    produto.produtoNome
        .toLowerCase()
        .trim()
        .includes(parametro.toLowerCase())
    ||

    produto.categoriaNome
        .toLowerCase()
        .trim()
        .includes(parametro.toLowerCase())
);

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
                                produtosFiltrados.map((detalhe) => (

                                    <View
                                        key={detalhe.id}
                                        style={styles.card}
                                    >

                                       

                                        <View style={styles.dados}>

                                            <Text style={styles.categoria}>
                                                Categoria: {detalhe.categoriaNome}
                                            </Text>

                                            <Text style={styles.nomeProduto}>
                                                {detalhe.produtoNome}
                                            </Text>

                                            <Text style={styles.quantidade}>
                                                Quantidade: {detalhe.quantidadeAtual} {detalhe.unidadeMedida}
                                            </Text>

                                            <Text style={styles.quantidade}>
                                                Foto: {detalhe.urlImagem}
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