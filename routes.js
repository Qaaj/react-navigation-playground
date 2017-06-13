/**
 * Created by janjorissen on 12.06.17.
 */

import ListScreen from './screens/list';
import ButtonScreen from './screens/buttons';
import GridScreen from './screens/grids';
import CheckScreen from './screens/checkbox';
import DetailsScreen from './screens/details';

import  {StackNavigator} from 'react-navigation';


export const ListWrapper = StackNavigator({
    Lists: {
        screen: ListScreen,
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            title: 'Details',
            label: 'Details'
        }
    },
}, {
    mode: 'modal',
    headerMode: 'none'
})

export const SeminarNavigation = StackNavigator({
    Buttons: {
        screen: ButtonScreen,
        navigationOptions: {
            title: 'Buttons',
            label: 'Buttons'
        }
    },
    Lists: {
        screen: ListWrapper,
        navigationOptions: ({navigation}) => {
            let name = null;
            if(navigation.state.routes[1] && navigation.state.routes[1].params) name = navigation.state.routes[1].params.name;
            return {
                title: name || 'Lists',
                label: 'Lists'
            }
        }
    },
    Grid: {
        screen: GridScreen,
        navigationOptions: {
            title: 'Grids',
            label: 'Grids'
        }
    },
    Checkboxes: {
        screen: CheckScreen,
        navigationOptions: {
            title: 'Checkboxes',
            label: 'Checkboxes'
        }
    },
})