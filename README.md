# SuriVerse
### AI-powered multiverse—where MMORPG meets Web3,
An MMORPG game made using RPG JS framework which showcases global chat and NPCs powered by AI Agent. Every AI Agent is made using Coinbase AgentKit framework which can not only chat but execute custom actions based on prompts. All agents have the capabilities to manage their wallets.

We have made specialized AI Agents to communicate with popular Web3 services like AAVE and Uniswap.

Chat responses from the AI Agents are recorded and first 16 characters are hashed with SHA-256 and uploaded to EigenDA which provides randomness generated through AI and user interaction available for any service to use.
<div align="center">
  <img src="public/logo.gif" width="400">
</div>

## Demo Video
[![Watch the video](https://img.youtube.com/vi/ep0vQJd_ziw/0.jpg)](https://youtu.be/ep0vQJd_ziw)

## Usage

Use arrow keys to move around the map.
Use space near an NPC to get it's description.

Click on an NPC to open chat prompt and start using the AI Agent.

<img src="https://github.com/user-attachments/assets/97af6fbf-97a2-448b-a10e-dec6e358102e" width="800">

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

## Installation

After git cloning the project with the submodules, install all node modules using `npm i`.

To start the agents locally, go to `general-coinbase-agent`, `aave_agent`, `uniswap_agent` and `EigenDA_connector` : -
1) Fill `.env` for each directory
 ```
CDP_API_KEY_NAME
CDP_API_KEY_PRIVATE_KEY
OPENAI_API_KEY
NETWORK_ID=sepolia #or base-sepolia for general agent
USER_PRIVATE_KEY
OPENAI_API_BASE
SEPOLIA_RPC_URL
PORT
```
2) Run the command `npm start` or `npm run dev` according to the `package.json` for each directory in a single terminal.
Now go to the `./src/game/main/gui/tooltip.vue` and change all the API endpoints as necessary.

Now go to root directory and run `npm run dev` to start the project.

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
