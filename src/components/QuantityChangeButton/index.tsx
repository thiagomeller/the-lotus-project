import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ChangeQuantityButton } from "./styles";

interface QuantityChangeButtonProps {
  quantity: number;
  setQuantity: (prev: (prev: number) => number) => void;
}

const QuantityChangeButton = ({
  quantity,
  setQuantity,
}: QuantityChangeButtonProps) => {
  return (
    <ChangeQuantityButton>
      <TouchableOpacity onPress={() => setQuantity((prev: number) => prev - 1)}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{quantity}</Text>
      <TouchableOpacity onPress={() => setQuantity((prev: number) => prev + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
    </ChangeQuantityButton>
  );
};

export default QuantityChangeButton;
