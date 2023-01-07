// import React from 'react'
import styled from "styled-components"
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import FlareSharpIcon from '@mui/icons-material/FlareSharp';
import { App } from "../Layout";
import { useContext } from "react";
import Wallet from "./Wallet";

const HeaderRight = () => {
    const ThemeToggler=useContext(App);
    return (
    <HeaderRightWrapper>
    
    <Wallet/>

    <ThemeToggle>
        {ThemeToggler.theme=='light'? 
            <DarkModeSharpIcon onClick={ThemeToggler.changeTheme}/>:<FlareSharpIcon onClick={ThemeToggler.changeTheme}/>}
        
    </ThemeToggle>
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper=styled.div`
margin-right: 20px;
border-radius: 20px;
height: 45%;
display: flex;
justify-items: center;
align-items: center;
cursor: pointer;




`
const ThemeToggle=styled.div`
    display: flex;
    background-color: ${(props)=>props.theme.bgDiv};
    height: 100%;
    justify-items: center;
    align-items: center;
    border-radius: 20px;
    padding: 4px 4px;
    



`


export default HeaderRight