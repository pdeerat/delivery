import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetFlatList } from '@gorhom/bottom-sheet';
import useFetch from '../../hooks/use-fetch';
import { Title } from 'react-native-paper';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardsBottomSheet = React.forwardRef((props, ref) => {
    const params = { endpoint: "cards", method: "GET", auth: true };
    const { status, data } = useFetch(params);
    const snapPoints = useMemo(() => ['50%'], []);

    const selectCard = (item) => {
        props.selectCard(item);
        ref.current?.dismiss()
    }

    const renderItem = useCallback(({ item }) => {
        return (
            <Pressable
                style={styles.list_item}
                android_ripple={{ color: colors.lightgray, borderless: false }}
                onPress={() => selectCard(item)}>
                <Icon style={styles.list_item_left_icon} name={"credit-card"} color={"gray"} size={21} />
                <Title style={styles.list_right_item_title}>
                    **** **** **** {item.number.slice(12, 16)}
                </Title>
                <Title numberOfLines={1} style={styles.list_right_item_subtitle}>
                    {item.expiry}, {item.cvv}
                </Title>
            </Pressable>
        )
    },
        []
    );

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={BottomSheetBackdrop}
        >
            <BottomSheetFlatList
                data={data}
                extraData={status}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
            />
        </BottomSheetModal>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 10
    },
    list_item: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    list_item_left_icon: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: colors.lightgray,
        marginRight: 10
    },
    list_right_item_title: {
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '100',
        letterSpacing: 0.75,
        marginRight: 5,
    },
    list_right_item_subtitle: {
        flex: 2.2,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '100',
        letterSpacing: 0.75,
        color: "gray",
        overflow: "hidden",
    },
})

export default CardsBottomSheet;