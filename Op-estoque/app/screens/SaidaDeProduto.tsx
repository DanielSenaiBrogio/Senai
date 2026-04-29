import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EntradaDeProduto() {
    const [motivo, setMotivo] = useState('');

    return (
        <ImageBackground 
            source={require('../../assets/images/fundo.jpeg')}
            style={styles.background}
            resizeMode="cover"
        >   
            <View style={styles.container}>
                <Text style={styles.title}>Saida de Produtos</Text>

                <Text style={styles.Motivo}>Motivo</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite o motivo..."
                    placeholderTextColor="#ccc"
                    value={motivo}
                    onChangeText={setMotivo}
                    multiline // permite várias linhas (opcional)
                />

                <TouchableOpacity 
                    style={styles.procurarButton}
                    onPress={() => console.log('Procurar produto clicado')}
                >
                    <Text style={styles.procurarButtonText}>Procurar produto</Text>
                </TouchableOpacity>

                {/* Produtos de exemplo */}
                <View style={styles.produtosContainer}>
                    
                    <View style={styles.produtoItem}>
                        <Text style={styles.produtoNome}>Arroz</Text>
                        <Text style={styles.produtoInfo}>5kg - Estoque: 10</Text>
                    </View>

                    <View style={styles.produtoItem}>
                        <Text style={styles.produtoNome}>Feijão</Text>
                        <Text style={styles.produtoInfo}>1kg - Estoque: 25</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    Motivo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff',
    },
    input: {
        width: '90%',
        minHeight: 80,
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
    },
    procurarButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    procurarButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    produtosContainer: {
        marginTop: 30,
        width: '90%',
    },
    produtosTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
        textAlign: 'center',
    },
    produtoItem: {
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    produtoNome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    produtoInfo: {
        fontSize: 14,
        color: '#666',
    },
});