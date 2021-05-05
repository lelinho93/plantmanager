import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import colors from '../styles/colors';
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            {...rest}>

            <Text style={styles.buttonText}>
                {title}
            </Text>
            
        </TouchableOpacity>
        );
}

const styles = StyleSheet.create({  
   
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 56
    },
    buttonText : {
        color: colors.white,
        fontSize: 16,
        margin: 24,
        fontFamily: fonts.heading    
    }
    
})