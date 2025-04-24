import { type ComponentProps } from 'react';
/**
 * Different states of the DataList component:
 * - InitialLoading: component is fetching data for the first time and no data has been fetched yet;
 * - Loading: initial data has already been fetched and the user is filtering or sorting the data;
 * - Error: an error has occurred while fetching the data;
 * - Idle: data has been successfully fetched;
 * - Filtered: data has been successfully fetched and one or more filters are applied.
 * - FetchingNextPage: user is loading the next page of the data list;
 */
export type DataListState = 'initialLoading' | 'loading' | 'error' | 'fetchingNextPage' | 'idle' | 'filtered';
export interface IDataListRootProps extends ComponentProps<'div'> {
    /**
     * Total number of items.
     */
    itemsCount?: number;
    /**
     * Number to items to render per page.
     * @default 12
     */
    pageSize?: number;
    /**
     * State of the data list component, @see DataListState.
     * @default idle
     */
    state?: DataListState;
    /**
     * Callback called on load-more button click.
     */
    onLoadMore?: () => void;
    /**
     * Label used for the data list status and pagination.
     */
    entityLabel: string;
}
export declare const DataListRoot: React.FC<IDataListRootProps>;
