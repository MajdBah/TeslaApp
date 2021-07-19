// @flow
import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledBtn from '../StyledBtn';

const CarItem = (props) => {
   return (
      <View style={styles.carContainer}>
         <ImageBackground
            source={require("../../assets/images/ModelX.jpeg")}
            style={styles.image}
         />
         <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle}>starting at $78,455</Text>
         </View>
         <StyledBtn
            type="primary"
            content={"Custom Order"}
            onPress={() => {
               console.warn("Custom Order");
            }} />
         <StyledBtn
            type="secondary"
            content={"Existing Inventory"}
            onPress={() => {
               console.warn("Existing Inventory");
            }} />
      </View>
   );
};

export default CarItem;