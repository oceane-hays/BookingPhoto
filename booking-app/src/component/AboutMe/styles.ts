import styled from "styled-components";

export const StyledDivision = styled.div`
    background-color: #040404;
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    .aboutMe-image {
        width: 50%;
        position: relative;
        height: 600px;

        .background-image {
            position: absolute;
            width: 400px;
            height: 400px;
            object-fit: cover;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-75%, -50%);
        }

        .foreground-image {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-25%, -50%);
            width: 400px;
            height: 350px;
            z-index: 2;
        }
    }

    .aboutMe-text {
        width: 50%;
        padding: 5rem;

        .aboutMe-title {
            color: #d9d9d9;
            font-size: 4rem;
            margin-bottom: 1rem;
            
            span {
                border: 0.2rem solid #d9d9d9;
            }
        }

        .aboutMe-description {
            color: #d9d9d9;
            font-size: 1rem;
            line-height: 1.6;
        }
    }

    @media (max-width: 1400px) {
        flex-direction: column;

        .aboutMe-image,
        .aboutMe-text {
            width: 100%;
        }

        .aboutMe-image {
            height: 400px;
            margin-bottom: 2rem;
        }
    }
`;

