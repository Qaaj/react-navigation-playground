/**
 * Created by janjorissen on 12.06.17.
 */

import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-elements';

export default class extends React.Component {


    constructor(props){
        super(props);
    }

    render() {

        const params = this.props.navigation.state.params;

        return (
            <View style={{flex:1}}>
                <Card
                    title={params.subtitle}
                    image={{uri: params.avatar_url}}>
                <Text style={{marginBottom: 10}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                </Card>
            </View>
        );
    }
}

//{"name":"Amy Farha","avatar_url":"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg","subtitle":"Vice President"}