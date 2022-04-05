import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Button,Image,  SafeAreaView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {TextInputs} from "../components/TextInput";
import {Logo} from "../components/Logo";
import { SectionListBasics } from '../components/SectionList';



export const ReposScreen=({ navigation }: RootTabScreenProps<"ReposScreen">)=> {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repos</Text>
      <Logo/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SectionListBasics/>
      <Button
        title="Vai ai details"
        onPress={() => navigation.navigate('Detail')}
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
