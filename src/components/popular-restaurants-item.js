import * as React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

export default function PopularRestaurantsItem(props) {
  const iconNames = [
    {name: 'food-drumstick-outline', title: 'Chicken'},
    {name: 'food-steak', title: 'Steak'},
    {name: 'food-apple-outline', title: 'Fruits'},
    {name: 'coffee-outline', title: 'Coffee'},
  ];

  const index = getRndInteger(0, iconNames.length - 1);

  return (
    <View style={styles.item}>
      <View style={styles.metadata_container}>
        <View style={styles.metadata}>
          <Title style={styles.title}>Seafood Pesto</Title>
          <View style={styles.rate}>
            <Icon name="star" color={colors.yellow} size={18} />
            <Icon name="star" color={colors.yellow} size={18} />
            <Icon name="star" color={colors.yellow} size={18} />
            <Icon name="star" color={colors.yellow} size={18} />
            <Icon name="star" color={colors.gray} size={18} />
            <Title style={styles.rate_title}>4.5</Title>
          </View>
          <View style={styles.restaurant_metadata}>
            <Icon name="silverware-variant" color={colors.gray} size={18} />
            <Title style={styles.rm_title}>Mexican</Title>
            <Icon
              name="alarm"
              style={{marginLeft: 5}}
              color={colors.gray}
              size={18}
            />
            <Title style={styles.rm_title}>20 mins</Title>
          </View>
        </View>
      </View>
    </View>
  );
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const styles = StyleSheet.create({
  item: {
    width: 200,
    height: 225,
    marginRight: 15,
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  metadata_container: {
    position: 'absolute',
    bottom: 15,
    left: 10,
    height: 100,
    width: 180,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  metadata: {
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate_title: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  restaurant_metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -5,
  },
  rm_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.gray,
  },
});
