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


interface HomeProps {}

const Home = (props: HomeProps) => {
  const products = [ {
    description: "gruuuul",
    image:
      "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
    subtitle: "gruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuulgruuuul",
    title: "Deck Gruul1",
    value: "49",
    id: "1"
  },
  {
    description: "gruuuul",
    image:
      "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
    subtitle: "gruuuul",
    title: "Deck Gruul2",
    value: "49",
    id: "2",
  },
  {
    description: "gruuuul",
    image:
      "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
    subtitle: "gruuuul",
    title: "Deck Gruul3",
    value: "49",
    id: "3",
  },
  {
    description: "gruuuul",
    image:
      "https://firebasestorage.googleapis.com/v0/b/the-lotus-project-e3035.appspot.com/o/cKPweGrGaua6yXZrs8qIGgayI6i2%2F1719099204069?alt=media&token=d99619ba-e2ae-4d03-b315-e258a8e0bc1d",
    subtitle: "gruuuul",
    title: "Deck Gruul3",
    value: "49",
    id: "4",
  }
    // Add more products as needed
  ];
  const navigation = useNavigation();


  return (
    <CustomSafeAreaView>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Title>Bem Vindo!</Title>
      <Title2>Confira o catálogo</Title2>
      <View   style = {{height: "30%"}}>
          <BannerList
            data={products}
            keyExtractor={(item : any) => item.id}
            renderItem={({ item }: { item: any }) => (
              <TouchableOpacity  
                style={{ elevation: 5}}
                onPress={() => navigation.navigate("Product")}>
              <BannerImage
                source={{
                  uri: item.image,
                }}
              />
              </TouchableOpacity>
            )}
          />
     

      </View>
      
      <Title>Novidades!</Title>

      <Container>
        <ProductList
          numColumns={2}
          data={products}
          keyExtractor={(item : any) => item.title}
          renderItem={({ item }: { item: any }) => (
            <View style={{ width: "45%"}}>
              <ProductCard
                style={{ elevation: 10}}
              onPress={() => navigation.navigate("Product")}
            >
              <ItemImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductTitle>{item.title}</ProductTitle>
              <CardText >
                <Subtitle>{item.subtitle.length > 30 ? item.subtitle.substring(0, 30) + "..." : item.subtitle}</Subtitle>
              </CardText>
                <CardText >
              <ProductPrice>R$ {parseFloat(item.value).toFixed(2)}</ProductPrice>
              </CardText>
              <AddToCartButton>
                <PlusIcon color={theme.colors.white}/>
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
