import styled from 'styled-components'
import { Titulo } from '../Titulo/index.js';

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    max-width: 600px;
    padding: 26px 20px;
    justify-content: space-around;
    width: 100%;
`

const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    border: none;
    font-size: 16px;
    font-weight: 900;
    display: block;
    width: 150%;

    &:hover {
        cursor: pointer;
    }
`
const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
`

function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
    <Card>
        <div>
            <Titulo tamannhoFonte="16px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <Descricao>{descricao}</Descricao>
        </div>
        <div>
            <ImgLivro src={img} alt="Livro" />
            <Button>Ver mais</Button>
        </div>
    </Card>
    )
}

export default CardRecomenda;