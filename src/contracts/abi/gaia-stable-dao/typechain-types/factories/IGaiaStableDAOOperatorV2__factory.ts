/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IGaiaStableDAOOperatorV2,
  IGaiaStableDAOOperatorV2Interface,
} from "../IGaiaStableDAOOperatorV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newDevFund",
        type: "address",
      },
    ],
    name: "UpdateDevFund",
    type: "event",
  },
  {
    inputs: [],
    name: "PRICEWITHGKRONOS",
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
    inputs: [],
    name: "PRICEWITHGSUPERNOVA",
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
    inputs: [],
    name: "PUBLICPRICE",
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
    inputs: [],
    name: "burnedTokensAmount",
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
    inputs: [],
    name: "devFund",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gaiaKronos",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gaiaSupernova",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBurnedIds",
    outputs: [
      {
        internalType: "uint16[]",
        name: "",
        type: "uint16[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "nft",
        type: "address",
      },
    ],
    name: "mintStableDAO",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "oUSDC",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stableDAO",
    outputs: [
      {
        internalType: "contract IGaiaStableDAO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGaiaStableDAOOperatorV2__factory {
  static readonly abi = _abi;
  static createInterface(): IGaiaStableDAOOperatorV2Interface {
    return new utils.Interface(_abi) as IGaiaStableDAOOperatorV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGaiaStableDAOOperatorV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IGaiaStableDAOOperatorV2;
  }
}