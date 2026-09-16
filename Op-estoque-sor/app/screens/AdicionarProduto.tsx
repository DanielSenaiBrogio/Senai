import { Button, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PainelSubtitulo } from '../components/painel-subtitulo';

export default function AdicionarProduto() {

    return (
        <SafeAreaProvider>
            <View style={styles.container}>

                <ImageBackground
                    style={styles.fundo}
                    source={require('../../assets/images/fundo.jpg')}
                    resizeMode="cover"
                >

                    <PainelSubtitulo texto="Adicionar Produto" />

                    <View style={styles.caixa}>

                        <Text style={styles.texto}>
                        Sal Grosso    
                        </Text>

                        <Button
                            title="Buscar"
                            onPress={() => {}}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Coloque a quantidade"
                            keyboardType="numeric"
                        />
                        <Button title="ok" onPress={() => {}}></Button>
                        
                        <Button title="cancelar" onPress={() => {}}></Button>

                    </View>

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

    caixa: {
        gap: 10,
    },

    input: {
        backgroundColor: 'white',
    },
    texto: {
        backgroundColor: 'red',
        textAlign: 'center',
        color: 'white',
        padding: 10,

    },

});