import * as React from "react";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database"

import LogoIcon from "../../assets/lotus-logo.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";

import { FontBold } from '../../styles/fonts';
import * as S from "./styles";
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

interface UserType {
  email: string
  password: string
}

const Login = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>()

  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  // const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {
  //   db().ref(`/users/${response.user.uid}`).set({ name })
  // }

  const handleSubmit = async ({ email, password }: UserType) => {
    // try {
    //   const response = await auth().createUserWithEmailAndPassword(email, password)

    //   if (response.user) {
    //     await createProfile(response)

    //     nav.replace("Home")
    //   }
    // } catch (e) {
    //   Alert.alert("Opa!", "Por favor, confira suas credenciais e tente novamente.")
    // }
  }

  return (
    <CustomSafeAreaView>
      <S.LogoWrapper>
        <LogoIcon />
      </S.LogoWrapper>

      <S.Container>
        <S.Title>Seja bem vindo!</S.Title>
        <S.Input value={email} onChangeText={setEmail} placeholder='Email'/>

        <S.Input secureTextEntry value={password} onChangeText={setPassword} placeholder='Senha' />

        <S.SubmitButton onPress={() => handleSubmit({ email, password })}>
          <FontBold>
            Acessar
          </FontBold>
        </S.SubmitButton>

        <S.RegisterButton onPress={() => nav.replace("Register")}>
          <FontBold>
            Cadastrar
          </FontBold>
        </S.RegisterButton>
      </S.Container>
    </CustomSafeAreaView>
  );
};

export default Login;
