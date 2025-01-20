import styled from "styled-components";

export const StyledDivision = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background-color 0.3s ease, color 0.3s ease;
    
    div.scrolled {
        background-color: #333;
        color: #fff;
    }
    
    p {
        font-family: Eleanor,serif;
        color: #D9D9D9;
        font-size: 16px;
        font-weight: 500;
    }
    
    div {
        
    }
`;