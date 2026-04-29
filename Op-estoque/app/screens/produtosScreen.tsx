// Importações necessárias do React Native e bibliotecas externas
import { useRef, useState } from 'react'; // Hooks para gerenciar estado e referências
import { Animated, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"; // Componentes básicos do React Native
import { Searchbar } from "react-native-paper"; // Componente de busca da biblioteca Paper

// Componente principal da tela de produtos
export default function ProdutosScreen() {
    // Estado para armazenar o texto digitado na barra de busca
    const [searchQuery, setSearchQuery] = useState('');
    const scrollY = useRef(new Animated.Value(0)).current;

    // Animação da barra de busca
    const searchBarTranslateY = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [0, -100],
        extrapolate: 'clamp',
    });

    const searchBarOpacity = scrollY.interpolate({
        inputRange: [0, 30],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

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
                {/* Barra de busca animada */}
                <Animated.View style={[
                    styles.searchContainer,
                    {
                        transform: [{ translateY: searchBarTranslateY }],
                        opacity: searchBarOpacity,
                    }
                ]}>
                    <Text style={styles.texto}>Produtos ou Categorias</Text>
                    <Searchbar
                        style={styles.searchBar}
                        placeholder="Buscar produtos ou categorias" // Texto de ajuda
                        onChangeText={setSearchQuery} // Atualiza o estado quando o texto muda
                        value={searchQuery} // Valor controlado pelo estado
                    />
                </Animated.View>
                
                {/* Container com scroll para lista de produtos */}
                <ScrollView
                    style={styles.cardsContainer}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={16}
                >
                    {/* Linha 1 - Arroz, Feijão e Macarrão */}
                    <View style={styles.row}>
                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Arroz.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Arroz</Text>
                                <Text style={styles.cardDescription}>5kg</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Feijao.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Feijão</Text>
                                <Text style={styles.cardDescription}>1kg</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Macarrao.png')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Macarrão</Text>
                                <Text style={styles.cardDescription}>500g</Text>
                            </View>
                        </View>
                    </View>

                    {/* Linha 2 - Óleo, Açúcar e Sal */}
                    <View style={styles.row}>
                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Oleo.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Óleo</Text>
                                <Text style={styles.cardDescription}>900ml</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Açucar.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Açúcar</Text>
                                <Text style={styles.cardDescription}>1kg</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Sal.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Sal</Text>
                                <Text style={styles.cardDescription}>1kg</Text>
                            </View>
                        </View>
                    </View>

                    {/* Linha 3 - Café, Farinha e Leite */}
                    <View style={styles.row}>
                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Cafe.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Café</Text>
                                <Text style={styles.cardDescription}>500g</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Farinha.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Farinha</Text>
                                <Text style={styles.cardDescription}>1kg</Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <ImageBackground
                                source={require('../../assets/images/Leite.jpg')}
                                style={styles.cardImage}
                                imageStyle={{ borderRadius: 8 }}
                            />
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.cardTitle}>Leite</Text>
                                <Text style={styles.cardDescription}>1L</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    // Container principal
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Título principal
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#ffffff',
    },
    // Texto descritivo
    texto: {
        fontSize: 16,
        marginBottom: 15,
        color: '#ffffff',
    },
    // Barra de busca animada
    searchContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        backgroundColor: 'transparent',
        zIndex: 1,
    },
    // Estilo da barra de busca
    searchBar: {
        width: '50%',
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,0.9)',
    },
    // Imagem de fundo
    fundo: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
    // Card de produto
    card: {
        width: 110,
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    // Imagem do card
    cardImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginBottom: 8,
    },
    // Container do texto
    cardTextContainer: {
        alignItems: 'center',
        flex: 1,
    },
    // Linhas da grade
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
    },
    // Título do produto
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // Descrição do produto
    cardDescription: {
        fontSize: 13,
        color: '#666',
        textAlign: 'center',
    },
    // Container dos cards
    cardsContainer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },
});