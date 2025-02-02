import { StyledContainer } from "./styles";
import {ContainerProps} from "../../types.ts";


export default function FooterInfos( { children, title }: ContainerProps) {
    return (
        <StyledContainer >
            <h3>{title}</h3>
            {children}
        </StyledContainer>
    )
}

