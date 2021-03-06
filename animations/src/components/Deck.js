import React, { Component } from 'react';
import { View, PanResponder } from 'react-native';

export default class Deck extends Component {

    constructor(props) {
        super(props);

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                console.log(gesture);
            },
            onPanResponderRelease: () => {}
        });

        this.state = { panResponder };
    }

    renderCards() {
        return this.props.data.map(item => this.props.renderCard(item));
    }

    render() {
        return (
            <View {...this.state.panResponder.panHandlers}>
                {this.renderCards()}
            </View>
        );
    }
}

