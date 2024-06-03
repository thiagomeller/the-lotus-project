import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const IconButtonContainer = styled.TouchableOpacity<{
  backgroundColor: string;
}>`
  background-color: ${({backgroundColor}) => backgroundColor};
  width: 35px;
  height: 35px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;