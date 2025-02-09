# SuriVerse

An MMORPG game made using RPG JS framework which showcases global chat and NPCs powered by AI Agent. Every AI Agent is made using Coinbase AgentKit framework which can not only chat but execute custom actions based on prompts. All agents have the capabilities to manage their wallets.

We have made specialized AI Agents to communicate with popular Web3 services like AAVE and Uniswap.

Chat responses from the AI Agents are recorded and first 16 characters are hashed with SHA-256 and uploaded to EigenDA which provides randomness generated through AI and user interaction available for any service to use.
<div align="center">
  <img src="public/logo.gif" width="400">
</div>

## Usage

Use arrow keys to move around the map.
Use space near an NPC to get it's description.

Click on an NPC to open chat prompt and start using the AI Agent.

<img src="https://github.com/user-attachments/assets/2165f1b4-f049-4233-b14c-7e8f4b8388f6" width="400">

- AAVE NPC : Works on Eth Sepolia testnet. Can connect with AAVE and execute the functionalities provided by AAVE.
- Uniswap NPC :
- Simple NPC : Works on Base Sepolia testnet. Can mint ERC20 and NFTs and interact with it.
- EigenDA NPC : Works on Eigen DA Holesky testnet. Even though EigenDA randomness uploading works in the background, this NPC showcase that capability manually. Send the string you want upload, at max 16 characters of the string will be uploaded. Wait for a few minutes and the response will show the details of the uploaded blob.

## Infrastructure

RPG JS provides with the game server. The AI Agents are hosted as API services and are invoked on NPC interactions.

<img src="https://github.com/user-attachments/assets/300a3c30-e157-474f-bd31-990edb850b05" width="600">


## Agent Workflow
<img src="https://github.com/user-attachments/assets/47e40834-8b9e-48d1-91d1-0c56f748a002" width="800">

## Eigen Workflow
<img src="https://github.com/user-attachments/assets/520dc604-9c76-446f-ac5b-9c843f59e7c6" width="1000">


## Team

- [Ayush Petwal](https://github.com/1Ayush-Petwal)
- [Harshit Nayan](https://github.com/LogicalGuy77)
- [Lakshya Jain](https://github.com/Projectman14)
- [Naman Khandelwal](https://github.com/namankhandelwal1607)
- [Siddhartha Swarnkar](https://github.com/bismuth01)

## Acknowledgements

- [RPG JS](https://rpgjs.dev/) for the game framework
- [Coinbase AgentKit](https://docs.cdp.coinbase.com/) for the AI Agent framework
- [EigenDA](https://eigenda.xyz/) for providing randomness through AI and user interaction
