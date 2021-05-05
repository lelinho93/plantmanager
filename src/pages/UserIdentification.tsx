import React, { useState } from 'react'
import {
    SafeAreaView,
    Text,
    TextInput,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/core'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Button } from '../components/Button'

export function UserIdentification() {
    const [isFocused, setIsfocused] = useState(false)
    const [isFilled, setIsfilled] = useState(false)
    const [name, setName] = useState<string>()

    const navigation = useNavigation()

    function handleInputBlur(){
        setIsfocused(false)
        setIsfilled(!!name)
    }

    function handleInputFocus(){
        setIsfocused(true)
    }
    function handleInputChange(value: string){
        setIsfilled(!!value)
        setName(value)
    }
    function handleSubmit(){
        navigation.navigate('Confirmation')
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                            <Text style={styles.emoji}>{ isFilled ? '😁' : '😎' }</Text> 

                            <Text style={styles.title}>
                                Como podemos {'\n'} 
                                chamar você?
                            </Text>
                            </View>          
                                
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && 
                                    {borderColor: colors.green}
                                ]}
                                placeholder='Digite o seu nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                                />
                            <View style={styles.footer}>
                                <Button
                                title={"Confirmar"}
                                onPress={handleSubmit}
                                />
                            </View>                            
                        </View> 
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    header: {
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    form: {
        flex: 1,
        justifyContent:'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44,
        color: colors.background
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50, 
        padding: 10,
        textAlign: 'center'
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20

    }
})