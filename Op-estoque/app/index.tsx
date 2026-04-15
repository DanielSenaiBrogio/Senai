import { useRouter } from 'expo-router';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.fundo}
                    source={require('../assets/images/fundo.jpeg')}
                    resizeMode='cover'
                >
                    <View style={styles.botoes}>
                        <Button
                            style={styles.botao}
                            buttonColor='rgb(70,70,70)'
                            textColor='white'
                            mode='contained-tonal'
                            rippleColor='black'
                            onPress={() => router.push("/screens/produtosScreen")}
                        >
                            <Text style={styles.textoBotoes}>Procurar Produtos</Text>
                        </Button>

                        <Button
                            style={styles.botao}
                            buttonColor='rgb(0,80,0)'
                            textColor='white'
                            mode='contained-tonal'
                            rippleColor='black'
                            onPress={() => console.log("Entrada clicada")}
                        >
                            <Text style={styles.textoBotoes}>Entrada de Produtos</Text>
                        </Button>

                        <Button
                            style={styles.botao}                            
                            buttonColor='rgb(80,0,0)'
                            textColor='white'
                            mode='contained-tonal'
                            rippleColor='black'
                            onPress={() => console.log("Entrada clicada")}
                        >
                            <Text style={styles.textoBotoes}>Saída de Produtos</Text>
                        </Button>

                        <Button
                            style={styles.botao}
                            buttonColor='rgb(240,240,240)'
                            textColor='black'
                            mode='contained-tonal'
                            rippleColor='black'
                            onPress={() => router.push('/screens/sobreScreen')}
                        >
                            <Text style={styles.textoBotoes}>Sobre este App</Text>
                        </Button>
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
        justifyContent: 'space-evenly'
    },

    botao: {
        borderRadius: 2,
        paddingTop: 3,
        paddingBottom: 3,
    },

    textoBotoes: {
        fontFamily: 'Calibri',
        fontSize: 17,
        fontWeight: 'bold'
    }
})