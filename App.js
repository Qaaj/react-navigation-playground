import React from 'react';
import {View} from 'react-native';
import {SeminarNavigation} from './routes';

export default class App extends React.Component {

    render() {
        return (
            <View style={{flex:1}}>
                <SeminarNavigation />
            </View>
        );
    }
}