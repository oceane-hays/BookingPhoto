import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: #fff;
    position: relative;

    .image-container {
        position: relative;
        width: 100%;
        height: 1000px;
        overflow: hidden;

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
        }

        h1 {
            top: 30%;
            font-weight: 400;
            font-size: 4rem;
        }

        h2 {
            top: 50%;
            font-size: 2rem;
            font-weight: bold;
        }
    }

    .line-container {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        hr {
            border: 2px solid #000;
            width: 40%;
            border-radius: 5px;
            height: 0px;
        }
        img {
            height: 24px;
            width: 24px;
            vertical-align: middle;
        }
    }




    @media (max-width: 768px) {
        .image-container {
            height: 40vh;

            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.5rem;
            }
        }

        .line-container {
            bottom: 10px;

            p {
                width: 90%;
            }

            img {
                height: 20px;
                width: 20px;
            }
        }
    }
`;

