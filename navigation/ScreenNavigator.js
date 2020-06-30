import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ListScreen from '../screens/ListScreen';
import AddAlarmScreen from '../screens/AddAlarmScreen';


const ScreenNavigator = createStackNavigator({
    ListNav: {
        screen: ListScreen,
        navigationOptions: {
            headerShown: false,
        },
    },
    AddAlarmNav: {
        screen: AddAlarmScreen,
        navigationOptions: {
            title: '',
            headerShown: false,
            /*headerStyle:{
                backgroundColor: '#52B1CF',
            },*/
        },
    },
});

export default createAppContainer(ScreenNavigator);