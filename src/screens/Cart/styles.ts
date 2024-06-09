import styled from "styled-components/native";
import { FontBold, FontSemiBold } from "../../styles/fonts"
import { theme } from "../../styles/theme";

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

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const CartContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    //paddingHorizontal: 16,
    gap: 16
  }
})``;

export const PromotionalCodeInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.promotionalGray};
  padding: 16px;
  border-radius: 10px;
`;

export const ApplyButton = styled.TouchableOpacity`
  padding: 10px 10px;
  border-radius: 7px;
  background-color: ${theme.colors.black};
`;

export const ApplyButtonText = styled(FontSemiBold)`
  font-size: 11px;
  line-height: 16px;
  color: ${theme.colors.white};
`;

export const TotalFooter = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalLabel = styled(FontSemiBold)`
  font-size: 14px;
  line-height: 29px;
  color: ${theme.colors.fontGray3};
`;

export const TotalValue = styled(FontSemiBold)`
font-size: 20px;
  line-height: 40px;
  color: ${theme.colors.black};
`;

export const FinishButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.primaryPurple};
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
`;

export const FinishButtonText = styled(FontSemiBold)`
  font-size: 16px;
  line-height: 30px;
  color: ${theme.colors.white};
`;

export const FinishButtonIcon = styled.View`
  background-color: ${theme.colors.white};
  width: 30px;
  height: 30px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;