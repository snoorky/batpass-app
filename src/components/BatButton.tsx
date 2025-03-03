import * as Clipboard from 'expo-clipboard'
import { useState } from "react"
import { Button, Pressable } from "react-native"
import generatePass from "../services/passwordService"
import InputComponent from "./BatInput"
import { styles } from "./style"

export default function ButtonComponent() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass)
    }

    return (
        <>
            <InputComponent pass={pass} />
            <Pressable style={styles.BatButton}>
                <Button
                    title="Generate"
                    accessibilityLabel="Generate a random password"
                    color={"#e5bf3c"}
                    onPress={handleGenerateButton}
                />
            </Pressable>

            <Pressable style={styles.BatButton}>
                <Button
                    title="⚡️ Copy"
                    accessibilityLabel="Copy password to clipboard"
                    color={"#e5bf3c"}
                    onPress={handleCopyButton}
                />
            </Pressable>
        </>
    )
}