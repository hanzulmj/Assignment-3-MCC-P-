
import { View, Image, StyleSheet } from "react-native";
import React from "react";

import banner from "../assets/uov_banner.png";
import { Text } from "react-native-paper";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.image} resizeMode="contain" />
      <Text variant="headlineLarge" style={styles.title}>
        Student Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 350,
    borderRadius: 10,
    marginTop: -25,
  },
  title: {
    color: "black",
    textTransform: "uppercase",
  },
});

export default LoginScreen;
