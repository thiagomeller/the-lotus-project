import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

import LogoIcon from "../../assets/lotus-logo.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import { LogoWrapper } from "./styles";

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <CustomSafeAreaView>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Text>Cart</Text>
    </CustomSafeAreaView>
  );
};

export default Cart;
