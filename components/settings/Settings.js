import React, {useEffect} from 'react';
import {View, Text, Switch} from 'react-native';

export default function Settings({colors, darkTheme}) {
  useEffect(() => {}, []);
  return (
    <View
      style={{
        backgroundColor: colors.bgColor,
        flex: 1,
      }}>
      <Text
        style={{
          alignSelf: 'center',
          color: colors.textColor,
          fontSize: 28,
          marginTop: 20,
          fontWeight: '700',
        }}>
        Definições
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 20,
          alignItems: 'baseline',
        }}>
        <Text
          style={{color: colors.textColor, fontSize: 20, fontWeight: '500'}}>
          Dark Theme
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={darkTheme.darkTheme ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={darkTheme.setDarkTheme}
          value={darkTheme.darkTheme}
        />
      </View>
    </View>
  );
}
