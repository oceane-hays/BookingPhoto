import styled from "styled-components";

export const StyledDiv = styled.div`
    position: relative;
    width: 100%;
    height: 950px;
    overflow: hidden;
    resize: block;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        h1, h2 {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            color: #D9D9D9;
            text-align: center;
            width: 100%;
            font-weight: bold;
        }

        h1 {
            font-family: Eleanor,serif;
            top: 30%;
            font-weight: 400;
            font-size: 4rem;
        }

        h2 {
            top: 50%;
            font-size: 2rem;
            font-weight: bold;
        }
    


    @media (max-width: 900px) {
        height: 40vh;

        h1 {
                font-size: 2.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }
    }
    
`