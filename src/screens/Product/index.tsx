import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text } from "react-native";

import BackIcon from "../../assets/back.svg";
import CartIcon from "../../assets/cart.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import IconButton from "../../components/IconButton";
import QuantityChangeButton from "../../components/QuantityChangeButton";
import { FontBold } from "../../styles/fonts";
import { theme } from "../../styles/theme";
import * as S from "./styles";

interface ProductProps {}

const Product = (props: ProductProps) => {
  const navigation = useNavigation();

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
          uri: "https://dhhim4ltzu1pj.cloudfront.net/media/images/arc_coverimg_02.2e16d0ba.fill-1200x630.jpg",
        }}
      />

      <S.Card>
        <View>
          <FontBold>Kano Red Rogue - F&B</FontBold>
          <S.Text>O Mago Vermelho</S.Text>
          <QuantityChangeButton />
        </View>
        <FontBold style={{ marginTop: 16 }}>Descrição</FontBold>
        <S.Text>
          {`\u2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
        </S.Text>
        <S.Text>
          {`\u2022 At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.`}
        </S.Text>
      </S.Card>

      <S.Footer>
        <View>
          <S.Text>Preço</S.Text>
          <FontBold>R$22.00</FontBold>
        </View>
        <S.FooterButton onPress={() => console.log('added to cart :)')}>
          <FontBold style={{color: theme.colors.white}}>Adicionar</FontBold>
          <CartIcon color={theme.colors.white}/>
        </S.FooterButton>
      </S.Footer>
    </CustomSafeAreaView>
  );
};

export default Product;
