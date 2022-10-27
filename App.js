import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './screens/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();
const App = () => {
  const [darkTheme, setDarkTheme] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('darkTheme');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify({darkTheme: value});
      await AsyncStorage.setItem('darkTheme', jsonValue);
      console.log('data set', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const fetchData = async () => {
    const dataStorage = await getData();
    setDarkTheme(dataStorage.darkTheme);
  };
  const darkThemeToggle = () => {
    storeData(!darkTheme);
    setDarkTheme(prevState => !prevState);
  };
  const colors = {
    bgColor: darkTheme ? '#21252d' : '#f9f9f9',
    textColor: darkTheme ? '#fff' : '#000',
    btnBgColor: darkTheme ? '#292d36' : '#f1f3f4',
    equalBtnBg: '#4285f4',
    clearBtnBg: darkTheme ? '#eb6161' : '#eb6161',
    numberBtnBg: darkTheme ? '#393e4a' : '#fff',
    otherBtnTextColor: darkTheme ? '#fff' : '#fff',
    tabBar: darkTheme ? '#292d36' : '#f1f3f4',
    placeHolderTextColor: darkTheme
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0, 0, 0, 0.7)',
    iconActive: 'rgba(66, 133, 244, 0.2)',
    advancedOptionsColor: '#4285f4',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
        }}>
        <Stack.Screen
          name="SplashScreen"
          children={() => <SplashScreen colors={colors} />}
        />
        <Stack.Screen
          name="MainNavigator"
          children={() => (
            <Navigation
              colors={colors}
              darkTheme={{darkTheme: darkTheme, setDarkTheme: darkThemeToggle}}
            />
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
