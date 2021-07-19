// @flow
import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledBtn from '../StyledBtn';

const CarItem = (props) => {
   const { title, subTitle, subTitleCTA, image } = props;
   return (
      <View style={styles.carContainer}>
         <ImageBackground
            source={image}
            style={styles.image}
         />
         <View style={styles.titles}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>
               {subTitle}
               {' '}
               <Text style={styles.subTitleCTA}>{subTitleCTA}</Text>
            </Text>
         </View>
         <View style={styles.btnContainer}>
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

      </View>
   );
};

export default CarItem;