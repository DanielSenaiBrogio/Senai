import { Image, ImageSourcePropType, Text, View } from "react-native";

export type Props = {
    imagem: ImageSourcePropType | undefined;
    linha1: string;
    linha2?: string;
    linha3?: string;
};

export type ListaProps = {
    lista: Props[]
}

export function CardHorizontal({
    imagem,
    linha1,
    linha2,
    linha3
}: Props) {
    return (
        <View
            style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                width: 300,
                flexDirection: "row",
                gap: 10,
                padding: 10,
                marginBottom: 10
            }}
        >
            <Image
                style={{
                    width: 100,
                    height: 100,
                    borderWidth: 1
                }}
                source={imagem}
            />

            <View style={{ justifyContent: "space-around" }}>
                <Text>{linha1}</Text>
                {linha2 && <Text>{linha2}</Text>}
                {linha3 && <Text>{linha3}</Text>}
            </View>
        </View>
    );
}

export function CardsHorizontais({ lista }: ListaProps) {
    return (
        <View>
            {
                lista.map((item, index) =>
                    <CardHorizontal
                        key={index}
                        imagem={item.imagem}
                        linha1={item.linha1}
                        linha2={item.linha2}
                        linha3={item.linha3}
                    />
                )
            }
        </View>
    )
}