const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "hash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "MoodUploaded",
    type: "event",
  },
  {
    inputs: [],
    name: "moodCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "moods",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "hash",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_moodHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "string",
        name: "_date",
        type: "string",
      },
    ],
    name: "uploadMood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const CONTRACT_ADDRESS = "0xc3BE15770bD0682CC21578C976e9a72024FC53f4";
const LIVEPEER_KEY = process.env.NEXT_PUBLIC_LIVEPEER_KEY;
const SUB_GRAPH_BASE_URL = "https://api.thegraph.com";
const SUB_GRAPH_NAME = "nurcinozer/moody";
const SUB_GRAPH_URL = `${SUB_GRAPH_BASE_URL}/subgraphs/name/${SUB_GRAPH_NAME}`;
const WEB3_STORAGE_KEY = process.env.NEXT_PUBLIC_WEB3_STORAGE_KEY;

export {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  LIVEPEER_KEY,
  SUB_GRAPH_URL,
  WEB3_STORAGE_KEY,
};
