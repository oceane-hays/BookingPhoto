import styled from "styled-components";

export const StyledAboutme = styled.div`
    background-color: #040404;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 2rem 0 2rem 0; //top right bottom left
    
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

