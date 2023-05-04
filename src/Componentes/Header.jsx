
import styled from 'styled-components';
import logo from '../assets/logo.png';
import INSTA from '../assets/INSTA.png';
import FACE from '../assets/FACE.png';
import TWITER from '../assets/TWITER.png';


const ImagemDiv = styled.img` 
  width: 250px; 
  height: 150;
  padding: 5px;
`;

const Nav = styled.div`
  background-color: #000;
  padding: 0.1%;
  right: 0px; 
  left: 0px;
  position: relative;
`;

const TextRight = styled.text`
  position: relative;
  left: 15px;
  font-family: Jost;
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left 5px;
  color: #ffffff;
`;


const ImgInstaDiv = styled.img` 
  width: 25px; 
  height: auto;
  padding: 5px;
  position: absolute;
  top: 50%;
  right: 80px;
  transform: translateY(-50%);
`;

const ImgFace = styled.img` 
  width: 15px; 
  height: auto;
  padding: 5px;
  position: absolute;
  top: 50%;
 right: 55px;
  transform: translateY(-50%);
`;

const ImgTwiter = styled.img` 
  width: 25px; 
  height: auto;
  padding: 5px;
  position: absolute;
  top: 50%;
 right: 20px;
  transform: translateY(-50%);
`;


export const Header = () => {
  return (
    <>
        <Nav>
     
        <TextRight>
          <h3>GANHE 20% DE DESCONTO COM O CÓDIGO DE CUPOM CGBNJKI25</h3>
        </TextRight>
        <ImgInstaDiv src={INSTA} alt='instagram'/>
        <ImgFace src={FACE} alt='facebook'/> 
        <ImgTwiter src={TWITER} alt='twiter'/> 
      </Nav> 
      <ImagemDiv src={logo} alt='logo'/>
      </>
     );
};
