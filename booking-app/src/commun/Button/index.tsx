import { StyledButton } from "./styles";
import {ButtonProps} from "../../types.ts";


export const Button = ({ color, children, onClick }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick}>
    {children}
  </StyledButton>
);
