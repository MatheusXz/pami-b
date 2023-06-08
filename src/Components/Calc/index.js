import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// CALCULADORA COMUM

const Calc = () => {
    const [resultado, setResult] = useState(0);
    const [buttonPressed, setButtonPressed] = useState(false);


    const handlePressIn = () => {
        setButtonPressed(true);
      };
    
      const handlePressOut = () => {
        setButtonPressed(false);
      };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerResult}>
                    {resultado}
                </Text>
            </View>
            <View style={styles.contentsButtons}>

                <TouchableOpacity
                    onPress={() => {
                        setResult(0)

                    }}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    style={[styles.button,styles.buttonAC, buttonPressed && styles.buttonPressed]}
                >
                    <Text>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.buttonZero}>
                    <Text>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
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
