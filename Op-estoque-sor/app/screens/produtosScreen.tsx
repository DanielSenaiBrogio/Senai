import { useEffect, useState } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { EntradaPesquisa } from "../components/entrada-pesquisa";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Get } from "../api/produtoapi";
import { IProduto } from "../interfaces/produtointerface";

export default function ProdutosScreen() {
    const [parametro, setParametro] = useState("");
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    const urlImagens = "https://vistoque.runasp.net/imagens/";

    async function CarregarDados() {
        const dados = await Get();
        setProdutos(dados);
    }

    useEffect(() => { CarregarDados() }, []);

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.fundo}
                    source={require('../../assets/images/fundo.jpg')}
                    resizeMode='cover'
                >
                    <EntradaPesquisa
                        value={parametro}
                        onChangeText={(value) => setParametro(value)}
                        placeholder="Produto ou Categoria"
                        iconColor="rgb(100,0,0)"
                    />

                    <ScrollView>
                        <View style={styles.cardsContainer}>

                            {
                                produtos.map(produto =>
                                    <View style={styles.card}>
                                        <Image

                                            style={styles.imagem}
                                            source={{
                                                // uri: `${urlImagens}${produto.nomeArquivoFoto}`
                                                uri: urlImagens + produto.nomeArquivoFoto
                                            }}
                                        />

                                        <View style={styles.dados}>
                                            <Text>Categoria: {produto.categoriaNome} </Text>
                                            <Text style={{ fontWeight: 500 }}>{produto.produtoNome}</Text>
                                            <Text>Quantidade: {produto.quantidadeAtual + " " + produto.unidadeMedida}</Text>
                                        </View>

                                    </View>
                                )
                            }
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </SafeAreaProvider>


    )
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
        display: 'flex',
        padding: 10,
        gap: 25
    },

    card: {
        backgroundColor: 'beige',
        height: 100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderTopRightRadius: 20,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },

    imagem: {
        width: 100 - 14,
        height: 100 - 14
    },

    dados: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    }
})