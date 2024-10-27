import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
// import {Image} from 'react-native-reanimated/lib/typescript/Animated';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Started');
    }, 3000);
    return () => clearTimeout();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/medicalLogo1.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Appointo</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A998E',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800',
    marginTop: 5,
    // fontFamily: 'OleoScript-Bold',
  },
});
