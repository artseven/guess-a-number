import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
	TouchableNativeFeedback,
	Platform
} from "react-native";
import Colors from "../constants/colors";

const MainButton = props => {
  let ButtomComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtomComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}> 
      <ButtomComponent onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtomComponent>
    </View>
  );
};

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 25,
		overflow: 'hidden'
	},
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18
  }
});

export default MainButton;
