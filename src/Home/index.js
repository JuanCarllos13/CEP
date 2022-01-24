import React, { useState } from "react";
import api from '../services/api'

import { FiSearch } from 'react-icons/fi'

import { Container, H1, ContainerInput, Main, H2, Span } from './styles'

function Home() {

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})


    async function search() {

        if (input === '') {
            alert("Digite algum CEP")
            return;
        }

        try {
            const { data } = await api.get(`${input}/json`)
            setCep(data)
            console.log(data)
            setInput('')

        } catch (err) {
            alert("Erro ao buscar o CEP")
            setInput('')

        }

    }

    return (
        <Container>

            <H1>Buscador CEP</H1>

            <ContainerInput>

                <input placeholder="Digite seu CEP" type={'text'} value={input}
                    onChange={(event) => setInput(event.target.value)} />

                <button onClick={search} > <FiSearch size={25} color="white" /> </button>


            </ContainerInput>


            {Object.keys(cep).length > 0 && (
                <Main>

                    <H2>CEP: {cep.cep}</H2>

                    <Span>{cep.logradouro}</Span>
                    <Span>Complemento:  {cep.complemento}</Span>
                    <Span>{cep.bairro}</Span>
                    <Span>{cep.localidade} - {cep.uf}</Span>


                </Main>

            )}


        </Container>
    )


}


export default Home