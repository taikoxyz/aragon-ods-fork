import type { Meta, StoryObj } from '@storybook/react';
import { DataList } from '../../../../../core';
import { DaoDataListItem } from '../../daoDataListItem';

const meta: Meta<typeof DaoDataListItem.Skeleton> = {
    title: 'Modules/Components/Dao/DaoDataListItem/DaoDataListItem.Skeleton',
    component: DaoDataListItem.Skeleton,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/ISSDryshtEpB7SUSdNqAcw/branch/P0GeJKqILL7UXvaqu5Jj7V/Aragon-ODS?type=design&node-id=14367%3A10050&mode=design&t=rWmhVzPc3Ay010jV-1',
        },
    },
};

type Story = StoryObj<typeof DaoDataListItem.Skeleton>;

/**
 * Default usage example of the DaoDataListItemSkeleton component.
 */
export const Default: Story = {
    args: {},
    render: () => (
        <DataList.Root entityLabel="DAO" state="initialLoading" pageSize={1}>
            <DataList.Container SkeletonElement={DaoDataListItem.Skeleton} />
        </DataList.Root>
    ),
};

export default meta;
