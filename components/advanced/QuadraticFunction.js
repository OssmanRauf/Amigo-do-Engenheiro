import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import nerdamer from 'nerdamer/all';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {useState} from 'react';
export default function QuadraticFunction({colors}) {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const Styles = StyleSheet.create({
    btn: {
      backgroundColor: colors.advancedOptionsColor,
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    conteiner: {
      flex: 1,
      backgroundColor: colors.bgColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputForm: {
      //   backgroundColor: 'red',
      width: '80%',
      padding: 10,
      fontSize: 18,
      borderRadius: 4,
      borderWidth: 2,
      color: colors.textColor,
      borderColor: colors.textColor,
      fontWeight: '600',
    },
    resultText: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 30,
      color: colors.textColor,
    },
    btnLabel: {
      fontSize: 15,
      fontWeight: '600',
      color: colors.textColor,
    },
  });
  return (
    <View style={Styles.conteiner}>
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
        }}>
        <TextInput
          placeholder="Equação Quadratica"
          placeholderTextColor={colors.placeHolderTextColor}
          style={Styles.inputForm}
          defaultValue={expression}
          autoCapitalize="none"
          onChangeText={ex => {
            setExpression(ex);
            setShowResult(false);
          }}
        />
        <TouchableOpacity style={Styles.btn}>
          <Text
            style={Styles.btnLabel}
            onPress={() => {
              const e = nerdamer.solveEquations(expression);
              setResult(e.toString());
              setShowResult(true);
            }}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>
      {showResult && (
        <Text style={Styles.resultText}>X1 e X2 equivalem a: {result}</Text>
      )}
    </View>
  );
}
