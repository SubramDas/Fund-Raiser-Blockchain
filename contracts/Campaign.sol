// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0;

contract CampaignFactory{
    address[] public deployedCampaigns;

    event campaignCreated(
        string title,
        uint requiredAmount,
        address indexed owner,
        address campaignAddress,
        string imgURL,
        uint indexed timestamp,
        string indexed category
    );

    function createCampaign(
        string memory campaignTitle, 
        uint requiredCampaignAmount,
        string memory imgURL,
        string memory category,
        string memory storyURI) public {

            Campaign newCampaign = new Campaign(campaignTitle, requiredCampaignAmount, imgURL, storyURI);
            
            deployedCampaigns.push(address(newCampaign));

            emit campaignCreated(
                campaignTitle, 
                requiredCampaignAmount,
                msg.sender, 
                address(newCampaign), 
                imgURL, 
                block.timestamp, 
                category);
        }
}


contract Campaign{
    string public title; //kis liye fund chahiye
    uint public requiredAmount; //kitna paisa
    string public image; //image 
    string public story; //story batayega  creater
    address payable public owner; //creator
    uint public receivedAmount;

    event donated(address indexed donor, uint indexed amount, uint indexed timestamp);

    constructor(
        string memory campaignTitle, 
        uint requiredCampaignAmount,
        string memory imgURL,
        string memory storyURI) {
            title=campaignTitle;
            requiredAmount= requiredCampaignAmount;
            image=imgURL;
            story=storyURI;
            owner=payable(msg.sender);

    }

    function donate() payable public{
        require(requiredAmount > receivedAmount,"Required Amount FULLFILLED");
        owner.transfer(msg.value);
        receivedAmount+=msg.value;
        emit donated(msg.sender, msg.value,block.timestamp);
    }
}

