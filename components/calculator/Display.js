import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

export default function Display({colors, expression, result}) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        padding: 5,
        flexShrink: 0,
        justifyContent: 'center',
        minHeight: 80,
      }}>
      <TextInput
        style={{
          color: colors.textColor,
          textAlign: 'right',
          alignItems: 'flex-start',
          fontSize: 30,
          minHeight: 100,
          maxHeight: 120,
          fontWeight: 'bold',
          marginTop: 'auto',
        }}
        multiline={true}
        textAlign="left"
        textAlignVertical="center"
        editable={false}
        value={expression.exp.join('')}
      />
      <Text
        style={{
          color: colors.textColor,
          fontSize: 32,
          textAlign: 'right',
          fontWeight: '900',
        }}>
        {result.res}
      </Text>
    </View>
  );
}
