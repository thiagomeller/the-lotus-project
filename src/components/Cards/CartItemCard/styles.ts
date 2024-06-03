import styled from "styled-components/native";
import { theme } from "../../../styles/theme";
import { FontBold, FontRegular, FontSemiBold } from "../../../styles/fonts";

export const CartItemContainer = styled.View`
  margin: 2px;
  padding: 10px;
  border-radius: 13px;
  flex-direction: row;
  background-color: ${theme.colors.white};
`;

export const ItemImage = styled.Image`
  width: 80px;
  aspect-ratio: 1;
  border-radius: 16px;
`;

export const InfoContainer = styled.View`
  padding-left: 6px;
  flex: 1;
  justify-content: space-between;
`;

export const ItemTitle = styled(FontSemiBold)`
  font-size: 14px;
  line-height: 21px;
`;

export const ItemDescription = styled(FontRegular)`
  color: ${theme.colors.fontGray};
  font-size: 11px;
  line-height: 16px;
`;

export const ItemPrice = styled(FontBold)`
  font-size: 14px;
  line-height: 21px;
`;

