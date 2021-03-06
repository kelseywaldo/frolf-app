import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, style, autoCapitalize }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={[containerStyle, style]}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    flex: 1,
    borderColor: 'rgb(76,217,100)',
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    height: 45,
    borderRadius: 5,
  },
  labelStyle: {
    fontSize: 18,
    flex: 1
  },

  containerStyle: {
    height: 40,
    flex: 1,
  }
};

export { Input };
