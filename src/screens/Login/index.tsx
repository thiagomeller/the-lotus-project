import * as React from "react";

import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import LogoIcon from "../../assets/lotus-logo.svg";
import CustomSafeAreaView from "../../components/CustomSafeAreaView";

import { FontBold } from '../../styles/fonts';
import * as S from "./styles";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { Alert } from 'react-native';

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

  const handleLogin = async ({ email, password }: UserType) => {
    if (email && password) {
      try {
        const response = await auth().signInWithEmailAndPassword(email, password)

        if (response.user) {
          nav.replace("HomeTab")
        }
      } catch (e) {
        Alert.alert("Opa!", "Por favor, confira suas credenciais e tente novamente.")
      }
    }
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

        <S.SubmitButton onPress={() => handleLogin({ email, password })}>
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
