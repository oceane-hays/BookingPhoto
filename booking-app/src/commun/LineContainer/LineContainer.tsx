import {StyledLineContainer} from "./styles.ts";
import {LineContainerProps} from "../../types.ts";

export default function LineContainer({children} : LineContainerProps) {
    return (
        <StyledLineContainer>{children}</StyledLineContainer>
    )
}