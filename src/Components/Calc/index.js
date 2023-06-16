import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// CALCULADORA COMUM

const Calc = () => {
    const [resultadofim, setResult] = useState(0);
    const [value, setValue] = useState();
    const [numPress, setNumPress] = useState(0);
    const [sinPress, setSinPress] = useState(0);
    const [separacaoArray, setArraySeparacao] = useState();

    const sinais = [
        '-', '+', '*', '/'
    ];
    const numbers = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'
    ]
    const valuePress = (number) => {
        
        if (number === '/') {
            
        }
        const newSinPress = value + number.toString();
        setValue(newSinPress);
    };

    const separa = (array) => {
        let valorSplit = 0;
        let numberConcatenado = 0;
        let arrayFinal = [];
        let resultado = 0;
        
        valorSplit = array.split('')
        for (let i = 0; i < array.length; i++) {
            if (numbers.includes(valorSplit[i])) {
                numberConcatenado += valorSplit[i]
            } else if (sinais.includes(valorSplit[i])) {
                arrayFinal.push(numberConcatenado)
                numberConcatenado = '';
                arrayFinal.push(valorSplit[i])
            }
        }
        arrayFinal.push(numberConcatenado)
        for (contador = 0; contador < arrayFinal.length; contador++) {
            //achou multiplicação
            if (arrayFinal[contador] == '*') {
                //pega o termo anterior ao sinal e posterior ao sinal(dois numero)
                num1 = parseFloat(arrayFinal[contador - 1]);
                num2 = parseFloat(arrayFinal[contador + 1]);
                //executa a multiplicação
                resultado = num1 * num2;
                // apaga os 3 termos do arrayFinal referente a operação(n1,n2 e o sinal)
                arrayFinal.splice(contador - 1, 3);
                //adiciona o resultado no lugar dos outros 3 termos
                arrayFinal.splice(contador - 1, 0, resultado);
                contador--;
            }
            if (arrayFinal[contador] == '/') {
                num1 = parseFloat(arrayFinal[contador - 1]);
                num2 = parseFloat(arrayFinal[contador + 1]);
                resultado = num1 / num2;
                arrayFinal.splice(contador - 1, 3);
                arrayFinal.splice(contador - 1, 0, resultado);
                contador--;


            }


            if (sinais.includes(array)) {
                valorFim = array.split('')
            }
            
        }
        for (contador = 0; contador < arrayFinal.length; contador++) {
            if (arrayFinal[contador] == '+') {
                num1 = parseFloat(arrayFinal[contador - 1]);
                num2 = parseFloat(arrayFinal[contador + 1]);
                resultado = num1 + num2;
                arrayFinal.splice(contador - 1, 3);
                arrayFinal.splice(contador - 1, 0, resultado);
                contador--;

            }
            if (arrayFinal[contador] == '-') {
                num1 = parseFloat(arrayFinal[contador - 1]);
                num2 = parseFloat(arrayFinal[contador + 1]);
                resultado = num1 - num2;
                arrayFinal.splice(contador - 1, 3);
                arrayFinal.splice(contador - 1, 0, resultado);
                contador--;

            }
        }
        setValue(arrayFinal)
    }





    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerResult}>
                    {value}
                </Text>
            </View>
            <View style={styles.contentsButtons}>

                <TouchableOpacity


                    onPress={() => {
                        setValue('0')
                    }}

                    style={[styles.button, styles.buttonAC]}
                >
                    <Text>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress('/')
                    }
                    }
                >
                    <Text>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(7)
                    }
                    }
                >

                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(8)
                    }
                    }
                >
                    <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(9)
                    }
                    }
                >
                    <Text>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress('*')
                    }
                    }
                >
                    <Text>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(4)
                    }
                    }
                >
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(5)
                    }
                    }
                >
                    <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(6)
                    }
                    }
                >
                    <Text>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress('-')
                    }
                    }
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(1)
                    }
                    }
                >
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(2)
                    }
                    }
                >
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress(3)
                    }
                    }
                >
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress('+')
                    }
                    }
                >
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.buttonZero}
                    onPress={() => {
                        valuePress(0)
                    }
                    }
                >
                    <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        valuePress('.')
                    }
                    }
                >
                    <Text>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        separa(value)
                    }
                    }
                >
                    <Text>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    headerResult: {
        fontSize: 50,
        padding: 15,
    },
    contentsButtons: {
        flexDirection: 'row',
        width: '100%',
        height: '10%',
        backgroundColor: '#fff',
        borderRadius: 50,
    },
    button: {
        width: '25%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        elevation: 2,
        borderRadius: 10,
        padding: 10
    },
    buttonAC: {
        width: '75%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 10,
        color: '#fff'
    },
    buttonZero: {
        width: '50%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        elevation: 2,
        borderRadius: 10,
        padding: 10
    },
    buttonPressed: {
        backgroundColor: '#000',
        color: '#fff',
    }

})

export default Calc;
