import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const homeCarouselData = [
  { image: "https://via.placeholder.com/1500x450", path: "/path1" },
  { image: "https://via.placeholder.com/1500x450", path: "/path2" },
  // Add more items as needed
];
const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();
  const item = homeCarouselData.map((item, index) => (
    <img
      className="cursor-pointer"
      // onClick={() => navigate(item.path)}
      src={`${item.image}`}
      alt={`banner-${index + 1}`}
      onDragStart={handleDragStart}
      role="presentation"
      // style={{ height: 450, width: 1500 }}
      style={{
        // width: "100vw",
        objectFit: "contain",
        // height: "350px",

      }}
    />
  ));
  return (
    <DivCrousel>

      <AliceCarousel
        mouseTracking
        items={item}
        autoPlay
        infinite
        autoPlayInterval={3000}
        disableButtonsControls
      />
    </DivCrousel>
  );
};

export default HomeCarousel;

const DivCrousel = styled.div`
.carousel {
  position: relative;
  overflow: hidden;
}
  
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }
  
  .slide {
    flex: 1;
    height: 400px;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .slide.active {
    opacity: 1;
  }
  
  .slide.active ~ .slide {
    transform: translateX(-100%);
  }
  
  .indicators {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  }
  
  .indicator {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: #ddd;
    cursor: pointer;
  }
  
  .indicator.active {
    background-color: #555;
  }
  
`;