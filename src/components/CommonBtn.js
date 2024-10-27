import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CommonBtn = ({w, h, txt, onClick, status}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={{alignSelf: 'center', marginTop: 10, marginBottom: 10}}>
      {status ? (
        <LinearGradient
          colors={['#1A998E', '#1A998E']}
          style={{
            height: h,
            width: w,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
            {txt}
          </Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#838383', '#838383']}
          style={{
            height: h,
            width: w,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            opacity:0.5
          }}>
          <Text style={{color: '#fff', fontSize: 12, fontWeight: '500'}}>
            {txt}
          </Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};

export default CommonBtn;
