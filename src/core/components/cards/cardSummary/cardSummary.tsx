import classNames from 'classnames';
import { AvatarIcon } from '../../avatars';
import { Button } from '../../button';
import { IconType } from '../../icon';
import { Card } from '../card';
import type { ICardSummaryProps } from './cardSummary.api';

export const CardSummary: React.FC<ICardSummaryProps> = (props) => {
    const { icon, value, description, action, isStacked = true, className, ...otherProps } = props;

    const containerClassNames = classNames(
        'grid grid-cols-[auto_max-content] items-center gap-4 p-4 md:px-6 md:py-5',
        { 'grid-cols-[auto_max-content] md:gap-5': isStacked },
        {
            'grid-cols-[auto_max-content] md:grid-flow-col md:grid-cols-[auto_1fr_1fr_max-content] md:gap-6':
                !isStacked,
        },
    );

    return (
        <Card
            className={classNames(
                { 'w-[320px] md:w-[480px]': isStacked },
                { 'w-[320px] md:w-[640px]': !isStacked },
                className,
            )}
            {...otherProps}
        >
            <div className={containerClassNames}>
                <AvatarIcon
                    variant="neutral"
                    icon={icon}
                    size="md"
                    responsiveSize={{ md: 'lg' }}
                    className="self-center"
                />
                <Button
                    variant="tertiary"
                    size="md"
                    responsiveSize={{ md: 'lg' }}
                    iconLeft={IconType.PLUS}
                    onClick={action.onClick}
                    href={action.href}
                >
                    {action.label}
                </Button>
                <div
                    className={classNames(
                        'col-span-2 flex gap-x-2 gap-y-1',
                        { 'flex-col': isStacked },
                        { 'flex-col md:col-start-2 md:flex-row md:items-baseline': !isStacked },
                    )}
                >
                    <p className="text-2xl font-normal leading-tight text-neutral-800 md:text-3xl">{value}</p>
                    <p className="text-base font-normal leading-tight text-neutral-500">{description}</p>
                </div>
            </div>
        </Card>
    );
};
