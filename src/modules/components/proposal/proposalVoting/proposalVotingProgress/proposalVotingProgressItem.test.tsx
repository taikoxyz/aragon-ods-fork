import { render, screen } from '@testing-library/react';
import { IconType } from '../../../../../core';
import { type IProposalVotingProgressItemProps, ProposalVotingProgressItem } from './proposalVotingProgressItem';

describe('<ProposalVotingProgressItem /> component', () => {
    const createTestComponent = (props?: Partial<IProposalVotingProgressItemProps>) => {
        const completeProps: IProposalVotingProgressItemProps = {
            name: 'name',
            description: { value: null, text: 'text' },
            value: 0,
            ...props,
        };

        return <ProposalVotingProgressItem {...completeProps} />;
    };

    it('renders the progress name, value and description', () => {
        const name = 'Yes';
        const value = 44;
        const description = { value: 10, text: 'progress description' };
        render(createTestComponent({ name, value, description }));
        const progress = screen.getByRole('progressbar');
        expect(progress).toBeInTheDocument();
        expect(progress.dataset.value).toEqual(value.toString());
        expect(screen.getByText(name)).toBeInTheDocument();
        expect(screen.getByText(description.value)).toBeInTheDocument();
        expect(screen.getByText(description.text)).toBeInTheDocument();
    });

    it('renders the value in percentage when the showPercentage prop is set to true', () => {
        const showPercentage = true;
        const value = 67;
        render(createTestComponent({ showPercentage, value }));
        expect(screen.getByText('67%')).toBeInTheDocument();
    });

    it('renders a checkmark icon when showStatusIcon is set to true and value is greater or equal to indicator value', () => {
        const value = 59;
        const thresholdIndicator = 54;
        const showStatusIcon = true;
        const { rerender } = render(createTestComponent({ value, thresholdIndicator, showStatusIcon }));
        expect(screen.getByTestId(IconType.CHECKMARK)).toBeInTheDocument();

        const newValue = thresholdIndicator;
        rerender(createTestComponent({ value: newValue, thresholdIndicator, showStatusIcon }));
        expect(screen.getByTestId(IconType.CHECKMARK)).toBeInTheDocument();
    });

    it('defaults indicator value to 100 and renders a checkmark icon when value is 100', () => {
        const value = 100;
        const thresholdIndicator = undefined;
        const showStatusIcon = true;
        render(createTestComponent({ value, thresholdIndicator, showStatusIcon }));
        expect(screen.getByTestId(IconType.CHECKMARK)).toBeInTheDocument();
    });

    it('renders a close icon when showStatusIcon is set to true and value is lower than indicator value', () => {
        const value = 45;
        const thresholdIndicator = 50;
        const showStatusIcon = true;
        render(createTestComponent({ value, thresholdIndicator, showStatusIcon }));
        expect(screen.getByTestId(IconType.CLOSE)).toBeInTheDocument();
    });

    it('correctly formats the percentage value', () => {
        const showPercentage = true;
        const value = 1234;
        render(createTestComponent({ showPercentage, value }));
        expect(screen.getByText('1,234%')).toBeInTheDocument();
    });
});
