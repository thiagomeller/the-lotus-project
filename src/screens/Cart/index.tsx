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
import { Linking, TextInput } from "react-native";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import { child, get, getDatabase, ref } from "firebase/database";

interface CartProps {}

const Cart = (props: CartProps) => {

  const [userInfo, setUserInfo] = React.useState<any>();
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

  const getUser = async () => {
    const dbRef = ref(getDatabase());

      get(child(dbRef, `users/${cartListItems[0]?.user}`))
        .then((snapshot) => {
          setUserInfo(snapshot.val());
        })
        .catch((error) => {
          console.error(error);
        });
  };
  

  React.useEffect(() => {
    getTotal();
    getUser();
  });

  const generateWhatsAppLink = () => {
    let whatsappLink = `https://wa.me/?text=$`;
    
    if(userInfo){
      const phoneNumber = `${ userInfo?.cellphone }`;
      const message = `Olá, ${userInfo.name}! Tenho interesse em comprar ${cartListItems.length} itens: ${cartListItems.map((item) => item.title).join(", ")}. O valor total é de R$${total.toFixed(2)}. Podemos combinar a entrega?`;
  
      const encodedMessage = encodeURIComponent(message);
      whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      
      
    }
    return whatsappLink;
    
  };





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
              onPress={() => {navigation.navigate("Product", item)}}
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
        <FinishButton onPress={
          cartListItems.length > 0 ?() => Linking.openURL(generateWhatsAppLink()) : () => {} 
          }>
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
