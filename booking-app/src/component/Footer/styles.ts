import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #332d2d;
    
    .icon {
        padding: 16px 0px 0px 0px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    
    .copyright {
        background-color: #252121;
        padding: 20px;

        a {
            color: #d9d9d9;
            text-decoration: none;
            font-family: Eleanor, serif;
        }
    }

    .in-a-row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .in-a-row > * {
        flex: 1;
        text-align: center; /* Optional: Center text inside elements */
    }
    
`;

export const StyledContainer = styled.div`
    align-items: center;
    padding: 20px;
    
    h3 {
        color: #d9d9d9;
        font-family: Eleanor, serif;
    }
    
    p {
        color: #d9d9d9;
        font-family: Eleanor, serif;
    }
    
    ul li {
        color: #d9d9d9;
        font-family: Eleanor, serif;
        list-style-type: none;
        padding: 15px;

        a {
            color: #d9d9d9;
            text-decoration: none;
            font-family: Eleanor, serif;
        }
    }
`