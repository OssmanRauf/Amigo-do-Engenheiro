import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Picker,
  StyleSheet,
} from 'react-native';
import nerdamer from 'nerdamer/all';
import {fraction} from 'mathjs';

// const Mathjs = create(all);
export default function SystemEquations({colors}) {
  const [expression1, setExpression1] = useState('');
  const [expression2, setExpression2] = useState('');
  const [expression3, setExpression3] = useState('');
  const [expression4, setExpression4] = useState('');
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState(false);

  const ResultView = () => {
    if (error) {
      return (
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            marginTop: 5,
            color: colors.textColor,
          }}>
          ERRO
        </Text>
      );
    }
    if (showResult) {
      return (
        <View>
          <Text style={Styles.resultText}>As variaveis equivalem a:</Text>
          <View style={{width: '80%', marginTop: 10}}>
            {result.map(element => {
              return (
                <Text style={Styles.resultText}>
                  {element.variable} = {element.result}
                </Text>
              );
            })}
          </View>
        </View>
      );
    }
    return <View></View>;
  };

  const Styles = StyleSheet.create({
    conteinerView: {
      flex: 1,
      backgroundColor: colors.bgColor,
      alignItems: 'center',
    },
    titleText: {
      color: colors.textColor,
      fontSize: 20,
      margin: 20,
      alignSelf: 'center',
      fontWeight: '600',
    },
    inputForm: {
      width: '80%',
      padding: 10,
      fontSize: 18,
      borderRadius: 4,
      borderWidth: 2,
      color: colors.textColor,
      borderColor: colors.textColor,
      fontWeight: '600',
      marginVertical: 10,
    },
    submitBtn: {
      backgroundColor: colors.advancedOptionsColor,
      width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      borderRadius: 6,
      marginVertical: 10,
    },
    btnLabel: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.textColor,
    },
    resultText: {
      fontSize: 20,
      fontWeight: '700',
      marginTop: 5,
      color: colors.textColor,
    },
  });

  const pushResult = sol => {
    function isFloat(n) {
      return Number(n) === n && n % 1 !== 0;
    }
    const solution = [];
    for (let i = 0; i < sol.length; i++) {
      const element = sol[i];
      if (isFloat(element[1])) {
        const fract = fraction(element[1]);
        solution.push({
          key: i,
          variable: element[0],
          result: `${fract.n}/${fract.d}`,
        });
      } else {
        solution.push({
          key: i,
          variable: element[0],
          result: element[1],
        });
      }
    }
    return solution;
  };

  const handleSubmit = () => {
    const listOfEx = [expression1, expression2, expression3, expression4];
    const validEx = [];
    for (let i = 0; i < listOfEx.length; i++) {
      // const element = array[i];
      if (listOfEx[i] !== '') {
        validEx.push(listOfEx[i]);
      }
    }
    try {
      const sol = nerdamer.solveEquations(validEx);

      setResult(pushResult(sol));
      setShowResult(true);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <View style={Styles.conteinerView}>
      <Text style={Styles.titleText}>Escreva as equacoes:</Text>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="1ª Equação"
          placeholderTextColor={colors.placeHolderTextColor}
          style={Styles.inputForm}
          defaultValue={expression1}
          autoCapitalize="none"
          onChangeText={ex => {
            setExpression1(ex);
            setShowResult(false);
            setError(false);
          }}
        />
        <TextInput
          placeholder="2ª Equação"
          placeholderTextColor={colors.placeHolderTextColor}
          style={Styles.inputForm}
          autoCapitalize="none"
          defaultValue={expression2}
          onChangeText={ex => {
            setExpression2(ex);
            setShowResult(false);
            setError(false);
          }}
        />
        <TextInput
          placeholder="3ª Equação"
          placeholderTextColor={colors.placeHolderTextColor}
          style={Styles.inputForm}
          defaultValue={expression3}
          autoCapitalize="none"
          onChangeText={ex => {
            setExpression3(ex);
            setShowResult(false);
            setError(false);
          }}
        />
        <TextInput
          placeholder="4ª Equação"
          placeholderTextColor={colors.placeHolderTextColor}
          style={Styles.inputForm}
          autoCapitalize="none"
          defaultValue={expression4}
          onChangeText={ex => {
            setExpression4(ex);
            setShowResult(false);
            setError(false);
          }}
        />
      </View>
      <TouchableOpacity style={Styles.submitBtn}>
        <Text style={Styles.btnLabel} onPress={handleSubmit}>
          Calcular
        </Text>
      </TouchableOpacity>
      <ResultView />
    </View>
  );
}
