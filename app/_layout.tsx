import { Stack } from "expo-router";

export default function RootLayout() {

  return (
    <Stack screenOptions={{statusBarStyle: "dark"}}>
      <Stack.Screen
        name="index"
        options={{
          title: "Hydrate Yourself 💧",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sleep_schedule"
        options={{
          title: "Your Sleep Schedule",
          headerShown: true,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "ghostwhite" },
          headerTitleStyle: { fontSize: 15, fontWeight: "400" },
        }}
      />
      <Stack.Screen
        name="about_you"
        options={{
          title: "About You",
          headerShown: true,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "ghostwhite" },
          headerTitleStyle: { fontSize: 15, fontWeight: "400" },
        }}
      />
      <Stack.Screen
        name="home"
        options={{
          title: "Hydration Level",
          headerShown: false,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "ghostwhite" },
          headerTitleStyle: { fontSize: 18, fontWeight: "500" },
        }}
      />
    </Stack>
  );
}
