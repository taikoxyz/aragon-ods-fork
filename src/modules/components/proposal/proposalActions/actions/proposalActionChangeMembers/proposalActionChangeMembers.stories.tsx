import type { Meta, StoryObj } from '@storybook/react';
import { ProposalActionType } from '../../proposalActionsTypes';
import { generateProposalActionChangeMembers } from '../generators/proposalActionChangeMembers';
import { ProposalActionChangeMembers } from './proposalActionChangeMembers';

const meta: Meta<typeof ProposalActionChangeMembers> = {
    title: 'Modules/Components/Proposal/ProposalActions/Actions/ChangeMembers',
    component: ProposalActionChangeMembers,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/ISSDryshtEpB7SUSdNqAcw/Aragon-ODS?m=auto&t=aAKsoiPV8GlakDa1-1',
        },
    },
};

type Story = StoryObj<typeof ProposalActionChangeMembers>;

/**
 * Usage example of the ProposalActions module component with mocked ChangeMembers action. @default ProposalActionType.ADD_MEMBERS
 */
export const Default: Story = {
    render: () => {
        return <ProposalActionChangeMembers action={generateProposalActionChangeMembers()} />;
    },
};

export const RemoveMembers: Story = {
    render: () => {
        const action = generateProposalActionChangeMembers({
            type: ProposalActionType.REMOVE_MEMBERS,
            members: [
                {
                    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
                },
            ],
        });
        return <ProposalActionChangeMembers action={action} />;
    },
};

export default meta;
