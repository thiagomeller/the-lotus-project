import * as React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import LogoIcon from "../../assets/lotus-logo.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import { Container,  LogoWrapper, ProductCard, ItemImage, AddToCartButton, AddToCartButtonText, ProductList, ProductTitle, ProductPrice, CardText, Subtitle, Title, BannerList,BannerImage, Title2  } from "./styles";
import { FontBold } from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../../components/IconButton";
import { theme } from "../../styles/theme";
import PlusIcon from "../../assets/plus.svg";
import { Card } from "@gluestack-ui/themed";
import db from "@react-native-firebase/database";
import { useCartContext } from "../../context/CartContext/UseCartContext";


interface HomeProps {}

const Home = (props: HomeProps) => {
  const navigation = useNavigation();
  const [products, setProducts] = React.useState<any[]>([]);
  const [banners, setBanner] = React.useState<any[]>([]);

  const {cartListItems, setCartListItems} = useCartContext();

  React.useEffect(() => {
    db().ref("banners").on("value", (snapshot) => {
      const data = snapshot.val();
      const banners = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          ...(value as object),
        };
      });
      setBanner(banners);
    });
    db().ref("products").on("value", (snapshot) => {
      const data = snapshot.val();
      const products = Object.entries(data).map(([key, value]) => {
        return {
          id: key,
          ...(value as object),
        };
      });
      setProducts(products);
    });
  }, []);
  

  const getProductById = (productId: string) => {
    return products.find((product) => product.id.toString() === productId.toString());
  };

  return (
    <CustomSafeAreaView>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Title>Bem Vindo!</Title>
      <Title2>Confira o catálogo</Title2>
      <View style={{ height: "30%" }}>
        <BannerList
          data={banners}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: { item: any }) => (
            <View style={{ elevation: 10 }}>
              <TouchableOpacity
                style={{ width: "100%", height: "100%" }}
                onPress={() => {
                  const product = getProductById(item.productId);
                  navigation.navigate("Product", product);
                }}
              >
                <BannerImage
                  source={{
                    uri: item.image,
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <Title>Novidades!</Title>

      <Container>
        <ProductList
          numColumns={2}
          data={products}
          keyExtractor={(item: any) => item.title}
          renderItem={({ item }: { item: any }) => (
            <View style={{ width: "45%" }}>
              <ProductCard style={{ elevation: 10 }} onPress={() => navigation.navigate("Product", item)}>
                <ItemImage
                  source={{
                    uri: item.image,
                  }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <CardText>
                  <Subtitle>{item.subtitle.length > 30 ? item.subtitle.substring(0, 30) + "..." : item.subtitle}</Subtitle>
                </CardText>
                <CardText>
                  <ProductPrice>R$ {parseFloat(item.value).toFixed(2)}</ProductPrice>
                </CardText>
                <AddToCartButton onPress={() => setCartListItems( [...cartListItems, item] )}>
                  <PlusIcon color={theme.colors.white} />
                </AddToCartButton>
              </ProductCard>
            </View>
          )}
        />
      </Container>
    </CustomSafeAreaView>
  );
};

export default Home;
