import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <View>
                <Icon name='menu' size={28} style={styles.icon} onPress={openMenu} />
            </View>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <View><Text style={styles.headerText}>{title}</Text></View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'relative',
    },
    headerTitle: {
        flexDirection: 'row',
        marginLeft: 70
    },
    headerImage: {
        width: 25,
        height: 25,

    }
})


