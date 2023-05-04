import styled from "styled-components"
import Slider from '../assets/Slider.png';

const ImageSlide = styled.img`
  position: absolute;
  width: 100%;
  height: 400px;
  top: 25%;
  left: 0;
  object-fit: cover;
`;
export const Home = () => {
  return (
    <>
      <ImageSlide src={Slider} alt='Slide'/> 
    </>      
  )
}
