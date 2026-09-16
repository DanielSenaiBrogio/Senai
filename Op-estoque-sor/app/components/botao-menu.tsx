import { Href, useRouter } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

type Props = {
    buttonColor?: string | undefined;
    textColor?: string | undefined;
    texto: string;
    rota: Href;
}

export function BotaoMenu(propriedades: Props) {
    const router = useRouter();

    return (
        <Button
            style={styles.botao}
            buttonColor={propriedades.buttonColor || 'rgb(70,70,70)'}
            textColor={propriedades.textColor || 'white'}
            mode='contained-tonal'
            rippleColor='black'
            onPress={() => router.push(propriedades.rota)}
        >
            <Text style={styles.textoBotoes}>{propriedades.texto}</Text>
        </Button>
    );
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 2,
        paddingTop: 3,
        paddingBottom: 3,
    },

    textoBotoes: {
        fontFamily: 'Calibri',
        fontSize: 20,
        fontWeight: 'bold'
    }
})