import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Search',
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile',
            }
        }
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#345995',
            },
        },
    })
);

export default Routes;