import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Calculator from '../components/calculator/Calculator';
import Main from '../components/advanced/Main';
import ConversionsOptions from '../components/conversions/ConversionsOptions';
import Settings from '../components/settings/Settings';
const Tab = createBottomTabNavigator();
export default function Navigation({colors, darkTheme}) {
  return (
    <Tab.Navigator
      options={{
        tabBarActiveTintColor: 'blue',
      }}
      screenOptions={{
        // tabBarActiveTintColor: 'blue',
        tabBarActiveBackgroundColor: colors.iconActive,
        tabBarLabelStyle: {
          fontWeight: '600',
          color: colors.textColor,
          fontSize: 13,
          borderRadius: 10,
        },
      }}>
      <Tab.Screen
        name="Calculadora"
        children={() => <Calculator colors={colors} />}
        options={{
          tabBarStyle: {
            backgroundColor: colors.tabBar,
          },
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="calculator" color={colors.textColor} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Avançado"
        children={() => <Main colors={colors} />}
        options={{
          tabBarStyle: {
            backgroundColor: colors.tabBar,
          },
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="function-variant"
              color={colors.textColor}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Conversões"
        children={() => <ConversionsOptions colors={colors} />}
        options={{
          tabBarStyle: {
            backgroundColor: colors.tabBar,
          },
          headerShown: false,
          tabBarIcon: () => (
            <AntIcon name="retweet" color={colors.textColor} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Definições"
        children={() => <Settings colors={colors} darkTheme={darkTheme} />}
        options={{
          tabBarStyle: {
            backgroundColor: colors.tabBar,
          },
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="settings" color={colors.textColor} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
