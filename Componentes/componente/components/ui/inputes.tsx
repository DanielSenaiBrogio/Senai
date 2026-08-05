import { Text, TextInput, View, ColorValue, DimensionValue} from "react-native";

export type InputesProps = {
  rotulo?: string;
  corDaFonteDoInput?: string | ColorValue | undefined;
  corDoFundoDoTextInput?: string | ColorValue | undefined;
  larguraDaBordaInferior?: number | undefined;
  corDaBordaInferior?: string | ColorValue;
  fontSize?: number | undefined;
  padding?: number | DimensionValue;
};

export default function Inputes({
  rotulo = "Escreva oque vc quiser:",
  corDaFonteDoInput = "red",
  corDoFundoDoTextInput = "white",
  larguraDaBordaInferior = 4,   
  corDaBordaInferior = "black",
  fontSize = 18,
  padding = 10
}: InputesProps) {
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ marginBottom: 5}}>{rotulo}</Text>

        <TextInput style={{
            color: corDaFonteDoInput,
            backgroundColor: corDoFundoDoTextInput,
            borderBottomWidth: larguraDaBordaInferior,
            borderBottomColor: corDaBordaInferior,
            fontSize: fontSize,
            padding: padding
        }}>
            
        </TextInput>    

        </View>

        
    )
}
