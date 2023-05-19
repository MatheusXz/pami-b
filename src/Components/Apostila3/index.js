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
                Contador
            </Text>

            <View style={Styles.containerButtons}>
                <TouchableOpacity
                    style={{ ...Styles.button, marginTop: 10, backgroundColor: 'red' }}
                    onPress={() => {
                        subNumber();
                    }}>
                        <Feather name='minus' size={24} color={'white'}>1</Feather>
                </TouchableOpacity>
                <Text style={Styles.textCounter}>{num}</Text>
                <TouchableOpacity
                    style={{ ...Styles.button, backgroundColor: 'green' }}
                    onPress={() => {
                        addNumber();
                    }}
                >
                    <Feather name='plus' size={24} color={'white'}>1</Feather>

                </TouchableOpacity>

            </View>
            <View style={Styles.contentZero}>
                <TouchableOpacity
                    style={{ ...Styles.buttonZero, marginTop: 10 }}
                    onPress={() => {
                        zeroNumber();
                    }}>
                    <Text style={Styles.textButton}>Zerar</Text>

                </TouchableOpacity>
            </View>
        </View >
    );
}

export default Index;