import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import * as React from "react";

import LogoIcon from "../../assets/lotus-logo.svg";
import PlusIcon from "../../assets/plus.svg";
import ProfileIcon from "../../assets/profile.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import { FontBold } from "../../styles/fonts";
import { theme } from "../../styles/theme";
import * as S from "./styles";

const Profile = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: "01",
      title: "Produto 01",
      subtitle: "Ut tincidunt tincidunt erat.",
      imgUrl:
        "https://dhhim4ltzu1pj.cloudfront.net/media/images/arc_coverimg_02.2e16d0ba.fill-1200x630.jpg",
    },
    {
      id: "02",
      title: "Produto 02",
      subtitle: "Aenean ut eros et nisl.",
      imgUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5zwVTXTu3NMRF2mmhJ0yNrSnPdVnVRC3ZxwUziNV8J2v44cnKbT7iRYG6NTIGC2Nvh4aWNKuvizcSzjM4vom70UTeLM5KtmMuu7VzDTlkZYXxgR1y9ukPUrgk6Wzubnl4rOvxT6rthyphenhyphenk/s640/Teysa-Orzhov-Scion.jpg",
    },
    {
      id: "03",
      title: "Produto 03",
      subtitle: "Phasellus ullamcorper ipsum.",
      imgUrl:
        "https://dhhim4ltzu1pj.cloudfront.net/media/images/arc_coverimg_02.2e16d0ba.fill-1200x630.jpg",
    },
    {
      id: "04",
      title: "Produto 04",
      subtitle: "Phasellus ullamcorper ipsum.",
      imgUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5zwVTXTu3NMRF2mmhJ0yNrSnPdVnVRC3ZxwUziNV8J2v44cnKbT7iRYG6NTIGC2Nvh4aWNKuvizcSzjM4vom70UTeLM5KtmMuu7VzDTlkZYXxgR1y9ukPUrgk6Wzubnl4rOvxT6rthyphenhyphenk/s640/Teysa-Orzhov-Scion.jpg",
    },
  ];

  return (
    <CustomSafeAreaView>
      <S.Container>
        <S.LogoWrapper>
          <LogoIcon />
        </S.LogoWrapper>
        <S.ProfileIconWrapper>
          <ProfileIcon width={48} height={48} />
        </S.ProfileIconWrapper>

        <S.ProfileInfo>
          <FontBold>Nome</FontBold>
          <Text>Nome da silva</Text>
        </S.ProfileInfo>

        <S.ProfileInfo>
          <FontBold>Telefone</FontBold>
          <Text>(48) 99999-9999</Text>
        </S.ProfileInfo>

        <S.ProfileInfo>
          <FontBold>Email</FontBold>
          <Text>nomedasilva@gmail.com</Text>
        </S.ProfileInfo>

        <FontBold style={{ marginTop: 16 }}>Produtos cadastados:</FontBold>

        <ScrollView horizontal={true}>
          {data.map((data) => (
            <S.ProductCard
              style={{ elevation: 2 }}
              key={data.id}
              onPress={() => navigation.navigate("Product")}
            >
              <S.ItemImage
                source={{
                  uri: data.imgUrl,
                }}
              />
              <View style={{ padding: 8 }}>
                <FontBold>{data.title}</FontBold>
                <Text>{data.subtitle}</Text>
              </View>
            </S.ProductCard>
          ))}
        </ScrollView>

        <S.Button onPress={() => navigation.navigate("NewProduct")}>
          <FontBold style={{ color: theme.colors.white }}>
            Novo Produto
          </FontBold>
          <PlusIcon color={theme.colors.white} />
        </S.Button>
      </S.Container>
    </CustomSafeAreaView>
  );
};

export default Profile;
