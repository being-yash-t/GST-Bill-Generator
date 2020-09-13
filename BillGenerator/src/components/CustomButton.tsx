import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Text, useTheme} from 'react-native-paper';

const CustomButton: React.FC<{text: string; onPress: () => void}> = ({
  text,
  onPress,
}) => {
  const colors = useTheme().colors;
  return (
    <View
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        margin: 16,
      }}>
      <RectButton
        style={{
          flex: 1,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Text style={{marginVertical: 16, color: 'white'}}>{text}</Text>
      </RectButton>
    </View>
  );
};

export default CustomButton;
