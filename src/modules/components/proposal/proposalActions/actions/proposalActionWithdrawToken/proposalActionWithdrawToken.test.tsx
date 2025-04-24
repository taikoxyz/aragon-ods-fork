import { render, screen } from '@testing-library/react';
import { AssetTransfer } from '../../../../asset';
import { generateProposalActionWithdrawToken } from '../generators/proposalActionWithdrawToken';
import { type IProposalActionWithdrawTokenProps, ProposalActionWithdrawToken } from './proposalActionWithdrawToken';

jest.mock('../../../../asset', () => ({
    AssetTransfer: jest.fn(() => <div>Mock AssetTransfer</div>),
}));

describe('<ProposalActionWithdrawToken /> component', () => {
    const createTestComponent = (props?: Partial<IProposalActionWithdrawTokenProps>) => {
        const completeProps: IProposalActionWithdrawTokenProps = {
            action: generateProposalActionWithdrawToken(),
            ...props,
        };

        return <ProposalActionWithdrawToken {...completeProps} />;
    };

    it('renders the AssetTransfer component', () => {
        render(createTestComponent());
        expect(screen.getByText('Mock AssetTransfer')).toBeInTheDocument();
    });

    it('passes correct props to AssetTransfer', () => {
        const sender = { address: '0x1D03D98c0aac1f83860cec5156116FE68725642E' };
        const receiver = { address: '0x1D03D98c0aac1f83860cec5156116FE687259999' };
        const token = {
            name: 'Bitcoin',
            symbol: 'BTC',
            logo: 'btc-logo.png',
            decimals: 8,
            priceUsd: '50000',
            address: '0x1234567890abcdef1234567890abcdef12345678',
        };
        const amount = '10';
        const action = generateProposalActionWithdrawToken({
            sender,
            receiver,
            token,
            amount,
        });

        render(createTestComponent({ action }));

        expect(AssetTransfer).toHaveBeenCalledWith(
            expect.objectContaining({
                sender: action.sender,
                recipient: action.receiver,
                assetName: action.token.name,
                assetAmount: action.amount,
                assetSymbol: action.token.symbol,
                assetIconSrc: action.token.logo,
                hash: '',
            }),
            expect.any(Object),
        );
    });
});
