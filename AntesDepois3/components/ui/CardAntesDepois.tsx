import { Image, Text, View } from "react-native";

export type Props = {
    Titulo: string;
    Antes: string;
    Depois: string;
};

export type ListaProps = {
    lista: Props[];
};

export function AntesDepois({
    Titulo,
    Antes,
    Depois
}: Props) {
    return (
        <View
            style={{
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                width: 300,
                padding: 10,
                marginBottom: 10,
                alignItems: "center",
            }}
        >
            
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    marginBottom: 10,
                }}
            >
                {Titulo}
            </Text>

            
            <View
                style={{
                    flexDirection: "row",
                    gap: 10,
                }}
            >
                
                <View style={{ alignItems: "center" }}>
                    <Text>Antes</Text>

                    <Image
                        style={{
                            width: 120,
                            height: 120,
                            borderWidth: 1,
                            borderColor: "black",
                            borderRadius: 8,
                        }}
                        source={{ uri: Antes }}
                    />
                </View>

                
                <View style={{ alignItems: "center" }}>
                    <Text>Depois</Text>

                    <Image
                        style={{
                            width: 120,
                            height: 120,
                            borderWidth: 1,
                            borderColor: "black",
                            borderRadius: 8,
                        }}
                        source={{ uri: Depois }}
                    />
                </View>
            </View>
        </View>
    );
}

export function CardsHorizontais({ lista }: ListaProps) {
    return (
        <View>
            {lista.map((item, index) => (
                <AntesDepois
                    key={index}
                    Titulo={item.Titulo}
                    Antes={item.Antes}
                    Depois={item.Depois}
                />
            ))}
        </View>
    );
}