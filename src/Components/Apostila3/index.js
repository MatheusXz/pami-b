import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Styles from './style';



const Index = () => {

    const [num, setNum] = useState(0);

    addNumber = () => {
        setNum(num + 1)
    }

    subNumber = () => {
        setNum(num - 1)
    }

    zeroNumber = () => {
        setNum(0)
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.paragraph}>
                Exemplo 3
            </Text>
            <TouchableOpacity
                style={Styles.button}
                onPress={() => {
                    addNumber();
                }}

            >
                <Text style={Styles.textButton}>+1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ ...Styles.button, marginTop: 10 }}
                onPress={() => {
                    subNumber();
                }}>
                <Text style={Styles.textButton}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ ...Styles.button, marginTop: 10 }}
                onPress={() => {
                    zeroNumber();
                }}>
                <Text style={Styles.textButton}>0</Text>

            </TouchableOpacity>
            <Text style={Styles.textCounter}>{num}</Text>
            <Tex 
            style={Styles.paragraph}>
                asdf
            </Tex> 
            
        </View>
    );
}

export default Index;