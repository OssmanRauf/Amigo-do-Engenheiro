import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {create, all} from 'mathjs';

const Mathjs = create(all);

const ln = num => Math.log(num);
ln.transform = num => ln(num);
Mathjs.import({ln: ln});

export default function ButtonsView({colors, expression, result, equaled}) {
  const {exp, setExp} = expression;
  const {isEqualed, setIsEqualed} = equaled;
  const [inverted, setInverted] = useState(false);

  const numPressed = num => {
    if (isEqualed) {
      if (exp.join(0) === '0' && num === '.') {
        setExp([0, num]);
      } else {
        setExp([num]);
      }
    } else {
      if (exp.join('') === '' && num === '.') {
        setExp([0, num]);
      } else {
        setExp(prevState => [...prevState, num]);
      }
    }
    result.setResult('');
    // console.log(num);
    setIsEqualed(false);
  };
  const equalize = () => {
    let res = result;
    try {
      res = Mathjs.evaluate(exp.join(''));
      result.setResult(res);
      console.log(result.res);
    } catch (error) {
      console.log('hhh');
    }
    setIsEqualed(true);
  };
  const dellHandler = () => {
    setExp(prevState => prevState.slice(0, prevState.length - 1));
    result.setResult('');
  };
  const dellAllHandler = () => {
    setExp([]);
    result.setResult('');
  };
  const btnPressed = (btn, symbolShow = btn) => {
    console.log(isEqualed);
    if (isEqualed) {
      setExp([result.res, btn]);
    } else {
      setExp(prevState => [...prevState, btn]);
    }
    // console.log(Mathjs.evaluate('rad(90)'), 'hhh');
    result.setResult('');
    setIsEqualed(false);
  };
  const invert = () => {
    setInverted(prevState => !prevState);
  };

  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },

    btn: {
      flex: 1,
      backgroundColor: colors.btnBgColor,
      borderWidth: 2,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.bgColor,
    },
    btnText: {
      fontSize: 18,
      color: colors.textColor,
      fontWeight: '600',
    },
    equalBtn: {
      flex: 1,
      backgroundColor: colors.equalBtnBg,
      borderWidth: 2,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.bgColor,
    },
    clearBtn: {
      flex: 1,
      backgroundColor: colors.clearBtnBg,
      borderWidth: 2,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.bgColor,
    },
    numberBtn: {
      flex: 1,
      backgroundColor: colors.numberBtnBg,
      borderWidth: 2,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.bgColor,
    },
    equalBtnText: {
      fontSize: 18,
      color: colors.otherBtnTextColor,
      fontWeight: '600',
    },
    clearBtnText: {
      fontSize: 18,
      color: colors.otherBtnTextColor,
      fontWeight: '600',
    },
  });

  return (
    <View style={{flex: 3}}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPressIn={() => btnPressed('ln(')}>
          <Text style={styles.btnText}>ln</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPressIn={() => btnPressed('log(')}>
          <Text style={styles.btnText}>log</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => invert()}>
          <Text style={styles.btnText}>INV</Text>
        </TouchableOpacity>
      </View>

      {!inverted ? (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('sin(')}>
            <Text style={styles.btnText}>sin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => numPressed('cos(')}>
            <Text style={styles.btnText}>cos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => numPressed('tan(')}>
            <Text style={styles.btnText}>tan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => numPressed('pi')}>
            <Text style={styles.btnText}>π</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('asin(')}>
            <Text style={styles.btnText}>asin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => numPressed('acos(')}>
            <Text style={styles.btnText}>acos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => numPressed('tan(')}>
            <Text style={styles.btnText}>atan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => numPressed('pi')}>
            <Text style={styles.btnText}>π</Text>
          </TouchableOpacity>
        </View>
      )}
      {!inverted ? (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('sinh(')}>
            <Text style={styles.btnText}>sinh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('cosh(')}>
            <Text style={styles.btnText}>cosh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('tanh(')}>
            <Text style={styles.btnText}>tanh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('e')}>
            <Text style={styles.btnText}>e</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('asinh(')}>
            <Text style={styles.btnText}>asinh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('acosh(')}>
            <Text style={styles.btnText}>acosh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('tanh(')}>
            <Text style={styles.btnText}>atanh</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPressIn={() => btnPressed('e')}>
            <Text style={styles.btnText}>e</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPressIn={() => btnPressed('sqrt(')}>
          <Text style={styles.btnText}>√</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => numPressed('(')}>
          <Text style={styles.btnText}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => numPressed(')')}>
          <Text style={styles.btnText}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => btnPressed('!')}>
          <Text style={styles.btnText}>n!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => btnPressed('/')}>
          <Text style={styles.btnText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPressIn={() => btnPressed('cbrt(')}>
          <Text style={styles.btnText}>∛</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('7')}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('8')}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('9')}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => btnPressed('*')}>
          <Text style={styles.btnText}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPressIn={() => btnPressed('^')}>
          <Text style={styles.btnText}>^</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('4')}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('5')}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('6')}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => btnPressed('-')}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.clearBtn}
          onPressIn={() => dellHandler()}>
          <Text style={styles.clearBtnText}>dell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('1')}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('2')}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('3')}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => btnPressed('+')}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.clearBtn}
          onPressIn={() => dellAllHandler()}>
          <Text style={styles.clearBtnText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => numPressed('.')}>
          <Text style={styles.btnText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.numberBtn}
          onPressIn={() => numPressed('0')}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPressIn={() => btnPressed('%')}>
          <Text style={styles.btnText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.equalBtn} onPressIn={() => equalize()}>
          <Text style={styles.equalBtnText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
