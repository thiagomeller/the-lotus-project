import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import firebaseApp from '../../../firebaseConfig';
import auth from "@react-native-firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

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

  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imgBlob, setImgBlob] = useState<Blob>();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1
    });

    if (result.canceled) {
      return null
    };

    const img = await fetch(result.assets[0].uri);
    const bytes = await img.blob();

    setImgBlob(bytes);
  };

  const uploadImageAndGetURL = async (productId: number, currentUser: string) => {
    try {
      // firebaseApp, 'the-lotus-project-e3035.appspot.com'
      const storage = getStorage(firebaseApp, 'the-lotus-project-e3035.appspot.com');
      const storageRef = ref(storage, `/${currentUser}/${productId}`);
  
      if (imgBlob) {
        await uploadBytes(storageRef, imgBlob);
        const url = await getDownloadURL(storageRef);

        return url
      }
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  }
  
  const saveProduct = async ({title, subtitle, value, description }: ProductType, currentUser: string) => {
    const productId = Date.now();

    const url = await uploadImageAndGetURL(productId, currentUser);

    await db().ref(`/users/${currentUser}/products/${productId}`).set({
      title,
      subtitle,
      value,
      description,
      image: url
    });
    
    await db().ref(`/products/${productId}`).set({
      title,
      subtitle,
      value,
      description,
      image: url,
      user: currentUser
    });

  };

  const handleSubmit = async (product: ProductType) => {
    const currentUser = auth().currentUser;

    if (currentUser) {
      await saveProduct(product, currentUser.uid);
    };
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

        <S.ImageButton onPress={() => pickImage()}>
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
