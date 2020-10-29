import * as React from 'react';
import { Appbar, Headline, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function AppBar(props) {
  const navigation = useNavigation();

  const _handleMore = () => console.log('Shown more');
  if (props.screenName == 'Checkout') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Content />
        <Appbar.Action
          icon="account-circle-outline"
          onPress={_handleMore}
          size={32}
        />
      </Appbar.Header>
    );
  } else if (props.screenName == 'RestaurantDetail') {
    return (
      <Appbar.Header style={styles.bar}>
        <Appbar.Action
          icon="chevron-left"
          onPress={() => navigation.goBack()}
          size={32}
          color={colors.white}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(220, 220, 220, 0.3)',
            borderRadius: 15
          }}
        />
        <Appbar.Content color={colors.white} />
        <Appbar.Action
          icon="heart"
          onPress={() => props.setFavorite(!props.favorite)}
          size={18}
          color={props.favorite ? colors.red : colors.white}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(220, 220, 220, 0.3)',
            borderRadius: 15
          }}
        />
      </Appbar.Header>
    );
  } else if (props.screenName == 'Delivery') {
    return (
      <View style={styles.delivery}>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={{ color: colors.gray, borderless: false }} style={styles.item}>
          <Icon name="chevron-left" color={colors.black} size={32} />
        </Pressable>
        <Title>Delivery Info</Title>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={{ color: colors.gray, borderless: false }} style={styles.item}>
          <Icon name="dots-vertical" color={colors.black} size={32} />
        </Pressable>
      </View>
    );
  } else if (props.screenName == 'Profile') {
    return (
      <View style={styles.delivery}>
        <Title style={styles.title}></Title>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={{ color: colors.gray, borderless: false }} style={styles.logout}>
          <Icon name="logout" color={"gray"} size={25} />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    height: 40,
    marginTop: 10,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  delivery: {
    height: 40,
    marginTop: 15,
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    borderRadius: 15
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 0.75,
  },
  subtitle: {
    fontSize: 24,
    lineHeight: 24,
    marginVertical: 0,
    letterSpacing: 0.6,
  },
  logout: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: colors.lightgray
  }
});
