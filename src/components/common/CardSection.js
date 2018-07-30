import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return ( //Style can take an array - it's going to apply all styles from 0 index to the end (style override)
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };