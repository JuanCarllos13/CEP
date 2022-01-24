import styled, {keyframes} from "styled-components";


export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(45deg, #000F5A, #0A90CD);
`

const H1cep = keyframes`
    from{
        transform: rotateX(90deg);
    }
    to{
        transform: rotateX(0deg);
    }
`



export const H1 = styled.h1`
    font-size: 85px;
    color: white;
    animation: ${H1cep} 2s;

    @media(max-width: 620px){
        font-size: 60px;
    }

`

export const ContainerInput = styled.div`
    background-color: rgba(255,255,255,0.2);
    padding: 15px;
    margin: 34px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0,0,0,0.5);

    input{
        background: transparent;
        border: 0;
        font-size: 20px;
        color: white;
        outline: none;
        margin-right: 8px;

        ::placeholder{
            color: white;
        }

    }

    button{
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
    }
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 500px;
    border-radius: 8px;
    
    
    @media(max-width: 620px){
        width: 80%;
        min-height: 250px;
    }
`

export const H2 = styled.h2`
    margin: 16px 0;
    font-size: 39px;
    

    @media(max-width: 620px){
        font-size: 28px;
    }
    
`


export const Span = styled.span`
    margin-bottom: 16px;
    font-weight: bold;

`
