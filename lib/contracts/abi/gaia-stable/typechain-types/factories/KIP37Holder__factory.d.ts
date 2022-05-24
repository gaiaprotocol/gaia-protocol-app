import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP37Holder, KIP37HolderInterface } from "../KIP37Holder";
declare type KIP37HolderConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class KIP37Holder__factory extends ContractFactory {
    constructor(...args: KIP37HolderConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<KIP37Holder>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): KIP37Holder;
    connect(signer: Signer): KIP37Holder__factory;
    static readonly contractName: "KIP37Holder";
    readonly contractName: "KIP37Holder";
    static readonly bytecode = "0x608060405261001d6301ffc9a760e01b6001600160e01b0361003b16565b610036637cc2d01760e01b6001600160e01b0361003b16565b6100bf565b6001600160e01b0319808216141561009a576040805162461bcd60e51b815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b61039e806100ce6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a7146100465780639b49e33214610081578063e78b33251461025f575b600080fd5b61006d6004803603602081101561005c57600080fd5b50356001600160e01b031916610328565b604080519115158252519081900360200190f35b610242600480360360a081101561009757600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156100ca57600080fd5b8201836020820111156100dc57600080fd5b803590602001918460208302840111600160201b831117156100fd57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561014c57600080fd5b82018360208201111561015e57600080fd5b803590602001918460208302840111600160201b8311171561017f57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156101ce57600080fd5b8201836020820111156101e057600080fd5b803590602001918460018302840111600160201b8311171561020157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610347945050505050565b604080516001600160e01b03199092168252519081900360200190f35b610242600480360360a081101561027557600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b8111156102b457600080fd5b8201836020820111156102c657600080fd5b803590602001918460018302840111600160201b831117156102e757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610358945050505050565b6001600160e01b03191660009081526020819052604090205460ff1690565b634da4f19960e11b95945050505050565b63e78b332560e01b9594505050505056fea265627a7a723158201f6149b03584a1a0497f59c80b61e714d0e5c2ceb8668b1d6b301e31cf3043a264736f6c63430005110032";
    static readonly abi: {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): KIP37HolderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): KIP37Holder;
}
export {};
//# sourceMappingURL=KIP37Holder__factory.d.ts.map