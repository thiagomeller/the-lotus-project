import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ChangeQuantityButton } from "./styles";

interface QuantityChangeButtonProps {}

const QuantityChangeButton = (props: QuantityChangeButtonProps) => {
  return (
    <ChangeQuantityButton>
      <TouchableOpacity>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>1</Text>
      <TouchableOpacity>
        <Text>+</Text>
      </TouchableOpacity>
    </ChangeQuantityButton>
  );
};

export default QuantityChangeButton;
