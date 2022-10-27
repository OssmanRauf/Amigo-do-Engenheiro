import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import nerdamer from 'nerdamer/all';
import {derivative} from 'mathjs';
export default function Derivatives({colors}) {
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
      marginHorizontal: 25,
      textAlign: 'justify',
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
          placeholder="Escreva uma Função para X"
          placeholderTextColor={colors.placeHolderTextColor}
          style={Styles.inputForm}
          autoCapitalize="none"
          defaultValue={expression}
          onChangeText={ex => {
            setExpression(ex);
            setShowResult(false);
          }}
        />
        <TouchableOpacity style={Styles.btn}>
          <Text
            style={Styles.btnLabel}
            onPress={() => {
              const e = nerdamer(`diff(${expression},x)`);
              console.log(e.toString().includes('*'));

              console.log(e.toString());
              //   console.log(e.toString().replaceAll(g, ''));
              const resultString = e.toString();
              if (resultString.includes('*')) {
                const resultFormated = resultString.replace(/\*/g, '');
                console.log(resultFormated);
                setResult(resultFormated);
              } else {
                setResult(resultString);
              }

              setShowResult(true);
            }}>
            Derivar
          </Text>
        </TouchableOpacity>
      </View>
      {showResult && (
        <View style={{width: '100%'}}>
          <Text style={Styles.resultText}>A derrivada da função e:</Text>
          <Text style={Styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
}
