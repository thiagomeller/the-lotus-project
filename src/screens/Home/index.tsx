import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import LogoIcon from "../../assets/lotus-logo.svg";
import { LogoWrapper } from "./styles";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <CustomSafeAreaView>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Text>Home</Text>
    </CustomSafeAreaView>
  );
};

export default Home;
