import * as React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EstimatedDeliveryTime(props) {
    return (
        <View>
            <Title style={{ fontSize: 15, marginTop: 10 }}>Estimated Delivery Time</Title>
            <View style={styles.list_item}>
                <View style={styles.list_item_left_icon} >
                    <Icon name={"clock-outline"} color={"gray"} size={25} />
                </View>
                <View style={styles.list_right_item}>
                    <Title style={styles.list_right_item_title}>
                        {props.deliveryTime} minutes
                </Title>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    list_item: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    list_item_left_icon: {
        padding: 8,
        borderRadius: 10,
        borderColor: colors.lightgray,
        borderWidth: 2,
        backgroundColor: colors.transparent
    },
    list_right_item: {
        flex: 1,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15
    },
    list_right_item_title: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '100',
        letterSpacing: 0.75,
    },
    badge: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 7,
        height: 7,
        borderRadius: 99,
        backgroundColor: "red"
    }
});