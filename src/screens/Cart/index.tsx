import * as React from "react";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import {
  ApplyButton,
  ApplyButtonText,
  CartContainer,
  CartTitle,
  Container,
  FinishButton,
  FinishButtonIcon,
  FinishButtonText,
  Header,
  PromotionalCodeInput,
  TotalFooter,
  TotalLabel,
  TotalValue,
} from "./styles";
import IconButton from "../../components/IconButton";
import BackIcon from "../../assets/back.svg";
import CartIcon from "../../assets/cart.svg";
import { theme } from "../../styles/theme";
import CartItemCard from "../../components/Cards/CartItemCard";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { useCartContext } from "../../context/CartContext/UseCartContext";

interface CartProps {}

const Cart = (props: CartProps) => {
  const navigation = useNavigation();

  const { cartListItems, setCartListItems } = useCartContext();

  const [total, setTotal] = React.useState(0);

  const getTotal = () => {
    if (cartListItems.length > 0) {
      const prices = cartListItems.map((product) => Number(product.value));
      const total = prices.reduce((acc, curr) => acc + curr);
      setTotal(Number(total));
    } else {
      setTotal(0);
    }
  };

  React.useEffect(() => {
    getTotal();
  });

  return (
    <CustomSafeAreaView>
      <Header>
        <IconButton
          icon={<BackIcon color={theme.colors.white} />}
          onPress={() => navigation.goBack()}
          backgroundColor={theme.colors.black}
        />
        <IconButton
          icon={<CartIcon color={theme.colors.black} />}
          onPress={() => {}}
          backgroundColor={theme.colors.white}
        />
      </Header>
      <Container>
        <CartContainer>
          <CartTitle>Minha Sacola</CartTitle>

          {cartListItems.map((item, index) => (
            <CartItemCard
              key={index}
              imageUrl={item.image}
              itemTitle={item.title}
              itemDescription={item.subtitle}
              itemPrice={item.value}
              onDelete={() =>
                setCartListItems(cartListItems.filter((_, i) => index != i))
              }
            />
          ))}

          {cartListItems.length > 0 && (
            <PromotionalCodeInput>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Código promocional"
                placeholderTextColor={theme.colors.fontGray2}
              />
              <ApplyButton>
                <ApplyButtonText>Aplicar</ApplyButtonText>
              </ApplyButton>
            </PromotionalCodeInput>
          )}
        </CartContainer>
        <TotalFooter>
          <TotalLabel>Total ({cartListItems.length} itens):</TotalLabel>
          <TotalValue>R${total.toFixed(2)}</TotalValue>
        </TotalFooter>
        <FinishButton>
          <FinishButtonText>Finalizar compra</FinishButtonText>
          <FinishButtonIcon>
            <BackIcon color={theme.colors.black} rotation={180} />
          </FinishButtonIcon>
        </FinishButton>
      </Container>
    </CustomSafeAreaView>
  );
};

export default Cart;
