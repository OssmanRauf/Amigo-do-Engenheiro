import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, TextInput, Text} from 'react-native';
import {convertBase} from 'simple-base-converter';
// import { resetState } from 'jest-circus';
export default function NumericConvertion({colors}) {
  const [selectedOriginalBase, setSelectedOriginalBase] = useState('10');
  const [selectedNewBase, setSelectedNewBase] = useState('2');

  const [number, setNumber] = useState();
  const [convertedNumber, setConvertedNumber] = useState();

  const convertNumber = nr => {
    try {
      if (!!nr) {
        setConvertedNumber(
          convertBase(
            nr,
            parseInt(selectedOriginalBase),
            parseInt(selectedNewBase),
          ),
        );
      } else {
        setConvertedNumber('');
      }
    } catch (error) {
      setConvertedNumber('Erro');
    }
  };
  const resetState = () => {
    setConvertedNumber('');
    setNumber();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bgColor,
        alignItems: 'center',
      }}>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Picker
          style={{
            width: '40%',
            color: colors.textColor,
            backgroundColor: colors.tabBar,
            fontSize: 15,
            fontWeight: '700',
            borderRadius: 4,
          }}
          dropdownIconColor={colors.textColor}
          selectedValue={selectedOriginalBase}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedOriginalBase(itemValue);
            resetState();
          }}>
          <Picker.Item label="Base 10" value="10" />
          <Picker.Item label="Base 2" value="02" />
          <Picker.Item label="Base 8" value="08" />
          <Picker.Item label="Base 16" value="16" />
        </Picker>
        <Text
          style={{
            color: colors.textColor,
            fontSize: 20,
            fontWeight: '700',
          }}>
          Para
        </Text>
        <Picker
          style={{
            width: '40%',
            color: colors.textColor,
            backgroundColor: colors.tabBar,
            fontSize: 15,
            fontWeight: '700',
            borderRadius: 4,
          }}
          dropdownIconColor={colors.textColor}
          selectedValue={selectedNewBase}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedNewBase(itemValue);
            resetState();
          }}>
          <Picker.Item label="Base 2" value="2" />
          <Picker.Item label="Base 10" value="10" />
          <Picker.Item label="Base 8" value="8" />
          <Picker.Item label="Base 16" value="16" />
        </Picker>
      </View>
      <TextInput
        placeholder="Digite um numero para converter"
        placeholderTextColor={colors.placeHolderTextColor}
        keyboardType="decimal-pad"
        style={{
          width: '80%',
          marginTop: 25,
          padding: 10,
          fontSize: 18,
          borderRadius: 4,
          borderWidth: 2,
          color: colors.textColor,
          borderColor: colors.textColor,
          fontWeight: '600',
        }}
        multiline={true}
        defaultValue={number}
        onChangeText={nr => {
          setNumber(nr);
          convertNumber(nr);
        }}
      />

      <TextInput
        style={{
          width: '80%',
          marginTop: 25,
          padding: 10,
          fontSize: 18,
          borderRadius: 4,
          borderWidth: 2,
          color: colors.textColor,
          borderColor: colors.textColor,
          fontWeight: '600',
          height: 100,
        }}
        editable={true}
        multiline={true}
        defaultValue={convertedNumber}
      />
    </View>
  );
}
