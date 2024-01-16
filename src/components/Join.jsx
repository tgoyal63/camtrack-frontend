import React from 'react';
import styled from "styled-components";

const Join = () => {
  return (
    <Main>
        <Heading>Join Our Network</Heading>
        <Desc>
            Contribute to your community's safety by registering your private security cameras. Join us today and make a difference.
        </Desc>
        <RegisterBtn>
            Register Now
        </RegisterBtn>
    </Main>
  )
}

export default Join

const Main = styled.div`
    margin-top: 100px;
    display: flex;
    gap: 25px;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h1`
    margin: 0;
`;

const Desc = styled.div`
    width: 40%;
    text-align: center;
`;

const RegisterBtn = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px 15px;
    margin: 5px;
`;