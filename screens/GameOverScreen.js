import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../assets/summit.jpg")}
            // source={{uri: 'https://blog.strava.com/wp-content/uploads/2018/06/DSC02332-1.jpg'}}
            style={styles.image}
            // resizeMode="contain"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{" "}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageWrapper: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 40
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
