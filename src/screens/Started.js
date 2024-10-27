import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Started = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/onboarding.png')}
        style={styles.imgBack}
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.headTxt}>Easy Appointments</Text>
        <Text style={styles.description}>
          A scheduled meeting between a patient
        </Text>
        <Text style={styles.description}>
          and a doctor at a clinic, hospital
        </Text>
        <Text style={styles.description}>or other health facility</Text>
        <TouchableOpacity
          style={styles.startedBtn}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.startedTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Started;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imgBack: {
    height: '65%',
    width: '95%',
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'contain',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    height: '40%',
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 15,
  },
  headTxt: {
    color: '#1A998E',
    fontSize: 28,
    fontWeight: '700',
    alignSelf: 'center',
    paddingVertical: 15,
  },
  description: {
    fontSize: 18,
    color: '#838383',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  startedBtn: {
    width: '90%',
    height: 45,
    backgroundColor: '#1A998E',
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startedTxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'medium',
  },
});
