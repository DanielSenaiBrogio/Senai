import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { Searchbar } from "react-native-paper";

type Props = {
    value?: string | undefined;
    onChangeText?: (((text: string) => void) & ((query: string) => void)) | undefined;
    placeholder?: string | undefined;
    iconColor?: string | undefined;
    inputStyle?: StyleProp<TextStyle> | undefined;
}

export function EntradaPesquisa( propriedades: Props ) {
    return (
        <Searchbar
            value={propriedades.value ?? ""}
            onChangeText={propriedades.onChangeText}
            placeholder={propriedades.placeholder ?? ""}
            mode="view"
            iconColor={propriedades.iconColor ?? "rgb(0,0,0)"}
            style={styles.searchBar}
            inputStyle={propriedades.inputStyle ?? styles.texto}
        />
    );
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'white',
    },

    texto: {
        fontSize: 18
    },
});