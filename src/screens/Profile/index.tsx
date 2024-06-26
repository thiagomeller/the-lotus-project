import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";
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
  const [userInfo, setUserInfo] = useState<any>();
  const currentUser = auth().currentUser;

  const getProducts = async () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `users/${currentUser?.uid}`))
      .then((snapshot) => {
        setUserInfo(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  useFocusEffect (
    React.useCallback(() => {
      getProducts();
    }, [])
  )
  

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
          <Text>{userInfo?.name}</Text>
        </S.ProfileInfo>

        <S.ProfileInfo>
          <FontBold>Email</FontBold>
          <Text>{userInfo?.email}</Text>
        </S.ProfileInfo>
        <S.ProfileInfo>
          <FontBold>Telefone</FontBold>
          <Text>{userInfo?.cellphone}</Text>
        </S.ProfileInfo>
        <FontBold style={{ marginTop: 16 }}>Produtos cadastados:</FontBold>

        <ScrollView horizontal={true}>
          {userInfo?.products ? (
            Object.entries(userInfo?.products)?.map(
              ([key, value]: [any, any]) => (
                <S.ProductCard
                  style={{ elevation: 2 }}
                  key={key}
                  onPress={() => navigation.navigate("Product", value)}
                >
                  <S.ItemImage
                    source={{
                      uri: value.image,
                    }}
                  />
                  <View style={{ padding: 8 }}>
                    <FontBold>{value.title}</FontBold>
                    <Text>{value.subtitle}</Text>
                  </View>
                </S.ProductCard>
              )
            )
          ) : (
            <S.NoProductWarning>
              <Text style={{ color: theme.colors.fontGray2 }}>
                Nenhum produto cadastrado
              </Text>
            </S.NoProductWarning>
          )}
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
