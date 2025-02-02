import styled from "styled-components";

export const StyledHeader = styled.header<{ scrolled: boolean }>`
    width: 100%;
    background-color: ${({ scrolled }) => (scrolled ? "#332d2d" : "transparent")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;

    .tab-bar {
        flex: 1;
        align-items: center;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

`

