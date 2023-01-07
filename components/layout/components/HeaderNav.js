// import React from 'react'
import styled from "styled-components"
import Router, {useRouter} from 'next/router';
import Link from 'next/link'
// import { Link } from "@mui/material";


const HeaderNav = () => {

    const Router=useRouter();
  return (
    <HeaderNavWrapper>
        <Link style={{textDecoration: 'none'}} href={'/'}><HeaderNavLinks active={Router.pathname=="/"?"true":"false"}>
            Campaign
        </HeaderNavLinks></Link>
        <Link style={{textDecoration: 'none'}} href={'/createcampaign'}><HeaderNavLinks active={Router.pathname=="/createcampaign"?"true":"false"}>
            Create  Campaign
        </HeaderNavLinks></Link>
        <Link style={{textDecoration: 'none'}} href={'/dashboard'}><HeaderNavLinks active={Router.pathname=="/dashboard"?"true":"false"}>
            Dashboard
        </HeaderNavLinks></Link>



    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper=styled.div`
    display: flex;
    background-color: ${(props)=> props.theme.bgDiv};
    padding: 10px;
    height: 50%;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;

`

const HeaderNavLinks=styled.div`
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
    margin: 12px;
    font-weight: lighter;
    font-size: 20px;
    font-family: 'Silkscreen', cursive;
    /* background-color: ${(props)=> props.theme? props.theme.bgDiv : props.theme.bgSubDiv}; */
    background-color: ${(props)=> props.theme.bgSubDiv};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    padding: 2px 4px;
    cursor: pointer;
    text-decoration: none!important;
    color: ${(props) => props.theme.color}
`


export default HeaderNav