// Importações necessárias para o componente
import { useRouter } from 'expo-router'; // Navegação entre telas
import { ImageBackground, StyleSheet, Text, View } from 'react-native'; // Componentes básicos
import { Button } from 'react-native-paper'; // Botões estilizados
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Área segura

// Estilos
const styles = StyleSheet.create({
  container: {
    // Tela cheia e transparente
    flex: 1,
    backgroundColor: 'transparent',
  },
  fundo: {
    // Imagem de fundo cheia
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  botoesContainer: {
    // Espaçamento e alinhamento dos botões
    flex: 1,
    paddingHorizontal: '10%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 20,
    paddingTop: 60,
  },
  botao: {
    // Estilo dos botões
    borderRadius: 8,
    paddingVertical: 4,
    marginVertical: 8,
    width: '80%',
    alignSelf: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotao: {
    // Estilo do texto dos botões
    fontFamily: 'System',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});

// Dados dos botões para facilitar manutenção
const BUTTONS_DATA = [
    {
        id: 'produtos',
        title: 'Procurar Produtos',
        color: 'rgb(70,70,70)',
        textColor: 'white',
        route: '/screens/produtosScreen'
    },
    {
        id: 'entrada',
        title: 'Entrada de Produtos',
        color: 'rgb(0,80,0)',
        textColor: 'white',
        route: '/screens/EntradaDeProduto'
    },
    {
        id: 'saida',
        title: 'Saída de Produtos',
        color: 'rgb(80,0,0)',
        textColor: 'white',
        route: '/screens/SaidaDeProduto'
    },
    {
        id: 'sobre',
        title: 'Sobre este App',
        color: 'rgb(240,240,240)',
        textColor: 'black',
        route: '/screens/sobreScreen'
    }
];

// Componente principal da tela inicial
export default function Index() {
    const router = useRouter();

    // Função para lidar com cliques nos botões
    const handleButtonPress = (button: typeof BUTTONS_DATA[0]) => {
        if (button.route) {
            router.push(button.route as any);
        } else if (button.action) {
            button.action();
        }
    };

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.fundo}
                    source={require('../assets/images/fundo.jpeg')}
                    resizeMode='cover'
                >
                    {/* Container dos botões do menu */}
                    <View style={styles.botoesContainer}>
                        {BUTTONS_DATA.map((button) => (
                            <Button
                                key={button.id}
                                style={styles.botao}
                                buttonColor={button.color}
                                textColor={button.textColor}
                                mode='contained-tonal'
                                rippleColor='rgba(0,0,0,0.2)'
                                onPress={() => handleButtonPress(button)}
                            >
                                <Text style={styles.textoBotao}>{button.title}</Text>
                            </Button>
                        ))}
                    </View>

                </ImageBackground>
            </View>
        </SafeAreaProvider>
    )
}