import { Text, View } from "react-native";

type Props = {
    corFundo?: string | undefined;
    corTexto?: string | undefined;
    texto: string;
}

export function PainelSubtitulo(propriedades: Props) {
    return (
        <View style={{ backgroundColor: propriedades.corFundo ?? 'rgb(50,50,50)' }}>
            
            <Text style={{
                color: propriedades.corTexto ?? 'rgb(255,255,255)',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center'
            }}>
                {propriedades.texto}
            </Text>
        </View>
    );
}
