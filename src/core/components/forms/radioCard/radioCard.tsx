import { RadioGroupIndicator, RadioGroupItem } from '@radix-ui/react-radio-group';
import classNames from 'classnames';
import { forwardRef, type ComponentProps } from 'react';
import { useRandomId } from '../../../hooks';
import { Avatar } from '../../avatars';
import { Icon, IconType } from '../../icon';
import { Tag, type ITagProps } from '../../tag';

export interface IRadioCardProps extends ComponentProps<'button'> {
    /**
     * Radio card avatar image source
     */
    avatar?: string;
    /**
     * Description
     */
    description: string;
    /**
     * Radio label
     */
    label: string;
    /**
     * Radio card tag
     */
    tag?: ITagProps;
    /**
     * The value of the radio item.
     */
    value: string;
    /**
     * Indicates if the radio is disabled.
     */
    disabled?: boolean;
}

export const RadioCard = forwardRef<HTMLButtonElement, IRadioCardProps>((props, ref) => {
    const { value, id, className, tag, avatar, label, description, disabled, ...rest } = props;

    const randomId = useRandomId(id);
    const labelId = `${randomId}-label`;

    const containerClasses = classNames(
        'group h-16 rounded-xl border border-neutral-100 bg-neutral-0 px-4 py-3 shadow-neutral-sm outline-none transition-all md:h-20 md:rounded-2xl md:px-6 md:py-4', // default
        'data-[state=checked]:border-primary-400 data-[state=checked]:shadow-primary', // checked
        'focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset', // focus
        'hover:border-neutral-200 hover:shadow-neutral hover:data-[state=checked]:shadow-primary-md', // hover
        'disabled:border-neutral-200 disabled:bg-neutral-100 disabled:shadow-none', // disabled
        'disabled:data-[state=checked]:border-neutral-300 disabled:data-[state=checked]:shadow-none', // disabled & checked
        className,
    );

    const baseTextClasses =
        'text-sm leading-tight text-left text-neutral-500 md:text-base w-full group-disabled:text-neutral-300 truncate';

    const labelClasses = classNames(
        baseTextClasses,
        'group-data-[state=checked]:text-neutral-800 group-disabled:group-data-[state=checked]:text-neutral-800',
    );

    return (
        <RadioGroupItem
            id={randomId}
            ref={ref}
            value={value}
            disabled={disabled}
            className={containerClasses}
            aria-labelledby={labelId}
            {...rest}
        >
            <div className="flex h-full items-center gap-x-3 md:gap-x-4">
                {avatar && <Avatar size="sm" responsiveSize={{ md: 'md' }} src={avatar} />}
                <div className="flex min-w-0 flex-1 gap-x-0.5 md:gap-x-4">
                    <div className="flex min-w-0 flex-1 flex-col gap-y-0.5 md:gap-y-1">
                        <p className={labelClasses} id={labelId}>
                            {label}
                        </p>
                        <p className={baseTextClasses}>{description}</p>
                    </div>
                    {tag && <Tag {...tag} />}
                </div>
                <span className="h-full">
                    <Icon icon={IconType.RADIO} className="text-neutral-300 group-data-[state=checked]:hidden" />
                    <RadioGroupIndicator>
                        <Icon
                            icon={IconType.RADIO_SELECTED}
                            className="text-primary-400 group-disabled:text-neutral-500"
                        />
                    </RadioGroupIndicator>
                </span>
            </div>
        </RadioGroupItem>
    );
});

RadioCard.displayName = 'RadioCard';
