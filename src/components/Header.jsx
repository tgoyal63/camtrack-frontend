import React from 'react';
import styled from "styled-components";

const Header = () => {
  return (
    <Main>
            <img src="cam.png" style={{width: "20%"}}/>
        <Content>
            <Heading>CAMTRACK CONNECT</Heading>
            <Desc>"Empowering Safety, Connnecting Cameras: Your Eyes in Crime Detection."</Desc>
            <ExploreBtn>Explore Now</ExploreBtn>
        </Content>
    </Main>
  )
}

export default Header

const Main = styled.div`
    display: flex;
    flex-direction: row;
    gap: 300px;
    padding: 90px;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const Image = styled.div`
    
`;

const Img = styled.img`
    height: 350px;
    width: 350px;
    position: relative;
    bottom: 50px;
`;

const Heading = styled.h1`
    margin: 0;
`;

const Desc = styled.div`
    width: 320px;
    font-size: 16px;
    line-height: 1.5;
`;

const ExploreBtn = styled.div`
    border: none;
    padding: 10px 15px;
    background-color: black;
    color: white;
    border-radius: 5px;
`;