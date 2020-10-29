import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './src/constants/colors';

import HomeStackNavigator from './src/navigation/home-stack-navigator';
import SearchStackNavigator from './src/navigation/search-stack-navigator';
import ProfileStackNavigator from './src/navigation/profile-stack-navigator';
import CartStackNavigator from './src/navigation/cart-stack-navigator';
import { View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          inactiveTintColor: colors.gray,
          activeTintColor: colors.yellow,
          style: {
            height: 60,
            backgroundColor: colors.black,
            borderTopWidth: 0,
            elevation: 0,
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="silverware-fork-knife" color={color} size={size} />
            ),
          }}
          component={HomeStackNavigator}
        />
        <Tab.Screen
          name="SearchStack"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="magnify" color={color} size={size} />
            ),
          }}
          component={SearchStackNavigator}
        />
        <Tab.Screen
          name="CartStack"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart" color={color} size={size} />
            ),
          }}
          component={CartStackNavigator}
        />
        <Tab.Screen
          name="ProfileStack"
          options={{
            tabBarIcon: ({ color, size }) => (
              <View>
                <Icon name="account" color={color} size={size} />
                {/* <View style={styles.badge}></View> */}
              </View>
            ),
          }}
          component={ProfileStackNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: "red"
  }
})