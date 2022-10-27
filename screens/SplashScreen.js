import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text, Image} from 'react-native';

export default function SplashScreen({colors}) {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('MainNavigator');
  }, 2000);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bgColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          width: '80%',
          height: '50%',
          //   borderWidth: 1,
          //   borderColor: colors.textColor,
        }}
        source={require('../assests/logo.png')}
      />

      <Text
        style={{
          color: colors.textColor,
          fontSize: 25,
          fontWeight: '600',
        }}>
        Amigo do Engenheiro
      </Text>
    </View>
  );
}
