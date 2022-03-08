//------- The homestack used for navigating the different screens-----

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import PasswordScreen from '../screens/testPasswordScreen';
import StarsScreen from '../screens/testStarsScreen';

const screens={
    Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home',
        }
    },
    PasswordScreen:{
        screen: PasswordScreen,
        navigationOptions:{
            title: 'PasswordScreen',
        }
    },
     StarsScreen:{
        screen: StarsScreen,
        navigationOptions:{
        title: 'StarsScreen',
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#eee',
            height:40
        }
    }
});

export default createAppContainer(HomeStack);
