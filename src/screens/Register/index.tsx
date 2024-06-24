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
  name: string
  email: string
  password: string
  cellphone: string
}

const Register = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>()

  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [cellphone, setCellphone] = React.useState("")

  const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {
    db().ref(`/users/${response.user.uid}`).set({ name, cellphone })
  }

  const handleSubmit = async ({ name, email, password, cellphone }: UserType) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password)

      if (response.user) {
        await createProfile(response)

        nav.replace("Login")
      }
    } catch (e) {
      console.log(e)
      Alert.alert("Opa!", "Por favor, confira suas credenciais e tente novamente.")
    }
  }

  return (
    <CustomSafeAreaView>
      <S.LogoWrapper>
        <LogoIcon />
      </S.LogoWrapper>

      <S.Container>
        <S.Title>Se cadastre aqui!</S.Title>

        <S.Input value={name} onChangeText={setName} placeholder='Nome'/>
        <S.Input value={email} onChangeText={setEmail} placeholder='Email'/>
        <S.Input secureTextEntry value={password} onChangeText={setPassword} placeholder='Senha' />
        <S.Input value={cellphone} onChangeText={setCellphone} placeholder='Número de celular'/>

        <S.SubmitButton onPress={() => handleSubmit({ name, email, password, cellphone })}>
          <FontBold>
            Cadastrar
          </FontBold>
        </S.SubmitButton>

        <S.LoginButton onPress={() => nav.replace("Login")}>
          <FontBold>
            Voltar
          </FontBold>
        </S.LoginButton>
      </S.Container>
    </CustomSafeAreaView>
  );
};

export default Register;
