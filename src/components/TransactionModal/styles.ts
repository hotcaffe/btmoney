import styled from "styled-components";
import {transparentize} from "polished"

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
};

const colors = {
    red: "#e52e4d",
    green: "#33cc95"
};

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    h2{
        color: var(--text_title);
        margin: 2rem 0;
    }
    input{
        margin-bottom: 1rem;
        height: 4rem;
        padding: 0 1.5rem;

        background-color: #E7E9EE;
        
        border: 1px solid #D7D7D7;
        border-radius: 0.25rem;
    }
    
    button[type="submit"]{
        margin: 1.5rem 0;
    }
`

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 2rem;
    font-size: 1rem;

    border: 1px solid #D7D7D7;
    border-radius: 0.25rem;

    background-color: ${props => props.isActive ? transparentize(0.9, colors[props.activeColor]) : "transparent"};

    svg{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 16px;

        &[type="deposit"]{
            color: var(--green);
        }

        &[type="withdraw"]{
            color: var(--red);
        }
    }
`