import { render, screen } from '@testing-library/react';
import { StateSkeletonCircular, type IStateSkeletonCircularProps } from './stateSkeletonCircular';

describe('<StateSkeletonCircular /> component', () => {
    const createTestComponent = (props?: Partial<IStateSkeletonCircularProps>) => {
        const completeProps = { ...props };
        return <StateSkeletonCircular {...completeProps} />;
    };

    it('renders the skeleton element without crashing', () => {
        render(createTestComponent());
        expect(screen.getByTestId('stateSkeletonCircular')).toBeInTheDocument();
    });
});
