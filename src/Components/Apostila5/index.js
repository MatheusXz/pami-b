import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const Calculadora = () => {
    const [valueEnd, setValueEnd] = useState('');
    const [valueInp1, setValueInp1] = useState('');
    const [valueInp2, setValueInp2] = useState('');

    const [soma, setSoma] = useState();
    const [subtracao, setSubtracao] = useState();
    const [multiplicacao, setMultiplicacao] = useState();
    const [divisao, setDivisao] = useState();




    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Calculadora</Text>
            </View>
            <TextInput
                style={styles.inputNumbers}
                keyboardType='decimal-pad'
                onChangeText={(e) => setValueInp1(e)}
                value={valueInp1}
            />


            <TextInput
                style={styles.inputNumbers}
                keyboardType='decimal-pad'
                onChangeText={(e) => setValueInp2(e)}
                value={valueInp1}


            />

            <View style={styles.contentResult}>
                <Text style={styles.text}>Resultado</Text>
                <Text style={styles.result}>{valueEnd}</Text>
            </View>
            <View style={styles.contentButtons}>
                <TouchableOpacity style={{ ...styles.buttonCalc, backgroundColor: '#00ff00' }}
                    onPress={() => {
                        setSoma(parseFloat(valueInp1) + parseFloat(valueInp2))
                        setValueEnd(soma)
                    }}
                >
                    <Feather name="plus" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.buttonCalc, backgroundColor: '#ff0000' }}
                    onPress={() => {
                        setSubtracao(parseFloat(valueInp1) - parseFloat(valueInp2))
                        setValueEnd(subtracao)
                    }}
                >
                    <Feather name="minus" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.contentButtons}>

                <TouchableOpacity style={{ ...styles.buttonCalc, backgroundColor: '#0088ff' }}
                    onPress={() => {
                        setDivisao(parseFloat(valueInp1) / parseFloat(valueInp2))
                        setValueEnd(divisao)
                    }}
                >
                    <Feather name="divide" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.buttonCalc, backgroundColor: '#ffff00' }}
                    onPress={() => {
                        setMultiplicacao(parseFloat(valueInp1) * parseFloat(valueInp2))
                        setValueEnd(multiplicacao)
                    }}
                >
                    <Feather name="x" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.contentButtons}>
                <TouchableOpacity style={{ ...styles.buttonCalc, width: '100%', backgroundColor: '#00ffff' }}
                onPress={() => {
                    setDivisao('')
                    setMultiplicacao('')
                    setSoma('')
                    setSubtracao('')
                    setValueInp1('')
                    setValueInp2('')
                    setValueEnd('')
                }}
                >
                    <Feather name="refresh-ccw" size={24} color='black' />
                </TouchableOpacity>
            </View>

            {valueInp1 &&
                console.log('Input 1:' + valueInp1 + ' - Input 2:' + valueInp2 + ' + Soma: ' + valueEnd)
            }

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        color: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'gray',
        textTransform: 'uppercase',
    },
    inputNumbers: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: 'gray',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 200,
        elevation: 2,
        margin: 5,
    },
    contentButtons: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonCalc: {
        width: '50%',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        margin: 5,
    },
    contentResult: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        color: 'gray',
    },
    result: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'gray',
        alignContent: 'center',
    },
})

export default Calculadora;
