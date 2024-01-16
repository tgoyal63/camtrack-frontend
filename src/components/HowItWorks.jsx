import React from 'react';
import styled from "styled-components";

const HowItWorks = () => {
  return (
    <Main>
      <Heading>
        How It Works
      </Heading>
      <Desc>
        Joining our network is simple. Follow these steps to contribute to your community's safety.
      </Desc>
      <Content>
        <Item>
            <Icon></Icon>
            <ItemHead>Register</ItemHead>
            <ItemDesc>Sign up for a new account with your email address.</ItemDesc>
        </Item>
        <Item>
        <img src="map.jpg" style={{width: "18%"}}/>
            <ItemHead>Tag Your Camera</ItemHead>
            <ItemDesc>Register your camera and tag its location on the map.</ItemDesc>
        </Item>
        <Item style={{border: "none"}}>
            <Icon></Icon>
            <ItemHead>Stay informed</ItemHead>
            <ItemDesc>Receive real-time alerts and stay informed about your community's safety.</ItemDesc>
        </Item>
      </Content>
    </Main>
  )
}

export default HowItWorks

const Main = styled.div`
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
`;

const Heading = styled.h1`
    margin: 0;
    font-size: 40px;
`;

const Desc = styled.div`
    width: 600px;
    font-size: 18px;
    text-align: center;
    word-spacing: 3px;
    line-height: 1.5;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`;

const Item = styled.div`
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    border-right: 1px solid black;
`;

const ItemHead = styled.div`
    
`;

const ItemDesc = styled.div`
    width: 300px;
    text-align: center;
`;

const Icon = styled.img`
    height: 50px;
    width: 50px;
    margin-bottom: 15px;
`;