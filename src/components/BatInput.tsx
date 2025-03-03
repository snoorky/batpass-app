import { TextInput } from "react-native";
import { styles } from "./style";

interface InputComponentProps {
    pass: string
}

export default function InputComponent(props: InputComponentProps) {
    return (
        <TextInput
            style={styles.BatInput}
            placeholder="Password"
            value={props.pass}
        />
    )
}