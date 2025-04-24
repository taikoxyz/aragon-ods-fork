import type { Meta, StoryObj } from '@storybook/react';
import { VoteProposalDataListItem } from '..';
import { DataList } from '../../../../../core';

const meta: Meta<typeof VoteProposalDataListItem.Skeleton> = {
    title: 'Modules/Components/Vote/VoteProposalDataListItem/VoteProposalDataListItem.Skeleton',
    component: VoteProposalDataListItem.Skeleton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/ISSDryshtEpB7SUSdNqAcw/Aragon-ODS?node-id=17239-29368&m',
        },
    },
};

type Story = StoryObj<typeof VoteProposalDataListItem.Skeleton>;

/**
 * Default usage example of the VoteProposalDataListItem.Skeleton component.
 */
export const Default: Story = {
    render: () => (
        <DataList.Root entityLabel="Vote" state="initialLoading" pageSize={1}>
            <DataList.Container SkeletonElement={VoteProposalDataListItem.Skeleton} />
        </DataList.Root>
    ),
};

export default meta;
