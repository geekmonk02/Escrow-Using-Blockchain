// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
contract buyer
{
    address public buyerAddress;
    address[] public buyerList;
    uint256 public buyerFundsBalance;
    mapping (address => uint256) public buyerFunds;
    function fund() public payable //payable denotes that the function can hold funds
    {
        buyerList.push(msg.sender);//stores eligible funder address in array named funders
        buyerFunds[msg.sender]=msg.value;
        buyerFundsBalance +=msg.value;
    }
}