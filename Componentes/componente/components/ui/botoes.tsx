import { ColorValue, DimensionValue, Text, TouchableOpacity, View } from "react-native";
export type { BotaoProps };

type BotaoProps = {
    texto: string;
    corFundo: string;
    pedding?: DimensionValue
    botaoRedondo?: number | undefined 
    corDoTexto?: string | ColorValue
    corDaBorda?: string | ColorValue | undefined
    LarguraDaBorda?: number | undefined
}


export default function BotaoTexto({ texto, corFundo, pedding, botaoRedondo, corDoTexto, corDaBorda, LarguraDaBorda }: BotaoProps) {
    return (
        
 <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        padding: pedding || 20,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: corFundo,
          padding: 10,
          marginBottom: 10,
          alignItems: "center",
          borderRadius: botaoRedondo || 10,
          borderColor: corDaBorda || "black",
          borderWidth: LarguraDaBorda || 1,
          
        }}
      >
        <Text style={{ color: corDoTexto || "black" }}>{texto}</Text>
      </TouchableOpacity>

      
    </View>

    );
}