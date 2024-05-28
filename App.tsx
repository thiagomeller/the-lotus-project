import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
