import classNames from 'classnames';
import React from 'react';
import { Icon } from '../../icon';
import { LinkBase } from '../linkBase';
import type { ILinkProps, LinkVariant } from './link.api';

const variantToLabelClassNames: Record<LinkVariant | 'disabled', string[]> = {
    primary: [
        'text-primary-400 cursor-pointer', // Default
        'hover:text-primary-600', // Hover state
        'active:text-primary-800', // Active state
    ],
    neutral: [
        'text-neutral-500 cursor-pointer', // Default
        'hover:text-neutral-800', // Hover state
        'active:text-neutral-800', // Active state
    ],
    disabled: ['truncate text-neutral-300'],
};

export const Link = React.forwardRef<HTMLAnchorElement, ILinkProps>((props, ref) => {
    const {
        children,
        disabled = false,
        variant = 'primary',
        description,
        href,
        iconRight,
        onClick,
        className,
        target,
        rel,
        ...otherProps
    } = props;

    const processedVariant = disabled ? 'disabled' : variant;
    const linkClassName = classNames(
        'inline-flex max-w-fit flex-col gap-y-0.5 truncate rounded text-sm leading-tight',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset',
        'md:gap-y-1 md:text-base',
        variantToLabelClassNames[processedVariant],
        className,
    );

    const linkRel = target === '_blank' ? `noopener noreferrer ${rel}` : rel;

    return (
        <LinkBase
            ref={ref}
            onClick={!disabled ? onClick : undefined}
            href={!disabled ? href : undefined}
            className={linkClassName}
            target={target}
            rel={linkRel}
            tabIndex={disabled ? -1 : undefined}
            aria-disabled={disabled}
            {...otherProps}
        >
            <div className="flex items-center gap-x-2">
                <span className="truncate">{children}</span>
                {iconRight && <Icon icon={iconRight} size="sm" />}
            </div>
            {description && (
                <p className={classNames('truncate', disabled ? 'text-neutral-300' : 'text-neutral-500')}>
                    {description}
                </p>
            )}
        </LinkBase>
    );
});

Link.displayName = 'Link';
