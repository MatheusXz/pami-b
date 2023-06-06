import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const Calc = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerResult}>
                    0
                </Text>
            </View>
            <View style={styles.contentsButtons}>
                <TouchableOpacity style={styles.buttonAC}>
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
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000000',
    },
    headerResult: {
        fontSize: 50,
        margin: 15,
    },
    contentsButtons: {
        flexDirection: 'row',
        width: '100%',
        height: '15%',
        backgroundColor: '#ff00ff',
    },
    button: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ff00',
        borderWidth: 2,
        elevation: 2,
    },
    buttonAC: {
        width: '75%',
        
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ff00',
        borderWidth: 2,
    },
    buttonZero: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00ff00',
        borderWidth: 2,
    }

})

export default Calc;
