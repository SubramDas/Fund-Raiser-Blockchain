// import React from 'react'
import styled from "styled-components"
import { FormState } from "../Form"
import { useContext } from "react"

const FormLeftWrapper = () => {
    const Handler=useContext(FormState);
  
    return (

    <FormLeft>
        <FormInput>
            <label>Campaign Title</label>
            <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder="Campaign Title" name='campaignTitle'>

            </Input>
        </FormInput>
        <FormInput>
            <label>Story</label>
            <TextArea onChange={Handler.FormHandler} value={Handler.form.story} name='story' placeholder="Campaign Story">

            </TextArea>
        </FormInput>
    </FormLeft>
)
}

const FormLeft =styled.div`
    /* display: flex; */



`
const FormInput=styled.div`
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    width: 100%;
    flex-direction:column;
    margin-top: 15px;
`
const Input=styled.input`

    padding: 8px;
    background-color: ${(props)=>props.theme.bgDiv};
    color: ${(props)=>props.theme.color};
    width: 100%;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: large;

`
const TextArea=styled.textarea`
    padding: 8px;
    background-color: ${(props)=>props.theme.bgDiv};
    color: ${(props)=>props.theme.color};
    width: 50%;
    margin-top: 4px;
    border: none;
    border-radius: 20px;
    outline: none;
    font-size: large;
    max-width: 100%;
    min-width: 50%;
    max-height: 50%;
    overflow-x: hidden;
    /* overflow-y: hidden; */
`


export default FormLeftWrapper
