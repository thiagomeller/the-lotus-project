import styled from "styled-components/native";
import { FontBold } from "../../styles/fonts"

export const Header = styled.View`
  width: 100%;
  padding: 32px 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartTitle = styled(FontBold)`
  font-size: 18px;
  line-height: 27px;
`;

export const CartContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 16,
    gap: 16
  }
})``;