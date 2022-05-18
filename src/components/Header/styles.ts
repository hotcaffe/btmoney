import styled from "styled-components";


export const Container = styled.header`
    background-color: var(--blue);

    div{
        max-width: 1020px;
        margin: 0 auto;

        padding: 2rem 1rem 10rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        span{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 9rem;
            font-size: 1.2rem;
            font-weight: bold;
            color: var(--shape);
            svg{
                width: 2.3rem;
                height: 2.3rem;
                padding: 0.3rem;
                background-color: var(--green);
                border-radius: 50%;
                color: var(--shape);
            }
        }

        button{
            border-radius: 0.25rem;
            background-color: var(--blue-light);
            color: var(--shape);
            padding: 0.75rem 1.5rem;
            border: 0;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.95);
            }
        }
    }
`