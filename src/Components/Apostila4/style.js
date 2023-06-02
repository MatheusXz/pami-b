import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcdd2',
        padding: 8,
        width: '100%',
    },
    texto: {
        margin: 24,
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#b71c1c',
    },
    txtSaida: {
        margin: 24,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E53935',
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 22,
        borderColor: '#B71C1C',
        height: 70,
        color: '#E53935',
        borderRadius: 50,
        width: '100%',
    },
    button: {
        backgroundColor: '#E53935',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    textButton: {
        color: '#FFCDD2',
        alignContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        backgroundColor: '#000',
        width: '100%',
        padding: 20,
        borderRadius: 50,
        marginVertical: 50,
    },
})

export default styles;
