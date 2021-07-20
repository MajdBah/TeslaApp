import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
   carContainer: {
      width: '100%',
      height: Dimensions.get("window").height,
   },
   titles: {
      width: '100%',
      marginTop: '30%',
      alignItems: 'center'
   },
   title: {
      fontSize: 40,
      fontWeight: '500'
   },
   subtitle: {
      fontSize: 16,
      color: '#5c5e62'
   },
   subTitleCTA: {
      textDecorationLine: 'underline',

   },
   image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
   },
   btnContainer: {
      position: 'absolute',
      bottom: 30,
      width: '100%'
   },

});

export default styles;