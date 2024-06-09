import * as React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "../../styles/theme";

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
        flex: 1,
        backgroundColor: theme.colors.white,
      }}
    >
      {children}
    </View>
  );
};

export default CustomSafeAreaView;
