// Importações necessárias do React Native e bibliotecas externas
import { useState } from 'react'; // Hook para gerenciar estado
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"; // Componentes básicos do React Native
import { Searchbar } from "react-native-paper"; // Componente de busca da biblioteca Paper

// Componente principal da tela de produtos
export default function ProdutosScreen() {
    // Estado para armazenar o texto digitado na barra de busca
    const [searchQuery, setSearchQuery] = useState('');

    // Estrutura JSX da tela
    return (
        // Container principal que envolve toda a tela
        <View style={styles.container}>
            {/* Imagem de fundo que cobre toda a tela */}
            <ImageBackground
                style={styles.fundo}
                source={require('../../assets/images/fundo.jpeg')} // Imagem de fundo local
                resizeMode='cover' // Ajusta a imagem para cobrir todo o espaço
            >
                {/* Título descritivo da tela */}
                <Text style={styles.texto}>Produtos ou Categorias</Text>
                
                {/* Barra de busca para filtrar produtos */}
                <Searchbar
                    style={styles.searchBar}
                    placeholder="Buscar produtos ou categorias" // Texto de ajuda
                    onChangeText={setSearchQuery} // Atualiza o estado quando o texto muda
                    value={searchQuery} // Valor controlado pelo estado
                />
                
                {/* Container com scroll para lista de produtos */}
                <ScrollView style={styles.cardsContainer}>
                    {/* Card individual de produto */}
                    <View style={styles.card}>
                        {/* Imagem do produto */}
                        <ImageBackground
                            source={require('../../assets/images/Arroz.jpg')} // Imagem do produto
                            style={styles.cardImage}
                            imageStyle={{ borderRadius: 10 }} // Borda arredondada na imagem
                        />
                        {/* Container com informações textuais do produto */}
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardTitle}>Arroz</Text> {/* Nome do produto */}
                            <Text style={styles.cardDescription}>Pacote 5kg</Text> {/* Descrição do produto */}
                        </View>
                        {/*Outra view */}
                        
                    </View>

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
    // Estilo para o container principal - ocupa toda a tela e centraliza conteúdo
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Estilo para o título principal (não usado atualmente)
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ffffff',
    },
    // Estilo para o texto descritivo "Produtos ou Categorias"
    texto: {
        fontSize: 16,
        marginBottom: 15,
        color: '#ffffff',
    },
    // Estilo para a barra de busca - largura reduzida e espaçamento inferior
    searchBar: {
        width: '50%',
        marginBottom: 20,
    },
    // Estilo para a imagem de fundo - cobre toda a tela e centraliza elementos
    fundo: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
    // Estilo para o card de produto - layout horizontal com fundo branco
    card: {
        flexDirection: 'row', // Alinha itens horizontalmente
        width: '90%', // Largura responsiva
        backgroundColor: '#fff', // Fundo branco para contraste
        borderRadius: 10, // Borda arredondada
        padding: 10, // Espaçamento interno
        marginTop: 15, // Espaçamento superior entre cards
        alignItems: 'center', // Centraliza verticalmente
    },
    // Estilo para a imagem dentro do card - tamanho fixo
    cardImage: {
        width: 80, // Largura fixa da imagem
        height: 80, // Altura fixa da imagem
        marginRight: 10, // Espaçamento à direita
    },
    // Container para o texto do card - ocupa espaço restante
    cardTextContainer: {
        flex: 1, // Ocupa todo o espaço disponível
    },
    // Estilo para o título do produto - texto em negrito
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Estilo para a descrição do produto - texto secundário
    cardDescription: {
        fontSize: 14,
        color: '#666', // Cor cinza para texto secundário
    },
    // Container para a lista de cards com scroll
    cardsContainer: {
        width: '100%', // Largura total
        marginTop: 20, // Espaçamento superior
        paddingHorizontal: 20, // Espaçamento horizontal interno
    },
});