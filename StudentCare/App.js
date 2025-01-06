import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

const appTitle = "UOV Student Care";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#70116d" },
            headerTitleStyle: { color: "#fff" },
            headerTitleAlign: "center",
          }}>
           <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: appTitle }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: appTitle }}
          /> 
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});