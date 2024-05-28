import * as React from "react";
import { Text } from "react-native";

import LogoIcon from "../../assets/lotus-logo.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import { LogoWrapper } from "./styles";

interface ProductProps {}

const Product = (props: ProductProps) => {
  return (
    <CustomSafeAreaView>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Text>Product :)</Text>
    </CustomSafeAreaView>
  );
};

export default Product;
