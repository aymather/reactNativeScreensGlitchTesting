import React from 'react'
import ScreenWrapper from './ScreenWrapper'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'


const ScreenTwo = () => {

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <Text style={styles.text}>Woah... who knew testing could be THIS MUCH FUN</Text>
                <Text style={styles.text}>I'm running out of things to say here...</Text>
                <Text style={styles.text}>*silence*</Text>
            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default ScreenTwo