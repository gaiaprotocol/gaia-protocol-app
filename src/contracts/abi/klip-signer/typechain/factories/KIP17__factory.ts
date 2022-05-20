/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP17, KIP17Interface } from "../KIP17";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100276301ffc9a760e01b61004260201b60201c565b61003d6380ac58cd60e01b61004260201b60201c565b610110565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100d357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b61105c8061011f6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80636352211e116100665780636352211e146101b157806370a08231146101ce578063a22cb46514610206578063b88d4fde14610234578063e985e9c5146102fa5761009e565b806301ffc9a7146100a3578063081812fc146100de578063095ea7b31461011757806323b872dd1461014557806342842e0e1461017b575b600080fd5b6100ca600480360360208110156100b957600080fd5b50356001600160e01b031916610328565b604080519115158252519081900360200190f35b6100fb600480360360208110156100f457600080fd5b5035610347565b604080516001600160a01b039092168252519081900360200190f35b6101436004803603604081101561012d57600080fd5b506001600160a01b0381351690602001356103ac565b005b6101436004803603606081101561015b57600080fd5b506001600160a01b038135811691602081013590911690604001356104d9565b6101436004803603606081101561019157600080fd5b506001600160a01b03813581169160208101359091169060400135610531565b6100fb600480360360208110156101c757600080fd5b503561054c565b6101f4600480360360208110156101e457600080fd5b50356001600160a01b03166105a9565b60408051918252519081900360200190f35b6101436004803603604081101561021c57600080fd5b506001600160a01b0381351690602001351515610614565b6101436004803603608081101561024a57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561028557600080fd5b82018360208201111561029757600080fd5b803590602001918460018302840111640100000000831117156102b957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506106e3945050505050565b6100ca6004803603604081101561031057600080fd5b506001600160a01b038135811691602001351661073e565b6001600160e01b03191660009081526020819052604090205460ff1690565b60006103528261076c565b61039057604051600160e51b62461bcd02815260040180806020018281038252602b815260200180610fa4602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b60006103b78261054c565b9050806001600160a01b0316836001600160a01b031614156104235760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b038216148061043f575061043f813361073e565b61047d57604051600160e51b62461bcd028152600401808060200182810382526037815260200180610fcf6037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6104e33382610789565b61052157604051600160e51b62461bcd028152600401808060200182810382526030815260200180610ef36030913960400191505060405180910390fd5b61052c838383610830565b505050565b61052c838383604051806020016040528060008152506106e3565b6000818152600160205260408120546001600160a01b0316806105a357604051600160e51b62461bcd028152600401808060200182810382526028815260200180610ecb6028913960400191505060405180910390fd5b92915050565b60006001600160a01b0382166105f357604051600160e51b62461bcd028152600401808060200182810382526029815260200180610f536029913960400191505060405180910390fd5b6001600160a01b03821660009081526003602052604090206105a39061097a565b6001600160a01b0382163314156106755760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6106ee8484846104d9565b6106fa8484848461097e565b61073857604051600160e51b62461bcd028152600401808060200182810382526030815260200180610f236030913960400191505060405180910390fd5b50505050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b60006107948261076c565b6107d257604051600160e51b62461bcd02815260040180806020018281038252602b815260200180611006602b913960400191505060405180910390fd5b60006107dd8361054c565b9050806001600160a01b0316846001600160a01b031614806108185750836001600160a01b031661080d84610347565b6001600160a01b0316145b806108285750610828818561073e565b949350505050565b826001600160a01b03166108438261054c565b6001600160a01b03161461088b57604051600160e51b62461bcd028152600401808060200182810382526028815260200180610f7c6028913960400191505060405180910390fd5b6001600160a01b0382166108d357604051600160e51b62461bcd028152600401808060200182810382526023815260200180610ea86023913960400191505060405180910390fd5b6108dc81610d61565b6001600160a01b03831660009081526003602052604090206108fd90610d9e565b6001600160a01b038216600090815260036020526040902061091e90610db5565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b5490565b6000806060610995866001600160a01b0316610dbe565b6109a457600192505050610828565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610a30578181015183820152602001610a18565b50505050905090810190601f168015610a5d5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b60208310610ac55780518252601f199092019160209182019101610aa6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610b27576040519150601f19603f3d011682016040523d82523d6000602084013e610b2c565b606091505b508051919350915015801590610b6c57508051600160e11b630a85bd01029060208084019190811015610b5e57600080fd5b50516001600160e01b031916145b15610b7c57600192505050610828565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c08578181015183820152602001610bf0565b50505050905090810190601f168015610c355780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b60208310610c9d5780518252601f199092019160209182019101610c7e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610cff576040519150601f19603f3d011682016040523d82523d6000602084013e610d04565b606091505b508051919350915015801590610d4457508051600160e01b636745782b029060208084019190811015610d3657600080fd5b50516001600160e01b031916145b15610d5457600192505050610828565b5060009695505050505050565b6000818152600260205260409020546001600160a01b031615610d9b57600081815260026020526040902080546001600160a01b03191690555b50565b8054610db190600163ffffffff610dc416565b9055565b80546001019055565b3b151590565b6000610e0683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610e0d565b9392505050565b60008184841115610e9f57604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e64578181015183820152602001610e4c565b50505050905090810190601f168015610e915780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058200fd99ad268aaa75cc0e9cee52789092904b197c458618ac1e98db523e456128c0029";

export class KIP17__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP17> {
    return super.deploy(overrides || {}) as Promise<KIP17>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KIP17 {
    return super.attach(address) as KIP17;
  }
  connect(signer: Signer): KIP17__factory {
    return super.connect(signer) as KIP17__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP17Interface {
    return new utils.Interface(_abi) as KIP17Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): KIP17 {
    return new Contract(address, _abi, signerOrProvider) as KIP17;
  }
}
