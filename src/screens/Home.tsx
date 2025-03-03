import { View } from "react-native";
import ButtonComponent from "../components/BatButton";
import LogoComponent from "../components/BatLogo";
import { styles } from "./style";

export default function Home() {
    return (
        <View style={styles.appContainer}>

            <View style={styles.logoContainer}>
                <LogoComponent />
            </View>

            <View style={styles.inputContainer}>
                <ButtonComponent />
            </View>

        </View>
    )
}