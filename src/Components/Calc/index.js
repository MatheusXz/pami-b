import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// CALCULADORA COMUM

const Calc = () => {
    const [resultado, setResult] = useState(0);
    const [numPress, setNumPress] = useState('');

    const [buttonPressed, setButtonPressed] = useState(false);

    const valuePress = (number) => {

        const newNumPress = numPress + number.toString();
        setNumPress(newNumPress);

    };




    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerResult}>
                    {numPress}
                    {/* {resultado} */}
                </Text>
            </View>
            <View style={styles.contentsButtons}>

                <TouchableOpacity


                    onPress={() => {
                        setNumPress('0')
                    }}

                    style={[styles.button, styles.buttonAC, buttonPressed && styles.buttonPressed]}
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
                        // const splitNumPress = numPress.split('/');
                        // setNumPress(splitNumPress.replace(',','/'));

                        // console.log(splitNumPress);

                        // for (let contador = 0; contador < numPress.length; contador++) {
                        //     // GERAR UM ARRY NOVO SEPARANDO OS NUMEROS DOS SINAIS DE '/'
                        //     if (numPress.includes == '/') {
                        //         const splitNumPress = numPress.split('/');
                        //         setNumPress(splitNumPress.join('/') + numPress);
                        //         console.log(splitNumPress)
                        //     } else if (number == '*') {

                        //     } else if (number == '-') {

                        //     } else if (number == '+') {

                        //     }
                        //     // AQUI ESTA FUNCIONAL FALTA GERAR UM NOVO ARRAY SEPARANDO OS NUMEROS DOS SINAIS 

                        //     // if (numPress[contador] == '/') {
                        //     //     //pega o termo anterior ao sinal e posterior ao sinal(dois numero)
                        //     //     num1 = numPress[contador - 1];
                        //     //     num2 = numPress[contador + 1];
                        //     //     //executa a multiplicação
                        //     //     setResult(parseFloat(num1) * parseFloat(num2)) 
                        //     //     // apaga os 3 termos do numPress referente a operação(n1,n2 e o sinal)
                        //     //     numPress.slice(contador - 1, 3);
                        //     //     //adiciona o resultado no lugar dos outros 3 termos
                        //     //     numPress.slice(contador - 1, 0, resultado);
                        //     //     console.log(num1)
                        //     //     console.log(num2)
                        //     // }
                        // }
                        // else if (botaoApertado == "=") {

                        //     //um for que percore todo o arrey executando as multiplicação e divisão
                        //     for (contador = 0; contador < array.length; contador++) {
                        //         //achou multiplicação
                        //         if (array[contador] == '*') {
                        //             //pega o termo anterior ao sinal e posterior ao sinal(dois numero)
                        //             num1 = parseFloat(array[contador - 1]);
                        //             num2 = parseFloat(array[contador + 1]);
                        //             //executa a multiplicação
                        //             resultado = num1 * num2;
                        //             // apaga os 3 termos do array referente a operação(n1,n2 e o sinal)
                        //             array.splice(contador - 1, 3);
                        //             //adiciona o resultado no lugar dos outros 3 termos
                        //             array.splice(contador - 1, 0, resultado);
                        //         }
                        //         if (array[contador] == '/') {
                        //             num1 = parseFloat(array[contador - 1]);
                        //             num2 = parseFloat(array[contador + 1]);
                        //             resultado = num1 * num2;
                        //             array.splice(contador - 1, 3);
                        //             array.splice(contador - 1, 0, resultado);
                        //         }
                        //     }
                        //     for (contador = 0; contador < array.length; contador++) {
                        //         if (array[contador] == '+') {
                        //             num1 = parseFloat(array[contador - 1]);
                        //             num2 = parseFloat(array[contador + 1]);
                        //             resultado = num1 * num2;
                        //             array.splice(contador - 1, 3);
                        //             array.splice(contador - 1, 0, resultado);
                        //         }
                        //         if (array[contador] == '-') {
                        //             num1 = parseFloat(array[contador - 1]);
                        //             num2 = parseFloat(array[contador + 1]);
                        //             resultado = num1 * num2;
                        //             array.splice(contador - 1, 3);
                        //             array.splice(contador - 1, 0, resultado);
                        //         }
                        //     }
                        // }













                        // for (let i = 0; i < numPress.length; i++) {
                        //     if (numPress.includes('/')) {

                        //         num1 = parseFloat(numPress[i - 1]);
                        //         num2 = parseFloat(numPress[i + 1]);
                        //         // console.log(parseInt(numPress.substring(0, i)))
                        //         console.log(num1)
                        //         console.log(num2)
                        //     }
                        // }
                        // console.log(numPress)
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
