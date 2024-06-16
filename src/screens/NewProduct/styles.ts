import styled from "styled-components/native";
import { theme } from "../../styles/theme";
import { FontBold } from '../../styles/fonts';

export const Container = styled.ScrollView`
  padding: 16px;
`

export const Header = styled.View`
  width: 100%;
  padding: 32px 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled(FontBold)`
  text-align: center;
  font-size: 16px;
  color: ${theme.colors.primaryPurple};
`

export const Input = styled.TextInput`
  border: 1px solid black;
  padding: 4px 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  /* background-color: ${theme.colors.lightGray} */
`

export const ImageButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color:  ${theme.colors.primaryPurple};
  color: white;
  width: 50%;
  border-radius: 50px;
  padding: 8px 24px;
`

export const SubmitButton = styled.TouchableOpacity`
  border: 1px solid ${theme.colors.primaryPurple};
  border-radius: 50px;
  padding: 8px 24px;
  align-items: center;
  margin-top: 32px;
`