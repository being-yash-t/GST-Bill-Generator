import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Button, Text} from 'react-native-paper';

const HeaderButton: React.FC<{
  onPress: () => void;
  buttonText: string;
  textStyle: StyleProp<TextStyle>;
}> = ({onPress, buttonText, textStyle}) => {
  return (
    <Button style={{marginHorizontal: 4}} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </Button>
  );
};

export default HeaderButton;
