import { Image, StyleSheet, View } from "react-native";
import banner from "../assets/uov_banner.png";
import React from "react";

const ProfileScreen = () => {
  return (
    <>
      <View style={styles.bannerContainer}>
        <Image source={banner} style={styles.image} resizeMode="contain" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: "center",
  },
  image: {
    width: 350,
    borderRadius: 10,
    marginTop: -25,
  },
});

export default ProfileScreen;