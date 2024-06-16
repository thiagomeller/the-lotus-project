import styled from "styled-components/native";

import { theme } from "../../styles/theme";

export const Container = styled.ScrollView`
  padding: 0 16px;
`

export const LogoWrapper = styled.View`
  align-items: center;
`;

export const ProfileIconWrapper = styled.View`
  border: 2px solid ${theme.colors.primaryPurple};
  align-items: center;
  justify-content: center;
  margin: 32px auto;
  width: 70px;
  height: 70px;
  border-radius: 50px;
`

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: ${theme.colors.primaryPurple};
  color: white;
  border-radius: 50px;
  padding: 8px 24px;
  margin: 16px 0 16px 0;
`

export const ProfileInfo = styled.View`
  flex-direction: row;
  gap: 40px;
  padding: 16px;
  border-bottom-color: ${theme.colors.fontGray2};
  border-bottom-width: 1px;
`

export const ProductCard = styled.TouchableOpacity`
  border-radius: 8px;
  margin: 4px 8px 8px 0;
  background-color: ${theme.colors.white};
  max-width: 150px;
`

export const ItemImage = styled.Image`
  width: 150px;
  aspect-ratio: 1;
  border-radius: 8px 8px 0 0;
`;