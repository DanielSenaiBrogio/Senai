import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BotaoMenu } from './components/botao-menu';

export default function Index() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.fundo}
                    source={require('../assets/images/fundo.jpg')}
                    resizeMode='cover'
                >
                    <View style={styles.botoes}>
                        <BotaoMenu
                            texto='Adicionar Produto'
                            rota={'/screens/AdicionarProduto'}
                            buttonColor='rgba(88, 88, 236, 1)'
                            textColor='black'
                        />

                        <BotaoMenu
                            rota={'/screens/produtosScreen'}
                            texto='Procurar Produtos'
                            buttonColor='rgb(70,70,70)'
                            textColor='white'
                        />

                        <BotaoMenu
                            rota={'/screens/operacaoEstoqueScreen?tipo=E'}
                            texto='Entrada de Produtos'
                            buttonColor='rgb(0,80,0)'
                            textColor='white'
                        />

                        <BotaoMenu
                            rota={"/screens/operacaoEstoqueScreen?tipo=S"}
                            texto='Saída de Produtos'
                            buttonColor='rgb(80,0,0)'
                            textColor='white'
                        />

                        <BotaoMenu
                            texto='Sobre este App'
                            rota={'/screens/sobreScreen'}
                            buttonColor='rgb(240,240,240)'
                            textColor='black'
                        />
                    </View>

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
        height: '100%'
    },

    botoes: {
        paddingLeft: '10%',
        paddingRight: '10%',
        flex: 1,
        justifyContent: 'flex-end',
        gap: 15,
        paddingBottom: 15
    },
})