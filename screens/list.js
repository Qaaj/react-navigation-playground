/**
 * Created by janjorissen on 12.06.17.
 */

import React from 'react';
import {View} from 'react-native';
import {List, ListItem, ButtonGroup} from 'react-native-elements'

export default class extends React.Component {

    render() {

        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]

        const {navigation} = this.props;

        return (
            <View style={{flex:1}}>
            <List containerStyle={{marginBottom: 20}}>
                {
                    list.map((l, i) => (
                        <ListItem
                            roundAvatar
                            onPress={()=>navigation.navigate('Details',l)}
                            avatar={{uri: l.avatar_url}}
                            key={i}
                            title={l.name}
                        />
                    ))
                }
            </List>
            </View>
        );
    }
}

