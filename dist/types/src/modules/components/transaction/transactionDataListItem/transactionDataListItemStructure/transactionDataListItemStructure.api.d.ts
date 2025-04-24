import { type Hash } from 'viem';
import { type IDataListItemProps } from '../../../../../core';
export declare enum TransactionStatus {
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}
export declare enum TransactionType {
    DEPOSIT = "DEPOSIT",
    WITHDRAW = "WITHDRAW",
    ACTION = "ACTION"
}
export interface ITransactionDataListItemProps extends IDataListItemProps {
    /**
     * The chain ID of the transaction.
     */
    chainId: number;
    /**
     * The address of the token.
     */
    tokenAddress?: string;
    /**
     * The symbol of the token, e.g. 'ETH' as a string
     */
    tokenSymbol?: string;
    /**
     * The token value in the transaction.
     */
    tokenAmount?: number | string;
    /**
     * The estimated fiat value of the transaction.
     */
    tokenPrice?: number | string;
    /**
     * The type of transaction.
     * @default TransactionType.ACTION
     */
    type?: TransactionType;
    /**
     * The current status of a blockchain transaction on the network.
     * @default TransactionStatus.PENDING
     */
    status?: TransactionStatus;
    /**
     *  Date of transaction in ISO format or as a timestamp
     */
    date: number | string;
    /**
     * The transaction hash.
     */
    hash: Hash;
}
