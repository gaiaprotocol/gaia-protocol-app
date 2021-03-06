import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IKIP17Enumerable, IKIP17EnumerableInterface } from "../IKIP17Enumerable";
export declare class IKIP17Enumerable__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): IKIP17EnumerableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IKIP17Enumerable;
}
//# sourceMappingURL=IKIP17Enumerable__factory.d.ts.map