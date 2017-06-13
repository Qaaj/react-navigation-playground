/**
 * Created by janjorissen on 12.06.17.
 */

import React from 'react';
import {View} from 'react-native';
import {Grid, Col, Row} from 'react-native-elements';

export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const getColor = () => "#"+((1<<24)*Math.random()|0).toString(16);

        return (
            <Grid>
                <Col containerStyle={{backgroundColor: getColor()}}/>
                <Col containerStyle={{backgroundColor: getColor()}}>
                    <Row containerStyle={{backgroundColor: getColor()}}/>
                    <Row containerStyle={{backgroundColor: getColor()}}/>
                </Col>
            </Grid>
        );
    }
}

