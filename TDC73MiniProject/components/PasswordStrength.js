/*------------------ PASSWORD STENGTH COMPONENT--------------------
  The passwordstrength component calculates the password's 
  strenght on a scal from 0-4.  The strenght is displayed 
  with the help of a bar and a word, for example "weak" or "strong".

  Variables thet can be altered when calling the component:
    - passWord = string
    - height= int 
    - width= int
    - fontSize= int
    - borderColor= string 
    - backgroundColor= string
    - hidenWhenNotUsed= boolean
    - oneColor= string
------------------------------------------------------------------*/

import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text} from 'react-native';

// Constants
const checkSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const checkNumber = /\d/;
const checkLowerCase = /[a-z]/;
const checkUpperCase = /[A-Z]/;
const status=[ 'To short!','Weak!', 'Ok', 'Good', 'Strong'];

const PassWordStrength = ({passWord, height, width, fontSize, borderColor,borderWidth, backgroundColor, hiddenWhenNotUsed, oneColor}) =>{

    // Variables
    let heightBar= height ? height : 10;
    let widthBar= width ? width : 200;
    let theBarColor= backgroundColor ? backgroundColor : '#00000000';
    let theBorderColor= borderColor ? borderColor : 'black';
    let sizeFont= fontSize ? fontSize : 20;
    let hide= hiddenWhenNotUsed? hiddenWhenNotUsed: false;
    let thePassWord= passWord? passWord: '';
    let theBorderWidth= borderWidth!= undefined ? borderWidth: 2;
    let colors= oneColor ? [ oneColor, oneColor,oneColor, oneColor, oneColor] : ['#FF0000','#FF0000','#FFFF00', '#00E8F9','#38f101'] ; 
    const [strength, setStrength] = useState(0);
    const [barWidth, setBarWidth] = useState('0%'); 

    // Get the strenght of the password (0-4)
    useEffect(() => {
        let totalStrength = 0;

        if(checkSpecialChars.test(passWord)) {
          totalStrength++; 
        }
        if(checkNumber.test(passWord)) {
          totalStrength++; 
        }
        if(checkLowerCase.test(passWord) && checkUpperCase.test(passWord)) {
          totalStrength++; 
        }
        if(passWord.length > 8) {
          totalStrength++; 
        }
        else{
            totalStrength=0;
        }
    
        setStrength(totalStrength);
        setBarWidth((totalStrength*25) + '%');
    }, [passWord]);
    
    //What is returned
    if(hide == true && thePassWord== ''){
        return(null);
    }
    else{
        return(
            <View style={[{ width: widthBar, height: heightBar+ sizeFont+5,}]}>
                <View style={[styles.theBar, {width:widthBar,height:heightBar, backgroundColor:theBarColor,borderColor:theBorderColor, borderWidth:theBorderWidth}]}>
                    <View style={[styles.strengthBar, {backgroundColor: colors[strength], width: barWidth } ]}></View>
                </View>                
                <Text style={[styles.theText, {color: colors[strength], fontSize: sizeFont}]}>
                    {(passWord.length == 0 ) ? '' : status[strength]}
                </Text>
            </View>
        );
    }
};

// The styles for the elements
const styles= StyleSheet.create({
    theBar:{
        borderRadius:5,
    },
    strengthBar: {
        position: 'absolute',
        height: '100%',  
        borderRadius: 3  
    },
    theText:{
        fontWeight: 'bold',
        textAlign:'right',
    }
});

export default PassWordStrength;

