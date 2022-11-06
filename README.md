# moody dApp - Work in progress

<img src="https://user-images.githubusercontent.com/20209512/200143706-8e1c6f68-063a-47ca-87e1-34963eed499b.svg" alt="logo" width="150" height="35" />

## What is moody?

**moody** is a decentralized application that allows users to share their mood with everyone on the Polygon network and The Graph.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Polygon](https://polygon.technology/)
- [The Graph](https://thegraph.com/)
- [Ether.js](https://docs.ethers.io/v5/)
- [IPFS](https://ipfs.io/)
- [Web3 Storage](https://web3.storage/)
- [ImageKit](https://imagekit.io/)
- [Hardhat](https://hardhat.org/)

## Installation

1. Clone the repo

```bash
git clone https://github.com/nurcinozer/moody-dapp.git
```

2. Install dependencies

```bash
yarn
```

3. Create an `.env` file in the backend folder and add the following variables

```bash
PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
POLYGONSCAN_KEY="YOUR_POLYGONSCAN_API_KEY"
```

4. Create an `.env` file in the frontend folder and add the following variables

```bash
NEXT_PUBLIC_WEB3_STORAGE_KEY="YOUR_WEB3_STORAGE_API_KEY"
NEXT_PUBLIC_IMAGEKIT_ID="YOUR_IMAGEKIT_ID"
```

5. Compile the smart contract

```bash
npx hardhat compile
```

6. Deploy the smart contract

```bash
npx hardhat run scripts/deploy.ts --network mumbai
```

7. Get your contract address and add it to the `frontend/utils/constants.ts` file

```bash
export const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS"
```

8. Deploy subgraph in `backend/indexer` folder by following the instructions [here](https://thegraph.com/docs/en/cookbook/quick-start/). (It is optional because the subgraph is already in hosted service)

9. Get your subgraph url and add it to the `frontend/utils/constants.ts` file

```bash
export const SUB_GRAPH_URL = "YOUR_SUBGRAPH_URL"
```

10. Run the app

```bash
yarn dev
```

## Inspiration

- [Didem Küçükkaraaslan](https://twitter.com/DidemKkkaraasl1/status/1588612558768177152)
