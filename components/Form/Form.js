// import React from 'react'
// import { StyledEngineProvider } from "@mui/material";
import styled from "styled-components";
import FormRightWrapper from "./Components/FormRightWrapper";
import FormLeftWrapper from "./Components/FormLeftWrapper";
import { TailSpin } from "react-loader-spinner";
import { ethers } from "ethers";
import React, { createContext, useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import CampaignFactory from "../../artifacts/contracts/Campaign.sol/CampaignFactory.json";




const FormState = createContext();

const Form = () => {
  const [form, setForm] = useState({
    campaignTitle: "",
    story: "",
    requiredAmount: "",
    category: "Education",
  });

  const [storyUrl, setStoryUrl] = useState();
  const [imageUrl, setImageUrl] = useState();

  const [loading, setLoadiing] = useState(false);
  const [address, setAddress] = useState("");

  const FormHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [image, setImage] = useState(null);
  const ImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const startCampaign = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    if (form.campaignTitle == "") {
      toast.warn("Title Field is empty");
    } else if (form.story == "") {
      toast.warn("Story Field is empty");
    } else if (form.requiredAmount == "") {
      toast.warn("Required amount Field is empty");
    }

    // else if(uploaded==false){
    //     toast.warn("Upload File");
    // }
    else {
      setLoadiing(true);
    }

    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_ADDRESS,
      CampaignFactory.abi,
      signer
    );

    console.log("Starting New Campaign...");
    const campaignData = await contract.createCampaign(
      form.campaignTitle,
      parseInt(form.requiredAmount),
      imageUrl,
      form.category,
      storyUrl
    );
    await campaignData.wait();
    setAddress(campaignData.to);
  };
  return (
    <FormState.Provider
      value={{
        form,
        setForm,
        image,
        setImage,
        ImageHandler,
        FormHandler,
        setImageUrl,
        setStoryUrl,
        startCampaign,
      }}
    >
      <FormWrapper>
        <FormMain>
          {loading == true ? (
            address == "" ? (
              <Spinner>
                <TailSpin height={60} />
              </Spinner>
            ) : (
              <Address>
                <h1>Campaign Started Successfully</h1>
                <h1>{address}</h1>
                <Buttons>Go to Campaign</Buttons>
              </Address>
            )
          ) : (
            <React.Fragment>
              <FormTitle>Create Campaign </FormTitle>

              <FormInputWrapper>
                <FormLeftWrapper />
                <FormRightWrapper />
              </FormInputWrapper>
            </React.Fragment>
          )}
        </FormMain>
      </FormWrapper>
    </FormState.Provider>
  );
};

const Buttons = styled.button`
  display: flex;
  justify-content: center;
  width: 30%;
  padding: 15px;
  color: white;
  background-color: #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  margin-top: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
`;

const Spinner = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: center;
  justify-items: center;
`;

const Address = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgSubDiv};
  border-radius: 20px;
`;
const FormWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const FormMain = styled.div`
  width: 80%;
`;

const FormTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: ${(props) => props.theme.color};
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  margin: 40px 0px;
  /* padding: 0px 40px; */
`;

const FormInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 20px;
`;

export default Form;

export { FormState };
