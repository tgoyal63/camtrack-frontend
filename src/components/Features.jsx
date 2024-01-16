import React from 'react';
import styled from "styled-components";

const Features = () => {
  return (
    <Main>
      <Heading>
        Features
      </Heading>
      <Desc>
        Explore our major features and understand how they can make your community safer
      </Desc>
      <Content>
        <Item>
            <img src="timer.png" style={{width: "18%"}}/>
            <ItemHead>Real-Time Alerts</ItemHead>

            <ItemDesc>Get instant notifications about suspicious activities in your vicinity.</ItemDesc>
        </Item>
        <Item>
            
            <img src="camera.jpg" style={{width: "18%"}}/>
          
            <ItemHead>Easy Camera Registration</ItemHead>
            <ItemDesc>Register your private security cameras with us in a few simple steps.</ItemDesc>
        </Item>
        <Item>
            <ItemHead>Interactive Map</ItemHead>
            <ItemDesc>View real-time surveillance coverage and incident reports on an interactive map.</ItemDesc>
        </Item>
        <Item style={{border: "none"}}>
        <img src="a1.png" style={{width: "18%"}}/>
            <ItemHead>Advanced Video Analytics</ItemHead>
            <ItemDesc>Our AI-powered analytics help in proactive threat detection and incident investigation.</ItemDesc>
        </Item>
      </Content>
    </Main>
  )
}

export default Features

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
    padding: 20px;
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