import { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const livros = [
    {
      titulo: 'Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      descricao:
        'Um livro sobre a jornada de Frodo e seus amigos.',
      imagem:
        'https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg',
    },

    {
      titulo: 'De Volta Para o Futuro',
      autor: 'Robert Zemeckis',
      descricao:
        'Marty McFly viaja no tempo e precisa salvar seu futuro.',
      imagem:
        'https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg',
    },

    {
      titulo: 'Percy Jackson',
      autor: 'Rick Riordan',
      descricao:
        'Percy descobre que é filho de Poseidon.',
      imagem: require('../../assets/images/Livro_do_PJ.jpg'),
    },

    {
      titulo: 'Amor gelato',
      autor: 'Jenna Evans Welch',
      descricao:
        'Um romance ligeiro e divertido sobre amor e amizade.',
      imagem: require('../../assets/images/AmorGelato.png'),
    },

     {
      titulo: 'cronicas de narnia o sobrinho do mago',
      autor: 'Clive Staples Lewis',
      descricao:
        'Criaçao de narnia em base dos primeiros visitantes',
      imagem: require('../../assets/images/livro_do_sor.png'),
    },

    
  ];

  const [livroAtual, setLivroAtual] = useState(0);

  function proximoLivro() {
    if (livroAtual < livros.length - 1) {
      setLivroAtual(livroAtual + 1);
    }
  }

  function voltarLivro() {
    if (livroAtual > 0) {
      setLivroAtual(livroAtual - 1);
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/images/fundo_biblioteca_digital.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={livros[livroAtual].imagem}
            style={styles.imagem}
          />

          <Text style={styles.titulo}>
            {livros[livroAtual].titulo}
          </Text>

          <Text style={styles.descricao}>
            {livros[livroAtual].descricao}
          </Text>

          <View style={styles.botoes}>
            <TouchableOpacity
              style={styles.botao}
              onPress={voltarLivro}
            >
              <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={proximoLivro}
            >
              <Text style={styles.textoBotao}>Próximo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  imagem: {
    width: 220,
    height: 320,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },

  botoes: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 20,
  },

  botao: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});