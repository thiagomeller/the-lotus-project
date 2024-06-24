import * as React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View, Text } from "react-native";

import BackIcon from "../../assets/back.svg";
import CartIcon from "../../assets/cart.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import IconButton from "../../components/IconButton";
import QuantityChangeButton from "../../components/QuantityChangeButton";
import { FontBold } from "../../styles/fonts";
import { theme } from "../../styles/theme";
import * as S from "./styles";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import { IProducts } from "../../@types/types";


const Product = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {cartListItems, setCartListItems} = useCartContext(); 
  const params = route.params as IProducts;

  return (
    <CustomSafeAreaView>
      <S.Header>
        <IconButton
          icon={<BackIcon color={theme.colors.white} />}
          onPress={() => navigation.goBack()}
          backgroundColor={theme.colors.black}
        />
        <IconButton
          icon={<CartIcon color={theme.colors.black} />}
          onPress={() => {
            navigation.navigate("Cart");
          }}
          backgroundColor={theme.colors.white}
        />
      </S.Header>
      <S.Image
        source={{
          uri: params.image,
        }}
      />

      <S.Card>
        <View>
          <FontBold>{params.title}</FontBold>
          <S.Text>{params.subtitle}</S.Text>
        </View>
        <FontBold style={{ marginTop: 16 }}>Descrição</FontBold>
        <S.Text>
          {`\u2022 ${params.description}`}
        </S.Text>
        </S.Card>

      <S.Footer>
        <View>
          <S.Text>Preço</S.Text>
          <FontBold>R${params.value}</FontBold>
        </View>
        <S.FooterButton onPress={() => setCartListItems( [...cartListItems, params] )}>
          <FontBold style={{color: theme.colors.white}}>Adicionar</FontBold>
          <CartIcon color={theme.colors.white}/>
        </S.FooterButton>
      </S.Footer>
    </CustomSafeAreaView>
  );
};

export default Product;
