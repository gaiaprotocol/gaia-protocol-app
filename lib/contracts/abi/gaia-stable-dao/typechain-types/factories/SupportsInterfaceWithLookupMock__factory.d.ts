import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SupportsInterfaceWithLookupMock, SupportsInterfaceWithLookupMockInterface } from "../SupportsInterfaceWithLookupMock";
declare type SupportsInterfaceWithLookupMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SupportsInterfaceWithLookupMock__factory extends ContractFactory {
    constructor(...args: SupportsInterfaceWithLookupMockConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SupportsInterfaceWithLookupMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SupportsInterfaceWithLookupMock;
    connect(signer: Signer): SupportsInterfaceWithLookupMock__factory;
    static readonly contractName: "SupportsInterfaceWithLookupMock";
    readonly contractName: "SupportsInterfaceWithLookupMock";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061002a6301ffc9a760e01b6001600160e01b0361002f16565b61009d565b6001600160e01b031980821614156100785760405162461bcd60e51b815260040180806020018281038252602e81526020018061019c602e913960400191505060405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b60f1806100ab6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806301ffc9a7146037578063d81037cd14606f575b600080fd5b605b60048036036020811015604b57600080fd5b50356001600160e01b0319166092565b604080519115158252519081900360200190f35b607560b1565b604080516001600160e01b03199092168252519081900360200190f35b6001600160e01b03191660009081526020819052604090205460ff1690565b6301ffc9a760e01b8156fea265627a7a72315820ce14f0a064ecef095fe00298264095c081695c5f2fee89891755f81245855aa164736f6c634300051100324b49503133496e7465726661636573537570706f727465643a20696e76616c696420696e74657266616365206964";
    static readonly abi: ({
        inputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    })[];
    static createInterface(): SupportsInterfaceWithLookupMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SupportsInterfaceWithLookupMock;
}
export {};
//# sourceMappingURL=SupportsInterfaceWithLookupMock__factory.d.ts.map