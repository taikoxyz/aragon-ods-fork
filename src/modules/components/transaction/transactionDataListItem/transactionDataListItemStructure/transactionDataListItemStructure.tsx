import classNames from 'classnames';
import { useChains } from 'wagmi';
import {
    AvatarIcon,
    DataList,
    DateFormat,
    IconType,
    NumberFormat,
    Spinner,
    formatterUtils,
    type AvatarIconVariant,
} from '../../../../../core';
import {
    TransactionStatus,
    TransactionType,
    type ITransactionDataListItemProps,
} from './transactionDataListItemStructure.api';

const txHeadingStringList: Record<TransactionType, string> = {
    [TransactionType.DEPOSIT]: 'Deposit',
    [TransactionType.WITHDRAW]: 'Withdraw',
    [TransactionType.ACTION]: 'Smart contract action',
};

const txIconTypeList: Record<TransactionType, IconType> = {
    [TransactionType.DEPOSIT]: IconType.DEPOSIT,
    [TransactionType.WITHDRAW]: IconType.WITHDRAW,
    [TransactionType.ACTION]: IconType.BLOCKCHAIN_SMARTCONTRACT,
};

const txVariantList: Record<TransactionType, AvatarIconVariant> = {
    [TransactionType.DEPOSIT]: 'success',
    [TransactionType.WITHDRAW]: 'warning',
    [TransactionType.ACTION]: 'info',
};

export const TransactionDataListItemStructure: React.FC<ITransactionDataListItemProps> = (props) => {
    const {
        chainId,
        tokenAddress,
        tokenSymbol,
        tokenAmount,
        tokenPrice,
        type = TransactionType.ACTION,
        status = TransactionStatus.PENDING,
        // TO-DO: implement formatter decision
        date,
        hash,
        href,
        className,
        ...otherProps
    } = props;
    const chains = useChains();

    const matchingChain = chains?.find((chain) => chain.id === chainId);
    const blockExplorerBaseUrl = matchingChain?.blockExplorers?.default?.url;
    const blockExplorerAssembledHref = blockExplorerBaseUrl ? `${blockExplorerBaseUrl}/tx/${hash}` : undefined;

    const parsedHref = blockExplorerAssembledHref ?? href;

    const formattedTokenValue = formatterUtils.formatNumber(tokenAmount, {
        format: NumberFormat.TOKEN_AMOUNT_SHORT,
    });

    const fiatValue = Number(tokenAmount ?? 0) * Number(tokenPrice ?? 0);
    const formattedTokenPrice = formatterUtils.formatNumber(fiatValue, {
        format: NumberFormat.FIAT_TOTAL_SHORT,
    });

    const formattedTokenAmount =
        type === TransactionType.ACTION || tokenAmount == null ? '-' : `${formattedTokenValue} ${tokenSymbol}`;

    return (
        <DataList.Item
            className={classNames('px-4 py-0 md:px-6', className)}
            href={parsedHref}
            target="_blank"
            {...otherProps}
        >
            <div className="flex w-full justify-between py-3 md:py-4">
                <div className="flex items-center gap-x-3 md:gap-x-4">
                    {status === TransactionStatus.SUCCESS && (
                        <AvatarIcon
                            variant={txVariantList[type]}
                            icon={txIconTypeList[type]}
                            responsiveSize={{ md: 'md' }}
                        />
                    )}
                    {status === TransactionStatus.FAILED && (
                        <AvatarIcon variant="critical" icon={IconType.CLOSE} responsiveSize={{ md: 'md' }} />
                    )}
                    {status === TransactionStatus.PENDING && (
                        <div className="flex size-6 shrink-0 items-center justify-center md:size-8">
                            <Spinner className="transition" variant="neutral" responsiveSize={{ md: 'lg' }} />
                        </div>
                    )}
                    <div className="flex w-full flex-col items-start gap-y-0.5">
                        <span className="text-sm font-normal leading-tight text-neutral-800 md:text-base">
                            {txHeadingStringList[type]}
                        </span>
                        <p className="text-sm font-normal leading-tight text-neutral-500 md:text-base">
                            {formatterUtils.formatDate(date, { format: DateFormat.YEAR_MONTH_DAY_TIME })}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-end gap-y-0.5 truncate">
                    <span className="text-sm font-normal leading-tight text-neutral-800 md:text-base">
                        {formattedTokenAmount}
                    </span>
                    <span className="text-sm font-normal leading-tight text-neutral-500 md:text-base">
                        {formattedTokenPrice}
                    </span>
                </div>
            </div>
        </DataList.Item>
    );
};
