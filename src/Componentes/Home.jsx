import styled from "styled-components"
import Slider from '../assets/Slider.png';
import Amostra from '../assets/Amostra.png'

const ImageSlide = styled.img`
  position: absolute;
  width: 100%;
  height: 400px;
  top: 25%;
  left: 0;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 450px;
`;

const DivContainerRight = styled.div`
  

  position: relative;
`;

const DivContainerLeft = styled.div`

 

 
  position: relative;
`;

const DivContainerCenter = styled.div`
  padding: 100px;
  height: 0px;
  position: relative;
`;
const ImageAmostra = styled.img`
width: 1000px;
right: 15px;
left: auto;
`;

export const Home = () => {
  return (
    <>
      <ImageSlide src={Slider} alt='Slide'/> 
      <Container>
        <DivContainerRight><h1></h1></DivContainerRight>
        <DivContainerCenter><ImageAmostra src={Amostra} alt='Banner'/> </DivContainerCenter>
        <DivContainerLeft><h1></h1></DivContainerLeft>
      </Container>
    </>      
  )
}
