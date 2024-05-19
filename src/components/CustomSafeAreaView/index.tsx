import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface CustomSafeAreaViewProps {
  children: React.ReactNode;
}

const CustomSafeAreaView = ({ children }: CustomSafeAreaViewProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
};

export default CustomSafeAreaView;
