import * as React from 'react';
import { Text } from 'react-native';

export function NanumText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'nanum-gothic' }]} />;
}
