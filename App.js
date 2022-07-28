import React from 'react'
import { Navigation } from './src/Navigation'
import {
    StyleSheet,
    View
} from 'react-native'


const App = () => {

    return (
        <View style={styles.container}>
            <Navigation />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
		flex: 1
    }
})

export default App