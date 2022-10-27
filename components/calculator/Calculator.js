import React, {useState} from 'react';
import {View} from 'react-native';
import Display from './Display';
import ButtonsView from './ButtonsView';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
export default function Calculator({colors}) {
  const [exp, setExp] = useState([]);
  const [result, setResult] = useState('');
  const [isEqualed, setIsEqualed] = useState(false);
  // console.log(colors);
  return (
    <View style={{flex: 1, backgroundColor: colors.bgColor}}>
      <View style={{flex: 1}}>
        <Display
          colors={colors}
          expression={{exp: exp, setExp: setExp}}
          result={{res: result, setResult: setResult}}
          equaled={{isEqualed: isEqualed, setIsEqualed: setIsEqualed}}
        />
        <ButtonsView
          colors={colors}
          expression={{exp: exp, setExp: setExp}}
          result={{res: result, setResult: setResult}}
          equaled={{isEqualed: isEqualed, setIsEqualed: setIsEqualed}}
        />
      </View>
    </View>
  );
}
