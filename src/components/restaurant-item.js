import * as React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Appbar, Paragraph, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppBar from './app-bar';

export default function RestaurantItem(props) {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ImageBackground
      source={{
        uri: props.image,
      }}
      blurRadius={3}
      style={styles.item}>
      <View>
        <AppBar screenName={route.name} />
        <View style={{ marginHorizontal: 10 }}>
          <Paragraph numberOfLines={1} style={{ fontSize: 14, color: "lightgray", maxWidth: '75%', overflow: 'hidden' }}>
            5678 Extra Rd. #123 San Francisco, CA 96120.
          </Paragraph>
          <Title style={{ marginTop: 5, fontSize: 24, fontWeight: 'bold', color: colors.white }}>
            Seafood Pesto
          </Title>
          <View style={styles.metadata}>
            <View style={styles.rate}>
              <Icon name="star" color={colors.yellow} size={18} />
              <Title style={styles.rate_title}>4.5 (1,852)</Title>
            </View>
            <View style={[styles.rate, { marginLeft: 15 }]}>
              <Icon name="clock" color={colors.gray} size={18} />
              <Title style={styles.rm_title}>20 mins</Title>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    // height: 215,
  },
  time_metadata: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 15,
    left: 10,
    padding: 10,
    borderRadius: 5,
  },
  metadata: {
    flexDirection: 'row',
  },
  title: {
    lineHeight: 13,
    fontSize: 14,
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.white
  },
  rm_title: {
    marginLeft: 5,
    fontSize: 14,
    color: colors.white
  },
});
