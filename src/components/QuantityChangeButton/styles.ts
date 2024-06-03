import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const ChangeQuantityButton = styled.View`
  padding: 5px 12px;
  gap: 10px;
  background-color: ${theme.colors.lightGray};
  border-radius: 30px;
  height: 30px;
  flex-direction: row;
  position: absolute;
  right: 10px;
  bottom: 12px;
`;