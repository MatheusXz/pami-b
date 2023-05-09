import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Styles from './style';



const Index = () => {

    const [num, setNum] = useState(0);

    addNumber = () => {
        setNum(num + 1)
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

                {/* <Feather  name="plus" size={24} color='white' /> */}
                <Text style={Styles.textButton}>+1</Text>
            </TouchableOpacity>
            <Text style={Styles.textCounter}>{num}</Text>
        </View>
    );
}

export default Index;