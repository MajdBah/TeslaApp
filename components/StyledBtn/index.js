// @flow
import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';



const StyledBtn = (props) => {
   // const type = props.type;
   // const content = props.content;
   // const onPress = props.onPress;
   const { type, content, onPress } = props;
   const backgroundColor = type == 'primary' ? '#171A20cc' : '#FFFFFFA6';
   const textColor = type == 'primary' ? 'white' : 'a171a20';
   return (
      <View style={styles.container}>
         <Pressable
            style={[styles.btn, { backgroundColor: backgroundColor }]}
            onPress={() => onPress()}>
            <Text style={[styles.text, { color: textColor }]}>{content}</Text>
         </Pressable>
      </View >
   );
};

export default StyledBtn;