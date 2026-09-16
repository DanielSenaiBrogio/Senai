import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PainelSubtitulo } from '../components/painel-subtitulo';

export default function OperacaoEstoqueScreen() {

    const horaAtual = new Date();
    const { tipo } = useLocalSearchParams();

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.fundo}
                    source={require('../../assets/images/fundo.jpg')}
                    resizeMode='cover'
                >
                    <PainelSubtitulo
                        texto={tipo == 'E' ? 'ENTRADA' : 'SAÍDA'}
                        corFundo={tipo == 'E' ? 'rgb(0,100,0)' : 'rgb(100,0,0)'}
                    />

                    <Text style={styles.label}>{horaAtual.toLocaleString()}</Text>

                    <Text style={styles.label}>Motivo:</Text>
                    <TextInput style={styles.input} />

                    <Button title='Procurar Produto' />

                    <PainelSubtitulo texto="DETALHES"/>

                    <View style={styles.produto}>
                        <Text style={styles.label}>Tesoura</Text>
                        <Text style={styles.label}>4 Un</Text>
                    </View>
                    <View style={styles.produto}>
                        <Text style={styles.label}>Leite</Text>
                        <Text style={styles.label}>9 Lt</Text>
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

    subTitulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },

    fundoSubTituloCinza: {
        backgroundColor: 'rgb(50,50,50)',
    },

    fundoSubTituloVerde: {
        backgroundColor: 'rgb(0,100,0)',
    },

    fundoSubTituloVermelho: {
        backgroundColor: 'rgb(100,0,0)',
    },

    label: {
        fontWeight: 'bold'
    },

    input: {
        backgroundColor: 'white'
    },

    produto: {
        backgroundColor: 'beige',
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    }
})