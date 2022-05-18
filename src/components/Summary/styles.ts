import styled from "styled-components";



export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;
    
    div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text_title);

        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            svg{
                color: var(--green);
                width: 2rem;
                height: 2rem;
            }
        }
        
        &:nth-child(2){
            header{
                svg{
                    color: var(--red);
                }
            }
        }

        &:last-child{
            color: var(--shape);
            background-color: var(--green);
            header{
                svg{
                    color: var(--shape);
                }
            }
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }
`