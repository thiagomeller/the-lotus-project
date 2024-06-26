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
import { theme } from "../../../styles/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import QuantityChangeButton from "../../QuantityChangeButton";

interface CartItemCardProps {
  imageUrl: string;
  itemTitle: string;
  itemDescription: string;
  itemPrice: string;
  onDelete: () => void;
  onPress: () => void;
}

const CartItemCard = ({
  imageUrl,
  itemDescription,
  itemPrice,
  itemTitle,
  onDelete,
  onPress,
}: CartItemCardProps) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = React.useState(1);

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
        onPress={onDelete}
      >
        <TrashIcon color={theme.colors.white} />
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <CartItemContainer style={{ elevation: 2 }}>
        <TouchableOpacity onPress={onPress}>
          <ItemImage
            source={{
              uri: imageUrl,
            }}
          />
        </TouchableOpacity>
        <InfoContainer>
          <View>
            <TouchableOpacity onPress={onPress}>
              <ItemTitle>{itemTitle}</ItemTitle>
            </TouchableOpacity>
            <ItemDescription>{itemDescription}</ItemDescription>
          </View>
          <ItemPrice>R${Number(itemPrice).toFixed(2)}</ItemPrice>
        </InfoContainer>
        <QuantityChangeButton quantity={quantity} setQuantity={setQuantity} />
      </CartItemContainer>
    </Swipeable>
  );
};

export default CartItemCard;
