import * as React from "react";
import { IconButtonContainer } from "./styles";

interface IconButtonProps {
  icon: React.ReactNode;
  onPress: () => void;
  backgroundColor: string;
}

const IconButton = ({ icon, backgroundColor, onPress }: IconButtonProps) => {
  return (
    <IconButtonContainer backgroundColor={backgroundColor} onPress={onPress}>
      {icon}
    </IconButtonContainer>
  );
};

export default IconButton;
