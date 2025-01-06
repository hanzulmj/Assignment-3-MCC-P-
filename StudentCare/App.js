import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

const appTitle = "UOV Student Care";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#70116d" },
              headerTitleStyle: { color: "#fff" },
              headerTitleAlign: "center",
              headerTintColor: "#fff",
            }}
            initialRouteName="Home"
          >
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
      </PaperProvider>
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