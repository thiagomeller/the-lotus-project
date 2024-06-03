import * as React from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import TrashIcon from "../../../assets/trashbin.svg";
import {
  CartItemContainer,
  InfoContainer,
  ItemDescription,
  ItemImage,
  ItemPrice,
  ItemTitle,
} from "./styles";
import IconButton from "../../IconButton";
import { theme } from "../../../styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import QuantityChangeButton from "../../QuantityChangeButton";

interface CartItemCardProps {
  imageUrl: string;
  itemTitle: string;
  itemDescription: string;
  itemPrice: string;
}

const CartItemCard = ({
  imageUrl,
  itemDescription,
  itemPrice,
  itemTitle,
}: CartItemCardProps) => {
  function renderRightActions() {
    return (
      <TouchableOpacity
        style={[
          {
            width: 50,
            flex: 1,
            position: `static`,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 13,
            backgroundColor: theme.colors.red,
          },
        ]}
      >
        <TrashIcon color={theme.colors.white} />
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <CartItemContainer style={{ elevation: 2 }}>
        <ItemImage
          source={{
            uri: imageUrl,
          }}
        />
        <InfoContainer>
          <View>
            <ItemTitle>{itemTitle}</ItemTitle>
            <ItemDescription>{itemDescription}</ItemDescription>
          </View>
          <ItemPrice>{itemPrice}</ItemPrice>
        </InfoContainer>
        <QuantityChangeButton />
      </CartItemContainer>
    </Swipeable>
  );
};

export default CartItemCard;
