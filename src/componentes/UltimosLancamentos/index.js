import styled from 'styled-components'
import { Titulo } from '../Titulo/index.js';
import { livros } from './dadosUltimosLancamentos.js';
import CardRecomenda from '../CardRecomenda/index.js';
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    backgorund-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
        <Titulo 

        cor="#EB9B00" 
        tamanhoFonte="36px"

        >Últimos Lançamentos

        </Titulo>
        <NovosLivros>
        {livros.map( livro => (
            <img src={livro.src} alt={livro.nome}/>
        ))}
        </NovosLivros>
        <CardRecomenda
            titulo="Talvez você se interesse por..."
            subtitulo="Angular 11"
            descricao="Faça sua própria aplicação web com Angular 11"
            img={imagemLivro.src}
        />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;