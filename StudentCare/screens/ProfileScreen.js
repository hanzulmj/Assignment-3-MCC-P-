import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/uov_banner.png";
import React from "react";
import { Divider, Text } from "react-native-paper";

const ProfileScreen = ({ route }) => {
  const { student } = route.params;
  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.profileCard}>
          <Image
            source={student.profile_pic}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Text variant="headlineMedium" style={styles.name}>
            {student.name}
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            Age: {student.age} | Gender: {student.gender}
          </Text>

          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.contactHeader}>
            Contact Information
          </Text>
          <View style={styles.contactDetailsContainer}>
            <Text variant="bodySmall" style={styles.contactDetails}>
              Email: {student.email}
            </Text>
            <Text variant="bodySmall" style={styles.contactDetails}>
              Phone: {student.phone}
            </Text>
            <Text variant="bodySmall" style={styles.contactDetails}>
              Address: {student.address}
            </Text>
          </View>

          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.bilogicalHeader}>
            Biological Information
          </Text>
          <View style={styles.bilogicalDetailsContainer}>
            <Text variant="bodySmall" style={styles.bilogicalDetails}>
              Gender: {student.gender}
            </Text>
            <Text variant="bodySmall" style={styles.bilogicalDetails}>
              Age: {student.age}
            </Text>
            <Text variant="bodySmall" style={styles.bilogicalDetails}>
              Blood Group: {student.blood_group}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>UOV © 2024</Text>
        </View>
      </ScrollView>
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
  profileCard: {
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
  contactHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
  },
  contactDetailsContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  contactDetails: {
    fontSize: 14,
  },
  bilogicalHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
  },
  bilogicalDetailsContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  bilogicalDetails: {
    fontSize: 14,
  },
  footer: {
    backgroundColor: "#70116d",
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 8,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

export default ProfileScreen;