import React from 'react';
import {TouchableOpacity} from 'react-native';

import AppText from './AppText';

function CusttomButton({
  title,
  color = 'dodgerblue',
  backgroundColor = 'white',
  onPress,
  isDisable = false,
  textStyle,
}) {
  return (
    <TouchableOpacity
      disabled={isDisable}
      style={{
        width: '20%',
        height: 30,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <AppText style={[textStyle,{color, fontFamily: 'Arabic'}]}>{title}</AppText>
    </TouchableOpacity>
  );
}

export default CusttomButton;
