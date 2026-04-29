import { useFocusEffect } from "@react-navigation/native";
import { Link } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { BuscarTodos, CartaoInterface } from "./api";

export default function Index() {
    const [participantes, setParticipantes] = useState<CartaoInterface[]>([]);
    const [loading, setLoading] = useState(true);

    async function carregarParticipantes() {
        try {
            setLoading(true);
            const dados = await BuscarTodos();
            setParticipantes(dados);
        } catch (error) {
            alert("Erro ao carregar participantes: " + error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        carregarParticipantes();
    }, []);

    // Atualiza a lista toda vez que a tela ganha foco (volta do cadastro)
    useFocusEffect(
        useCallback(() => {
            carregarParticipantes();
        }, [])
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00e5ff" />
                <Text style={styles.loadingText}>Carregando participantes...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Participantes</Text>
            
            {participantes.map((participante) => (
                <Link key={participante.id} href={`/telas/telaCadastro?id=${participante.id}`} style={styles.card}>
                    <Image 
                        source={{ 
                            uri: participante.urlFoto?.startsWith('http') 
                                ? participante.urlFoto 
                                : `https://picsum.photos/seed/${participante.id}/60/60.jpg`
                        }} 
                        style={styles.foto} 
                    />
                    <View style={styles.info}>
                        <Text style={styles.nome}>{participante.nome}</Text>
                        <Text style={styles.detalhes}>RM: {participante.rm}</Text>
                        <Text style={styles.detalhes}>{participante.curso}</Text>
                        <Text style={styles.detalhes}>{participante.unidade}</Text>
                    </View>
                </Link>
            ))}

            <Link href={"/telas/telaCadastro"} style={styles.botaoNovo}>
                <Text style={styles.botaoTexto}>+ Adicionar Novo Funcionário</Text>
            </Link>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20
    },
    titulo: {
        fontSize: 28,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 25,
        letterSpacing: 1
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 16
    },
    card: {
        backgroundColor: '#121212',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#333'
    },
    foto: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15
    },
    info: {
        flex: 1
    },
    nome: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 5
    },
    detalhes: {
        fontSize: 14,
        color: '#9aa0a6',
        marginBottom: 2
    },
    botaoNovo: {
        backgroundColor: '#00e5ff',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        marginTop: 10
    },
    botaoTexto: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    }
});