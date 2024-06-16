import styled from "styled-components/native";

import { theme } from "../../styles/theme";

export const Header = styled.View`
  width: 100%;
  padding: 32px 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.Image`
  position: absolute;
  z-index: -9;
  width: 100%;
  aspect-ratio: 1;
`

export const Card = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 16px;
  border-radius: 16px 16px 0 0;
  margin-top: 212px;
`

export const Text = styled.Text`
  color:  ${theme.colors.fontGray};
`

export const Footer = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`

export const FooterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  background-color:  ${theme.colors.primaryPurple};
  color: white;
  border-radius: 50px;
  padding: 0 24px;
`