/**
 * Created by janjorissen on 12.06.17.
 */

import React from 'react';
import {View , Text} from 'react-native';
import {ButtonGroup} from 'react-native-elements'



// This

const ColoredText = (color: 'white') => (props) => <Text {...props} style={{color}} />;

// Is the same as

const ColoredTextLong = function(color){
    class CText extends React.Component{
        render(){
            return <Text {...this.props} style={{color: color}} />
        }
    }
    return CText
}

// See https://goo.gl/GYExRs for more information


export default class extends React.Component {

    constructor(props){
        super(props);
        this.state = {index: -1};
    }

    render() {

        const RedText = ColoredText('red');
        const YellowText = ColoredTextLong('yellow');

        const {navigation} = this.props;
        const buttons = ['Lists', 'Grid', 'Checkboxes'];

        const onPress = index => {
            console.log(index);
            navigation.navigate(buttons[index]);
            this.setState({index})
        }

        return (
            <View style={{flex:1}}>

                <YellowText>Hello</YellowText>
                <RedText>Hello</RedText>
                <YellowText>Hello</YellowText>
                <RedText>Hello</RedText>

                <ButtonGroup
                    onPress={onPress}
                    selectedIndex={this.state.index}
                    buttons={buttons}
                    containerStyle={{height: 100}} />
            </View>
        );
    }
}

