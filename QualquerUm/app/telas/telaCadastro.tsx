import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { AtualizarCartao, BuscarPorId, CartaoInterface, CriarCartao } from "../api";

export default function TelaCadastro() {
    const { id } = useLocalSearchParams<{ id?: string }>();
    const router = useRouter();
    const [cartao, setCartao] = useState<CartaoInterface>();
    const [loading, setLoading] = useState(true);
    const [salvando, setSalvando] = useState(false);

    async function CarregarDados(){
        try {
            setLoading(true);
            if (id) {
                // Modo edição - carrega dados existentes
                const dados = await BuscarPorId(id as string);
                setCartao(dados);
            } else {
                // Modo criação - formulário em branco
                setCartao({
                    id: '',
                    rm: 0,
                    nome: '',
                    unidade: '',
                    curso: '',
                    nascimento: '',
                    urlFoto: ''
                });
            }
        } catch (error: any) {
            alert(error.message || "Erro ao carregar dados");
            router.back();
        } finally {
            setLoading(false);
        }
    }

    async function SalvarDados(){
        if(!cartao){
            alert("Nenhum dado para salvar");
            return;
        }
        
        // Validação dos campos obrigatórios
        if (!cartao.nome || cartao.nome.trim() === '') {
            alert("Por favor, preencha o nome");
            return;
        }
        
        if (cartao.rm <= 0) {
            alert("Por favor, preencha um RM válido (maior que 0)");
            return;
        }
        
        if (!cartao.unidade || cartao.unidade.trim() === '') {
            alert("Por favor, preencha a unidade");
            return;
        }
        
        if (!cartao.curso || cartao.curso.trim() === '') {
            alert("Por favor, preencha o curso");
            return;
        }
        
        if (!cartao.nascimento || cartao.nascimento.trim() === '') {
            alert("Por favor, preencha a data de nascimento");
            return;
        }
        
        try {
            setSalvando(true);
            
            if (id) {
                // Modo edição - atualiza existente
                await AtualizarCartao(cartao.id, cartao);
                alert("Dados atualizados com sucesso");
            } else {
                // Modo criação - cria novo
                console.log('Enviando dados para criação:', cartao);
                const novoCartao = await CriarCartao({
                    rm: cartao.rm,
                    nome: cartao.nome.trim(),
                    unidade: cartao.unidade.trim(),
                    curso: cartao.curso.trim(),
                    nascimento: cartao.nascimento.trim(),
                    urlFoto: cartao.urlFoto?.trim() || ''
                });
                setCartao(novoCartao);
                alert("Funcionário criado com sucesso");
            }
            
            // Volta para a lista após salvar
            router.back();
            
        } catch (error: any) {
            console.log('Erro detalhado:', error);
            const mensagemErro = error.response?.data?.message || error.response?.data || error.message;
            alert("Erro ao salvar: " + mensagemErro);
        } finally {
            setSalvando(false);
        }
    }

    function atualizarCampo(campo: keyof CartaoInterface, valor: string | number){
        if(cartao){
            setCartao({...cartao, [campo]: valor});
        }
    }

    function formatarData(text: string): string {
        // Remove tudo que não é número
        const numeros = text.replace(/\D/g, '');
        
        // Limita a 8 números
        const limitado = numeros.slice(0, 8);
        
        // Formata DD/MM/AAAA
        if (limitado.length <= 2) return limitado;
        if (limitado.length <= 4) return `${limitado.slice(0, 2)}/${limitado.slice(2)}`;
        return `${limitado.slice(0, 2)}/${limitado.slice(2, 4)}/${limitado.slice(4)}`;
    }

    function validarRM(text: string): number {
        const numero = parseInt(text);
        return isNaN(numero) || numero < 0 ? 0 : numero;
    }

    useEffect(() => {
        CarregarDados();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00e5ff" />
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>

        <Text style={styles.titulo}>{id ? "Editar Funcionário" : "Novo Funcionário"}</Text>

        <Text style={styles.label}>RM</Text>
        <TextInput
        value={cartao?.rm?.toString()}
        style={styles.input}
        onChangeText={(text) => atualizarCampo('rm', validarRM(text))}
        keyboardType="numeric"
        />

        <Text style={styles.label}>Nome</Text>
        <TextInput
        value={cartao?.nome}
        style={styles.input}
        onChangeText={(value) => atualizarCampo('nome', value)}
        />

        <Text style={styles.label}>Unidade</Text>
        <TextInput
        value={cartao?.unidade}
        style={styles.input}
        onChangeText={(text) => atualizarCampo('unidade', text)}
        />

        <Text style={styles.label}>Curso</Text>
        <TextInput
        value={cartao?.curso}
        style={styles.input}
        onChangeText={(text) => atualizarCampo('curso', text)}
        />

        <Text style={styles.label}>Nascimento</Text>
        <TextInput
        value={cartao?.nascimento}
        style={styles.input}
        onChangeText={(text) => atualizarCampo('nascimento', formatarData(text))}
        placeholder="DD/MM/AAAA"
        />

        <Text style={styles.label}>URL Foto</Text>
        <TextInput
        value={cartao?.urlFoto}
        style={styles.input}
        onChangeText={(text) => atualizarCampo('urlFoto', text)}
        placeholder="https://..."
        />

        <View style={styles.botoes}>
            <View style={styles.botao}>
                <Button 
                    onPress={SalvarDados} 
                    title={salvando ? "Salvando..." : "Salvar"}
                    disabled={salvando}
                />
            </View>

            <View style={styles.botao}>
                <Button 
                    title="Cancelar" 
                    color="#666"
                    onPress={() => router.back()}
                />
            </View>
        </View>

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
        fontSize: 30,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 25,
        letterSpacing: 1
    },

    label: {
        color: '#9aa0a6',
        fontSize: 12,
        marginTop: 10,
        marginBottom: 4,
        letterSpacing: 0.5
    },

    input: {
        borderWidth: 2,
        borderColor: '#00e5ff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#121212',
        color: '#fff',
        fontSize: 14
    },

    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },

    botao: {
        width: '45%'
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
    }
});
