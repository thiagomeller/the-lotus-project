import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import db from "@react-native-firebase/database";

import BackIcon from "../../assets/back.svg";
import ImageIcon from "../../assets/image.svg";
import LogoIcon from "../../assets/lotus-logo.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";
import { LogoWrapper } from "./styles";
import { FontBold } from "../../styles/fonts";
import IconButton from "../../components/IconButton";
import { theme } from "../../styles/theme";
import * as S from "./styles";

interface ProductType {
  title: string
  subtitle: string
  value: string
  description: string
}

const NewProduct = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };

  const saveProduct = async ({title, subtitle, value, description }: ProductType) => {
    const productId = crypto.randomUUID()

    await db().ref(`/users/{}/products/${productId}`).set({
      title,
      subtitle,
      value,
      description
    })
  }

  const handleSubmit = async (product: ProductType) => {
    await saveProduct(product)
  };

  return (
    <CustomSafeAreaView>
      <S.Container>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <S.Header>
          <IconButton
            icon={<BackIcon color={theme.colors.white} />}
            onPress={() => navigation.goBack()}
            backgroundColor={theme.colors.black}
          />
        </S.Header>

        <S.Title style={{ textAlign: "center" }}>Novo Produto</S.Title>
        <FontBold>Título</FontBold>
        <S.Input value={title} onChangeText={setTitle} />

        <FontBold>Subtítulo</FontBold>
        <S.Input value={subtitle} maxLength={80} onChangeText={setSubtitle} />

        <FontBold>Valor</FontBold>
        <S.Input
          keyboardType="numeric"
          maxLength={10}
          value={value}
          onChangeText={setValue}
        />

        <FontBold>Descrição</FontBold>
        <S.Input
          multiline
          maxLength={1000}
          numberOfLines={5}
          value={description}
          onChangeText={setDescription}
        />

        <S.ImageButton onPress={pickImage}>
          <FontBold style={{ color: theme.colors.white }}>Imagens</FontBold>
          <ImageIcon color={theme.colors.white} />
        </S.ImageButton>

        <S.SubmitButton onPress={() => handleSubmit({ title, subtitle, value, description })}>
          <FontBold style={{ color: theme.colors.primaryPurple }}>
            Adicionar Produto
          </FontBold>
        </S.SubmitButton>
      </S.Container>
    </CustomSafeAreaView>
  );
};

export default NewProduct;
