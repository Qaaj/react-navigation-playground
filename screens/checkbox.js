/**
 * Created by janjorissen on 12.06.17.
 */

import React from 'react';
import {View} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class extends React.Component {

    constructor(props){
        super(props);
        this.state = {checked: true};
    }
    render() {

        const onPress = () => {
            this.setState({checked: !this.state.checked})
        }

        return (
            <View style={{flex:1}}>
                <CheckBox
                    title='Click Here'
                    checked={this.state.checked}
                    onPress={onPress}
                />

                <CheckBox
                    center
                    title='Click Here'
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title='Click Here'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                />

                <CheckBox
                    center
                    title='Click Here to Remove This Item'
                    iconRight
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.checked}
                />
            </View>
        );
    }
}

