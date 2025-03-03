import { Image, Text } from "react-native";
import { styles } from "./style";

export default function LogoComponent() {
    return (
        <>
            <Text style={styles.BatTitle}>BatPass Generator</Text>
            <Image style={styles.BatLogo} source={require('../../assets/bat-logo.png')} />
        </>
    )
}