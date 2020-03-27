import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const card = (props) => {
    return (
        <View style={styles.card}>
            <View  style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default card

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        elevation: 10,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10     
    }
})
