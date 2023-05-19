import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    paragraph: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 15,
    },
    button: {
        backgroundColor: '#9E9E9E',
        padding: 30,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 2,
    },
    buttonZero: {
        backgroundColor: '#ff55ff',
        opacity: 0.5,
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10,
        width: 340,
    },
    textButton: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
    },
    contentZero: {
        alignContent: 'center',
        alignItems: 'center',
    },
    textCounter: {
        fontSize: 32,
        textAlign: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        color: 'white',
    }
})

export default Styles;