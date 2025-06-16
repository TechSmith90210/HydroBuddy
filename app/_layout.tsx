import Splash from "@/components/Splash";
import { getIsOnboarded } from "@/utils/storage/storage";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { SheetProvider } from "react-native-actions-sheet";
import "../utils/sheets/sheets";

export default function RootLayout() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    const checkIfOnboarded = () => {
      const isOnboarded = getIsOnboarded();

      if (isOnboarded === true) {
        // Defer the navigation
        setTimeout(() => {
          router.replace("/home");
        }, 0);
      }

      setReady(true);
    };

    checkIfOnboarded();
  }, []);

  if (!isReady) {
    // Optional: splash screen or loader
    return <Splash />;
  }

  return (
    <SheetProvider>
      <Stack screenOptions={{ statusBarStyle: "dark" }}>
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
    </SheetProvider>
  );
}
