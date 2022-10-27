import React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NumericConvertion from './NumericConvertion';
function ConversionsOptions({colors}) {
  const styles = StyleSheet.create({
    optionBtn: {
      alignItems: 'center',
      backgroundColor: colors.advancedOptionsColor,
      width: '80%',
      padding: 15,
      borderRadius: 8,
      margin: 20,
    },
    optionBtnText: {
      fontSize: 18,
      fontWeight: '500',
      color: colors.textColor,
    },
  });
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: colors.bgColor,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bgColor,
      }}>
      <Text
        style={{
          color: colors.textColor,
          fontSize: 28,
          marginTop: 20,
          fontWeight: '700',
        }}>
        Conversões
      </Text>
      <ScrollView
        style={{
          marginTop: 20,
          width: '100%',
          backgroundColor: colors.bgColor,
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => navigation.navigate('NumericConvertions')}>
          <Text style={styles.optionBtnText}>Conversões Bases Numericas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default function ConversionsNavigation({colors}) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: colors.textColor,
        },
        headerStyle: {
          backgroundColor: colors.tabBar,
        },
      }}>
      <Stack.Screen
        options={{headerShown: false, headerTintColor: colors.textColor}}
        name="ConvertionOptions"
        children={() => <ConversionsOptions colors={colors} />}
      />
      <Stack.Screen
        options={{
          headerTintColor: colors.textColor,
          title: 'Conversões Bases Numericas',
        }}
        name="NumericConvertions"
        children={() => <NumericConvertion colors={colors} />}
      />
    </Stack.Navigator>
  );
}
