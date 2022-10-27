import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import QuadraticFunction from './QuadraticFunction';
import Derivatives from './Derivatives';
import Integrals from './Integrals';
import {useNavigation} from '@react-navigation/native';
import SystemEquations from './SystemEquations';
function AdvancedOptions({colors}) {
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
        flex: 1,
        width: '100%',
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
        Avançado
      </Text>
      <ScrollView
        style={{
          marginTop: 20,
          width: '100%',
        }}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => navigation.navigate('QuadraticFunctions')}>
          <Text style={styles.optionBtnText}>Funções Quadraticas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => navigation.navigate('LinearEquations')}>
          <Text style={styles.optionBtnText}>Sistema de Equações Lineares</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => navigation.navigate('Derivatives')}>
          <Text style={styles.optionBtnText}>Derivadas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionBtn}
          onPress={() => navigation.navigate('Integrals')}>
          <Text style={styles.optionBtnText}>Integrais</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    // <StackNavigation />
  );
}

export default function StackNavigation({colors}) {
  const Stack = createStackNavigator();
  return (
    // <NavigationContainer>
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
        // screenOptions={show
        options={{headerShown: false, headerTintColor: colors.textColor}}
        name="Home"
        children={() => <AdvancedOptions colors={colors} />}
      />
      <Stack.Screen
        options={{
          headerTintColor: colors.textColor,
          title: 'Funções Quadradas',
        }}
        name="QuadraticFunctions"
        children={() => <QuadraticFunction colors={colors} />}
      />
      <Stack.Screen
        options={{
          headerTintColor: colors.textColor,
          title: 'Sistema de Equações',
        }}
        name="LinearEquations"
        children={() => <SystemEquations colors={colors} />}
      />
      <Stack.Screen
        options={{
          headerTintColor: colors.textColor,
          title: 'Derivadas',
        }}
        name="Derivatives"
        children={() => <Derivatives colors={colors} />}
      />
      <Stack.Screen
        options={{
          headerTintColor: colors.textColor,
          title: 'Integrais',
        }}
        name="Integrals"
        children={() => <Integrals colors={colors} />}
      />
      {/* </Stack.Navigator> */}
    </Stack.Navigator>

    // </NavigationContainer>
  );
}
