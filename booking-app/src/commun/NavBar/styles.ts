import styled from "styled-components";

export const StyledDivision = styled.div<{ scrolled: boolean }>`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    
    li {
        font-family: Eleanor,serif;
        color: ${({ scrolled }) => (scrolled ? "#000" : "#d9d9d9")};;
        font-size: 16px;
        font-weight: 500;
        list-style-type: none;
    }

`;