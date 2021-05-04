import React, { useState } from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Touchable } from 'react-native'

import wateringImage from '../assets/watering.png'
import { Button } from '../components/Button'
import colors from '../styles/colors'

export function Welcome() {

    const [visible, setVisible] = useState(false)

    function handleVisibility(param: boolean) {
        setVisible(param)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title} >Gerencie suas plantas de forma fácil</Text>

            {
                visible &&
            <Image source={wateringImage} />
            }

            <Text style={styles.subtitle} >Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity>
                
            </TouchableOpacity>

            <Button title={'Exibir'} onPress={() => handleVisibility(true)} ></Button>
            <Button title={'Esconder'} onPress={() => handleVisibility(false)} ></Button>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     container: {
         flex: 1,
         alignItems: 'center',
         justifyContent: 'space-around'
     },
     title: {
         fontSize: 32,
         fontWeight: 'bold',
         textAlign: 'center',
         color: colors.heading,
         margin: 38,

     },
     subtitle: {
         textAlign: 'center',
         fontSize: 18,
         paddingHorizontal: 20,
         color: colors.heading
     },
     button: {
         backgroundColor: colors.green,
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 16,
         marginBottom: 10
     }
     
})