import logo from '../../imagens/logo.svg';
import style from 'styled-components';

const LogoContainer = style.div`
    display: flex;
    font-size: 30px;
    margin-right: 10px;
`
const LogoImage = style.img`
    margin-right: 10px;
    margin-top: 20px;
    width: 50px;
    height: 50px;
`

function Logo (){
 return(
    <LogoContainer>
      <LogoImage
      src={logo} 
      alt="logo" 
      className="logo-img"
      />
      <p><strong>Alura</strong>Books</p>
    </LogoContainer>
 )
}

export default Logo;