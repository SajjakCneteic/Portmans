import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CustomAccordion from './CustomAccordion';
import { IoHomeSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";


const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px); 
  z-index: 100;
  display: ${props => (props.show ? 'block' : 'none')};
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
  @media(min-width: 1024px){
    display:none;
  }
`;

const StyledDiv = styled.div`
  height: 100vh;
  width: 75%;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-y: auto;
  display: ${props => (props.show ? 'block' : 'none')};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  @media(min-width: 1024px){
    display:none;
  }
`;

const Container = styled.div`
  padding: 20px;
`;

const CrossBtn = styled.div`
  position: absolute;
  z-index: 1000;
  right: 20px;
  top: 20px;
  color: #fff;
  cursor: pointer;
`;

const SearchButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 25px;
  margin-left: 10px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const SearchButtonText = styled.p`
  margin-left: 5px;
  
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  padding: 10px;
  @media screen and (max-width: 1024px) {
    display: none;
    margin-bottom: 10px;
  }
 
`;


const OpenHamburger = ({ drawer, setDrawer }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <MainContainer show={drawer}>
      {drawer && <CrossBtn onClick={() => setDrawer(!drawer)}><ImCross/></CrossBtn>}
      <StyledDiv show={drawer}>
        <Container>
          <button onClick={() => setDrawer(!drawer)}><IoHomeSharp/></button>
          {showSearchInput ? (
        <SearchContainer >
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              padding: "5px",
              margin: "10px",
              borderBottom: "1px solid black",
            }}
          />
          <div>
            <img alt="" src="/svg-6.svg" style={{ height: "20px", width: "20px",cursor:"pointer" }} onClick={() => setShowSearchInput(false)}/>
          </div>
        </SearchContainer>
      ) : (
        <SearchButton onClick={() => setShowSearchInput(true)}>
          <img alt="" src="/svg-6.svg" style={{ height: "20px", width: "20px" }} />
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      )}
          <CustomAccordion/>
        </Container>
      </StyledDiv>
    </MainContainer>
  );
};

export default OpenHamburger;
