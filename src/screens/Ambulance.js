import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {TextInput} from 'react-native-gesture-handler';
import CommonBtn from '../components/CommonBtn';
import {Linking} from 'react-native';

const Ambulance = ({navigation}) => {
  const callAmbulance = () => {
    Linking.openURL('tel:108'); 
  };
  return (
    <View style={styles.container}>
      <Header
        icon={require('../images/icons/back.png')}
        title={'Call Ambulance'}
        onClick={() => {
          navigation.goBack();
        }}
      />
      <TextInput
        placeholder="Address"
        placeholderTextColor={'#838383'}
        style={styles.address}
      />
      <CommonBtn
        w={180}
        h={45}
        txt={'Call Now'}
        status={true}
        onClick={callAmbulance}
      />
    </View>
  );
};

export default Ambulance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    color: '#838383',
  },
});
