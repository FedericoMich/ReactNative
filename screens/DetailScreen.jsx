import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Button,Image,  SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {TextInputs} from "../components/TextInput";
import {Logo} from "../components/Logo";



export const DetailScreen=({ navigation })=> {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <Logo/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        title="Vai alla login"
        onPress={() => navigation.navigate('Login')}
      />
      
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
