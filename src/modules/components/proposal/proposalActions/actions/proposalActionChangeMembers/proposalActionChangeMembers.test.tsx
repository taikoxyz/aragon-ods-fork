import { render, screen } from '@testing-library/react';
import { modulesCopy } from '../../../../../assets';
import { ProposalActionType } from '../../proposalActionsTypes';
import { generateProposalActionChangeMembers } from '../generators/proposalActionChangeMembers';
import { type IProposalActionChangeMembersProps, ProposalActionChangeMembers } from './proposalActionChangeMembers';

jest.mock('../../../../member', () => ({
    MemberDataListItem: { Structure: () => <div /> },
}));

describe('<ProposalActionChangeMembers /> component', () => {
    const createTestComponent = (props?: Partial<IProposalActionChangeMembersProps>) => {
        const completeProps: IProposalActionChangeMembersProps = {
            action: generateProposalActionChangeMembers(),
            ...props,
        };

        return <ProposalActionChangeMembers {...completeProps} />;
    };

    it('renders the existing members correctly', () => {
        const currentMembers = 5;
        const action = generateProposalActionChangeMembers({ currentMembers });
        render(createTestComponent({ action }));

        expect(
            screen.getByText(`${currentMembers} ${modulesCopy.proposalActionChangeMembers.members}`),
        ).toBeInTheDocument();
    });

    it('renders correctly for adding members', () => {
        const type = ProposalActionType.ADD_MEMBERS;
        const currentMembers = 5;
        const members = [{ address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' }];
        const action = generateProposalActionChangeMembers({ type, currentMembers, members });
        render(createTestComponent({ action }));

        expect(screen.getByText(modulesCopy.proposalActionChangeMembers.added)).toBeInTheDocument();
        expect(
            screen.getByText(`+${members.length} ${modulesCopy.proposalActionChangeMembers.members}`),
        ).toBeInTheDocument();
    });

    it('renders correctly for removing members', () => {
        const type = ProposalActionType.REMOVE_MEMBERS;
        const currentMembers = 7;
        const members = [{ address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e' }];
        const action = generateProposalActionChangeMembers({ type, currentMembers, members });
        render(createTestComponent({ action }));

        expect(screen.getByText(modulesCopy.proposalActionChangeMembers.removed)).toBeInTheDocument();
        expect(
            screen.getByText(`-${members.length} ${modulesCopy.proposalActionChangeMembers.members}`),
        ).toBeInTheDocument();
    });

    it('renders additional summary information', () => {
        render(createTestComponent());
        expect(screen.getByText(modulesCopy.proposalActionChangeMembers.blockNote)).toBeInTheDocument();
    });
});
