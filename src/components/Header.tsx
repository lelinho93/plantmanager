import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import colors from '../styles/colors'
import Avatar from '../assets/wesley.jpg'
import fonts from '../styles/fonts'

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Wesley</Text>                
            </View>
            <Image source={Avatar} style={styles.avatar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor: colors.background,
        marginTop: getStatusBarHeight(),
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35

    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text 
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})