import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/uov_banner.png";
import React from "react";
import { Divider, Text } from "react-native-paper";

const SubjectsScreen = () => {
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
            3 Subjects | Average: 88
          </Text>

          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.marksInfoHeader}>
            Marks Information
          </Text>
          <View style={styles.markDetailsContainer}>
            <View style={styles.tableHeader}>
              <Text variant="bodySmall">Subject</Text>
              <Text variant="bodySmall">Marks</Text>
            </View>
            <Divider style={styles.secondDivider} bold={true} />

            <View>
              <View style={styles.tableData}>
                <Text variant="bodyMedium" style={styles.tdText}>
                  Data Structures
                </Text>
                <Text variant="bodyMedium" style={styles.tdText}>
                  85
                </Text>
              </View>
              <Divider style={styles.secondDivider} bold={true} />
            </View>
            <View>
              <View style={styles.tableData}>
                <Text variant="bodyMedium" style={styles.tdText}>
                  Data Structures
                </Text>
                <Text variant="bodyMedium" style={styles.tdText}>
                  85
                </Text>
              </View>
              <Divider style={styles.secondDivider} bold={true} />
            </View>
          </View>
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
  marksInfoHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
  },
  markDetailsContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  markDetails: {
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
  tableHeader: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    gap: 150,
  },
  secondDivider: {
    width: 300,
    height: 2,
    marginTop: 10,
    opacity: 0.35,
  },
  tableData: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  tdText: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
});

export default SubjectsScreen;