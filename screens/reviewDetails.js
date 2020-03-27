import React from 'react'
import { StyleSheet, Text, View, Button, Image, ImageStore } from 'react-native'
import { globalStyles, images } from '../styles/globalStyles'
import Card from '../shared/card'

const ReviewDetails = ({ route, navigation }) => {

    const { title, body, rating } = route.params

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>Ratings: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})

