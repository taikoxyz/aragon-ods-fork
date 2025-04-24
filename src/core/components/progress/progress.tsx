import * as RadixProgress from '@radix-ui/react-progress';
import classNames from 'classnames';
import type { ResponsiveAttributeClassMap } from '../../types';
import { responsiveUtils } from '../../utils';
import type { IProgressProps, ProgressSize, ProgressVariant } from './progress.api';

const responsiveSizeClassNames: ResponsiveAttributeClassMap<ProgressSize> = {
    sm: {
        default: 'h-1',
        sm: 'sm:h-1',
        md: 'md:h-1',
        lg: 'lg:h-1',
        xl: 'xl:h-1',
        '2xl': '2xl:h-1',
    },
    md: {
        default: 'h-2',
        sm: 'sm:h-2',
        md: 'md:h-2',
        lg: 'lg:h-2',
        xl: 'xl:h-2',
        '2xl': '2xl:h-2',
    },
};

const responsiveIndicatorSizeClassNames: ResponsiveAttributeClassMap<ProgressSize> = {
    sm: {
        default: 'h-2',
        sm: 'sm:h-2',
        md: 'md:h-2',
        lg: 'lg:h-2',
        xl: 'xl:h-2',
        '2xl': '2xl:h-2',
    },
    md: {
        default: 'h-4',
        sm: 'sm:h-4',
        md: 'md:h-4',
        lg: 'lg:h-4',
        xl: 'xl:h-4',
        '2xl': '2xl:h-4',
    },
};

const variantToClassNames: Record<ProgressVariant, string> = {
    primary: 'bg-primary-400',
    neutral: 'bg-neutral-400',
    success: 'bg-success-400',
    critical: 'bg-critical-500',
};

export const Progress: React.FC<IProgressProps> = (props) => {
    const {
        value,
        size = 'md',
        responsiveSize,
        className,
        variant = 'primary',
        thresholdIndicator,
        ...otherProps
    } = props;

    const processedValue = Math.min(Math.max(1, value), 100);
    const processedIndicator = thresholdIndicator != null ? Math.min(Math.max(1, thresholdIndicator), 100) : null;

    const indicatorSizeClassNames = responsiveUtils.generateClassNames(
        size,
        responsiveSize,
        responsiveIndicatorSizeClassNames,
    );

    const sizeClassNames = responsiveUtils.generateClassNames(size, responsiveSize, responsiveSizeClassNames);

    const containerClassNames = classNames('relative w-full rounded-xl bg-neutral-100', sizeClassNames, className);
    const indicatorClassNames = classNames('absolute inset-y-0 flex self-center', indicatorSizeClassNames);

    return (
        <RadixProgress.Root value={processedValue} className={containerClassNames} {...otherProps}>
            <RadixProgress.Indicator
                className={classNames(
                    `h-full rounded-l-xl transition-[border-radius,width] duration-500 ease-in-out`,
                    { 'rounded-r-xl': processedValue === 100 },
                    variantToClassNames[variant],
                )}
                style={{ width: `${processedValue}%` }}
            />
            {processedIndicator && (
                <div
                    data-testid="progress-indicator"
                    data-value={processedIndicator}
                    className={indicatorClassNames}
                    style={{ left: `${processedIndicator}%`, transform: 'translateX(-50%)' }}
                >
                    <div className="h-full w-0.5 bg-neutral-50" />
                    <div className="h-full w-0.5 rounded-full bg-neutral-400" />
                    <div className="h-full w-0.5 bg-neutral-50" />
                </div>
            )}
        </RadixProgress.Root>
    );
};
