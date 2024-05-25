// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;
contract escrow
{
    address public immutable escrowagent;
    address[] public funders;
    mapping (address => uint256) public deposits;
    constructor()
    {
        escrowagent=msg.sender;
    }
   function fund() public payable //payable denotes that the function can hold funds
    {
        funders.push(msg.sender);//stores eligible funder address in array named funders
        deposits[msg.sender]=msg.value;
    }
    function withdraw() public onlyOwner
    {
        for(uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++)
        {
            address funder = funders[funderIndex];
            deposits[funder] = 0;//resetting the mapping to zero for each index
        }
        funders=new address[](0);
        (bool sendSuccessful,)=payable(msg.sender).call{value:address(this).balance}("");
        require(sendSuccessful, "Call failed");
    }
    modifier onlyOwner
    {
        require(msg.sender == escrowagent, "Sender is not owner");
        _;
    }
    receive() external payable 
    { 
        fund();//callls fund function if someone sends fund directly to function 
    }
    fallback() external payable 
    { 
        fund();
    }
}