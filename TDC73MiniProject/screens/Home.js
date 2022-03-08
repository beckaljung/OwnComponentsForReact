/*----------- The home screen---------------
Contains two buttons wich will take the user to 
two different screens to be able to view the 
two seperat components
--------------------------------------------*/ 

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.homebody}>
            <Text style={styles.rubrikText}>Testapp for Miniprojekt in TDDC73</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('PasswordScreen')}>
                <View style={styles.buttons}>
                    <Text style={styles.buttonText}> PasswordScreen</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('StarsScreen')}>
                <View style={styles.buttons}>
                    <Text style={styles.buttonText}> StarsScreen</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

// The styles for the elements
const styles = StyleSheet.create({
    homebody: {
        backgroundColor: 'white',
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons:{
        height: 80,
        width: 200,
        borderRadius:20, 
        backgroundColor: '#D3D3D3', 
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }, 
    buttonText:{
        fontWeight:'bold',
        fontSize: 20
    }, 
    rubrikText:{
        fontSize: 25,
        fontWeight: 'bold'
    }
  });