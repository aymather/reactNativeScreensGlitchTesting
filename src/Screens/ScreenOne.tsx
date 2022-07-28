import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'


const ScreenOne = () => {

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to Screen One!</Text>
                <Text style={styles.text}>Omg isn't this so much fun...</Text>
                <Text style={styles.text}>I LOVE TESTING REACT NATIVE</Text>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default ScreenOne