import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Button,  SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {TextInputs} from "../components/TextInput";

export const LoginScreen=({ navigation }: {navigation: any})=> {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button
        title="Vai ai repos"
        onPress={() => navigation.navigate('ReposScreen')}
      />
      <Text>nome</Text>
      <TextInputs/>
      <Text>Cognome</Text>
      <TextInputs/>
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
