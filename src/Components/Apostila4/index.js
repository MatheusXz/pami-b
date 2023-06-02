import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';


const Apostila4 = () => {
    const [msg, setMsg] = useState();
    const [prompt, setPrompt] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>
                Aula 004
            </Text>

            <Text
                style={styles.txtSaida}
            >
                {msg ? msg : 'Vazio'}
            </Text>

            <TextInput
                style={styles.txtEntrada}
                onChangeText={(e) => setPrompt(e)}
                value={prompt}
            />

            <TouchableOpacity
                style={styles.textButton}
                onPress={() => {
                    setMsg(prompt)
                    setPrompt('')
                }}
            >
                <Text>
                    Enviar
                </Text>
            </TouchableOpacity>


            {msg &&
                console.log(msg)
            }
        </View>
    );
}

export default Apostila4;
