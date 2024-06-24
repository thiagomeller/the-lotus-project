import styled from "styled-components/native";
import { FontBold, FontMedium } from '../../styles/fonts';
import { theme } from "../../styles/theme";

export const LogoWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  padding: 16px;
  justify-content: space-between; 
  flex: 1;
  align: "center";

`;

export const BannerList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 0, // Keep the space after the last item as is
  },
})`
  padding: 16px;
  margin-top: 10px;
`;

export const BannerImage = styled.Image`
  width: 300px;
  height: 150px;
  border-radius: 8px;
  margin-right: 16px;
  object-fit: cover;
`;


export const CardText = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  flex:1;
  
`;
export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
    flexGrow: 1,
    alignItems: "center"
  },
})`
`;

export const Title = styled(FontBold)`
  text-align: left;
  font-size: 24px;
  margin-left: 12px;
  margin-top: 16px;
  color: ${theme.colors.primaryPurple};
`

export const Title2 = styled(FontMedium)`
  text-align: left;
  font-size: 16px;
  margin-left: 12px;
  color: ${theme.colors.fontGray};
`

export const Subtitle = styled.Text`
  font-size: 14px;
  align-self: center;
  color: ${theme.colors.fontGray};
  overflow: hidden;
  flex: 1
`;

export const ProductCard = styled.TouchableOpacity`
  border-radius: 8px;
  width: 100%;
  margin-bottom: 16px;
  background-color: ${theme.colors.white};
  height: 250px;
`;



export const ItemImage = styled.Image`
  width: 100%;
  height: 30%;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
  background-color: ${theme.colors.lightGray};
`;



export const ProductTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
  color: ${theme.colors.primaryPurple};
  align-self: center;

`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  color: ${theme.colors.fontGray};
  align-self: center;
`;

export const AddToCartButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryPurple};
  border-radius:  0 0 8px 8px;
  padding: 8px;
  width: 100%;
`;
export const AddToCartButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 10px;
`;
