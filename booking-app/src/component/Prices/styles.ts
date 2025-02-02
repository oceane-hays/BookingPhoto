import styled from "styled-components";

export const StyledPrices = styled.div`
    background-color: #d9d9d9;
    padding: 0 2rem 2rem 2rem;
    
    h2 {
        color: #252121;
        font-size: 4rem;
        margin-bottom: 1rem;
        font-family: Eleanor,serif;
    }
`

export const StyledPricesCard = styled.div`
    display: grid;
    grid-template-columns: 1fr auto; /* Content on the left, button on the right */
    grid-template-rows: auto;
    border: 2px solid #252121;
    padding: 10px;
    margin: 1rem;
    color: #252121;
    border-radius: 10px;

    .content {
        display: grid;
        gap: 2px;
    }

    .button-container {
        display: flex;
        align-items: start;
    }

    button {
        background: gray;
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }

`
