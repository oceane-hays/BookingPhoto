import styled from "styled-components";

export const StyledAboutme = styled.div`
    background-color: #252121;
    justify-content: center;

    padding: 2rem; //top right bottom left
    
    section {
        padding: 1rem 0 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    
    
    .photographe {
        border-radius: 10px;
        width: auto;
        height: 440px;
    }
    
    .aboutMe-text {
        width: 50%;
        padding: 1rem;
        border: 2px solid #d9d9d9;
        text-align: center;

        .aboutMe-title {
            color: #d9d9d9;
            font-size: 4rem;
            margin-bottom: 1rem;
            font-family: Eleanor,serif;
        }

        .aboutMe-description {
            color: #d9d9d9;
            font-size: 1rem;
            line-height: 1.6;
            font-family: "Adelle Sans Devanagari",serif;
        }
    }
`;


export const StyledPolicyDisplay = styled.div`
    padding: 60px 13px 0px 13px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-collapse: collapse;
    
    div {
        padding: 10px 13px 10px 13px;
        color: #d9d9d9;
        font-family: Eleanor,serif;
        border-right: 2px solid #d9d9d9;
        
        h2 {
            font-weight: bold;
            font-size: 2rem;
        }
        
        p span {
            color: red;
        }

        a {
            color: #d9d9d9;
            font-family: Eleanor, serif;
        }
    }
    
    .last-child {
        border-right: none;
    }
`

