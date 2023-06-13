import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const App_6 = () => {

    const [massa, setMassa] = useState();
    const [autura, setAutura] = useState();
    const [resultado, setResultado] = useState();
    const [texto, setTexto] = useState();

    const Calculcar = () => {
        let imc = massa / (autura * autura);
        if (imc < 18.5) {
            setTexto('Abaixo do peso')
        } else if (imc < 24.9) {
            setTexto('Peso ideal')
        } else if (imc < 29.9) {
            setTexto('Sobrepeso')
        } else if (imc < 34.9) {
            setTexto('Obesidade grau 1')
        } else if (imc < 39.9) {
            setTexto('Obesidade grau 2')
        } else {
            setTexto('Obesidade grau 3')
        }
        setResultado(imc)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>Calculcar IMC</Text>
                </View>
                <View style={styles.headerInputs}>
                    <TextInput
                        style={styles.inputMassa}
                        placeholder='Massa em KG'
                        keyboardType='decimal-pad'
                        onChangeText={(e) => setMassa(e)}
                    ></TextInput>
                    <TextInput
                        style={styles.inputAutura}
                        placeholder='Autura em CM'
                        keyboardType='decimal-pad'
                        onChangeText={(e) => setAutura(e)}
                    ></TextInput>
                </View>
            </View>
            <View style={styles.middle}>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    style={styles.buttomCalc}
                    onPress={() => {
                        Calculcar();
                    }}
                >
                    <Text style={{ color: 'black', textTransform: 'capitalize' }}>Calculcar</Text>
                </TouchableOpacity>
                <Text style={styles.resultado}>
                    {resultado.toFixed(2)}
                </Text>
                <Text style={styles.resultado}>{texto}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: '30%',
        width: '100%',
    },
    headerTitle: {
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingVertical: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    headerInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '15%',
    },

    inputMassa: {
        fontSize: 18,
        textAlign: 'center',
        borderBottomColor: '#797979',
        borderTopWidth: 0,
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
        borderWidth: 2,
        padding: 20,
        borderRadius: 30,
    },
    inputAutura: {
        fontSize: 18,
        textAlign: 'center',
        borderBottomColor: '#797979',
        borderTopWidth: 0,
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
        borderWidth: 2,
        padding: 20,
        borderRadius: 30,
    },

    middle: {
        height: '30%',
    },

    bottom: {
        height: '40%',
        width: '100%',
    },

    buttomCalc: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 30,
        color: 'black',
    },
    resultado: {
        textAlign: 'center',
        fontSize: 50,
        // color: ''
    }
})

export default App_6;
