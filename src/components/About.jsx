import React from 'react';
import styled from "styled-components";

const About = () => {
  return (
    <Main>
       <img src="rem.jpg" style={{width: "5%"}}/>
      <Heading>
        Why CamTrack?
      </Heading>
      <Desc>
        Our system offers a unique approach to enhancing public safety by leveraging the private security cameras of community members.
      </Desc>
      <Content>
        <Item>
            <Icon></Icon>
            <ItemHead>Crime Prevention</ItemHead>
            <ItemDesc>Our system acts as a deterrence to potential criminals, making your community safer.</ItemDesc>
        </Item>
        <Item>
            <Icon></Icon>
            <ItemHead>Quick Evidence Gathering</ItemHead>
            <ItemDesc>In case of incidents, our system allows for quick evidence gathering to aid law enforcement.</ItemDesc>
        </Item>
        <Item style={{border: "none"}}>
            
            <img src="community.jpg" style={{width: "18%"}}/>
          
            <ItemHead>Community Driven</ItemHead>
            <ItemDesc>Our system is community driven, making it a collective effort in enhancing public safety.</ItemDesc>
        </Item>
      </Content>
    </Main>
  )
}

export default About

const Main = styled.div`
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