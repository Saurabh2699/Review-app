import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/globalStyles'
import Card from '../shared/card'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ReviewForm from './reviewForm'

const Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [review, setReview] = useState([
        {
            title: 'Product received dismantled',
            rating: '1',
            body: 'After receiving the product when I opened, it was completely distantled. I ordered a pressure cooker and it was totally dismantled into pieces on opening. Never expected this from Flipkart.',
            key: 1
        },
        {
            title: 'About phone',
            rating: '5',
            body: 'One of the best phones I have ever used. Received as seen on the website. Totally satisfied. Thanks Amazon',
            key: 2
        },
        {
            title: 'Torn tshirt',
            rating: '2',
            body: 'Yesterday I have received a tshirt which I ordered few days ago. It looked nice on the website but when i opened it the tshirt was completely torned and the color was faded.',
            key: 3
        }
    ])

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReview((currentReview) => {
            return [review, ...currentReview]
        })
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>
                    <View style={styles.modalContent}>
                        <Icon
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Icon
                name='add'
                style={styles.modalToggle}
                size={24}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={review}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})
