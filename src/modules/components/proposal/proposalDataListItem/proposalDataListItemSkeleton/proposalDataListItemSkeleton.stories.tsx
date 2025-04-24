import type { Meta, StoryObj } from '@storybook/react';
import { DataList, ProposalDataListItem } from '../../../../..';

const meta: Meta<typeof ProposalDataListItem.Skeleton> = {
    title: 'Modules/Components/Proposal/ProposalDataListItem/ProposalDataListItem.Skeleton',
    component: ProposalDataListItem.Skeleton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/P0GeJKqILL7UXvaqu5Jj7V/v1.1.0?type=design&node-id=16287-21749&mode=design&t=8BGCESGcufn0gpI9-4',
        },
    },
};

type Story = StoryObj<typeof ProposalDataListItem.Skeleton>;

/**
 * Default usage example of the ProposalDataListItemStructureSkeleton component.
 */
export const Default: Story = {
    args: {},
    render: () => (
        <DataList.Root entityLabel="Proposal" state="initialLoading" pageSize={1}>
            <DataList.Container SkeletonElement={ProposalDataListItem.Skeleton} />
        </DataList.Root>
    ),
};

export default meta;
