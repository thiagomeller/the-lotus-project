import styled from "styled-components/native";
import { FontBold } from '../../styles/fonts';
import { theme } from '../../styles/theme';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 12px;
`;

export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled(FontBold)`
  font-size: 24px;
  color: ${theme.colors.primaryPurple};
`

export const Input = styled.TextInput`
  width: 250px;
  
  border: 1px solid black;
  border-radius: 8px;

  padding: 4px 8px;
`

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;

  width: 250px;

  border: 1px solid ${theme.colors.primaryPurple};
  border-radius: 8px;

  padding: 8px 24px;
`

export const LoginButton = styled.TouchableOpacity`
  align-items: center;

  width: 250px;

  border-radius: 8px;

  padding: 8px 24px;
`
