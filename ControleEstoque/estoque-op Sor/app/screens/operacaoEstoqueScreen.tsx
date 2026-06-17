import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Ioperacaodetalhes} from '../interfaces/ioperaçaodetalhes';
import test from 'node:test';
import { text } from 'node:stream/consumers';

export default function OperacaoEstoqueScreen() {

    const horaAtual = new Date();
    const { tipo } = useLocalSearchParams();
    const [operacaodetalhes] = useState<Ioperacaodetalhes[]>([

    { id: '1', nome: 'Tesoura', quantidade: 4, unidadeMedida: 'un' },
]);

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.fundo}
                    source={require('../../assets/images/fundo.jpg')}
                    resizeMode='cover'
                >
                    <View style={tipo == 'E' ? styles.fundoSubTituloVerde : styles.fundoSubTituloVermelho}>
                        <Text style={styles.subTitulo} > {tipo == 'E' ? 'ENTRADA' : 'SAÍDA'} </Text>
                    </View>

                    <Text style={styles.label}>{horaAtual.toLocaleString()}</Text>
                    <Text style={styles.label}>Motivo:</Text>

                    <TextInput style={styles.input} />

                    <Button
                        title='Procurar Produto'
                    />

                    <View style={styles.fundoSubTituloCinza}>
                        <Text style={styles.subTitulo} >DETALHES</Text>
                    </View>
                  {
                    <View style={styles.produto} >
                    {operacaodetalhes.map(detalhe => (
                      <View key={detalhe.id}>
                        <Text>{detalhe.nome}</Text>
                        <Text>{detalhe.quantidade} {detalhe.unidadeMedida}</Text>
                      </View>
                    ))}
                    </View>
                  }


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