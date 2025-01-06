import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/uov_banner.png";
import React from "react";
import { Divider, Text } from "react-native-paper";

const CourseScreen = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.courseCard}>
          <Text variant="headlineMedium" style={styles.name}>
            Computer Science
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            Code: CS101 | Dept: Engineering
          </Text>

          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.courseInfoHeader}>
            Course Information
          </Text>
          <View style={styles.courseDetailsContainer}>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Code: alice.jhonson@gmail.com
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Department: 123456789
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Duration: Sri Lanka
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Description: dhjdsakjd aksdhas kjdhsajdh fhsdjfkshf
              shdfjskkjlkfclkd
            </Text>
          </View>

          <Divider style={styles.divider} bold={true} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>UOV © 2024</Text>
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
  courseCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 30,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 45,
    elevation: 5,
    marginTop: -25,
  },
  profileImage: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  subDetails: {
    fontSize: 17,
    marginTop: 10,
    textAlign: "center",
  },
  divider: {
    width: 300,
    height: 2,
    marginTop: 30,
  },
  courseInfoHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
  },
  courseDetailsContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  courseDetails: {
    fontSize: 14,
    lineHeight: 21,
  },
  footer: {
    backgroundColor: "#70116d",
    marginHorizontal: 15,
    position: "absolute",
    bottom: 0,
    paddingVertical: 8,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

export default CourseScreen;