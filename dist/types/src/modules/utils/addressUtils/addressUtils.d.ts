import { type Address } from 'viem';
export interface IIsAddressParams {
    /**
     * Whether or not to compare the address against its checksum.
     * @default false
     */
    strict?: boolean;
}
declare class AddressUtils {
    /**
     * Checks if the given address is a valid address or not
     * @param address The address to be checked
     * @param options Options for the address check (@see IIsAddressParams)
     * @returns True when the given address is a valid address, false otherwise.
     */
    isAddress: (address?: string, options?: IIsAddressParams) => boolean;
    /**
     * Truncates the input address by displaying the first and last 4 characters.
     * @param address The address to truncate
     * @returns The truncated address when the address input is valid, the address input as is otherwise.
     */
    truncateAddress: (address?: string) => string;
    /**
     * Returns the address on its checksum format
     * @param address The address to be formatted
     * @returns The address in checksum format
     */
    getChecksum: (address?: string) => Address;
    /**
     * Compares two addresses (ignoring checksum) to see if they are the same
     * @param addressOne The first address
     * @param addressTwo The second address
     * @returns true if the addresses are the same, false otherwise
     */
    isAddressEqual: (addressOne?: string, addressTwo?: string) => boolean;
}
export declare const addressUtils: AddressUtils;
export {};
