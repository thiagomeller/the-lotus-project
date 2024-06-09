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

interface CartProps {}

const Cart = (props: CartProps) => {
  const navigation = useNavigation();

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

          <CartItemCard
            imageUrl="https://dhhim4ltzu1pj.cloudfront.net/media/images/arc_coverimg_02.2e16d0ba.fill-1200x630.jpg"
            itemTitle="Kano Red Rogue - F&B"
            itemDescription="O mago vermelho"
            itemPrice="R$200,00"
          />

          <CartItemCard
            imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5zwVTXTu3NMRF2mmhJ0yNrSnPdVnVRC3ZxwUziNV8J2v44cnKbT7iRYG6NTIGC2Nvh4aWNKuvizcSzjM4vom70UTeLM5KtmMuu7VzDTlkZYXxgR1y9ukPUrgk6Wzubnl4rOvxT6rthyphenhyphenk/s640/Teysa-Orzhov-Scion.jpg"
            itemTitle="Deck Orzhov - Magic"
            itemDescription="Deck Orzhov preto e branco"
            itemPrice="R$245.00"
          />
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
        </CartContainer>
        <TotalFooter>
          <TotalLabel>Total (3 itens):</TotalLabel>
          <TotalValue>R$ 445.00</TotalValue>
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
