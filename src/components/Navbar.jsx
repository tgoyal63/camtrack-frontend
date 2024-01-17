import React from 'react';
import styled from "styled-components";

const Navbar = () => {
  return (
    <Main>
            <img src="logo.png" className='logo'/>
        <Content>
            <Item>HOME</Item>
            <Item>ABOUT</Item>
            <Item>FEATURES</Item>
            <Item>HOW IT WORKS</Item>
            <Item>CONTACT</Item>
        </Content>
        <Auth>
            <SignInBtn>
                <a href='../login.js'>SIGN IN</a>
                </SignInBtn>
            <Register>REGISTER</Register>
        </Auth>
    </Main>
  )
}

export default Navbar;


const Content = styled.div`
    display: flex;
    gap: 50px;
`;

const Auth = styled.div`
    
`;

const Main = styled.div`
    padding: 10px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Item = styled.div`
    
`;

const SignInBtn = styled.button`
    border: none;
    padding: 10px 15px;
    margin: 5px;
    background-color: white;
    font-size: 14px;

    &:hover{
        cursor: pointer;
    }
`;

const Register = styled(SignInBtn)`
    background-color: black;
    color: white;
    border-radius: 5px;
`;