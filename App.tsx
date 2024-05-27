import { View } from "react-native";
import Home from "./src/screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <Home />
        </View>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
}
