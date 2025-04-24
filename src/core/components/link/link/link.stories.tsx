import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const meta: Meta<typeof Link> = {
    title: 'Core/Components/Link/Link',
    component: Link,
    argTypes: {
        href: { control: 'text' },
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/ISSDryshtEpB7SUSdNqAcw/branch/jfKRr1V9evJUp1uBeyP3Zz/Aragon-ODS?type=design&node-id=7958%3A15661&mode=design&t=chS7QmnJNo46KjlP-1',
        },
        docs: {
            description: {
                component: 'Component will auto size text from **14px to 16px** above `md` breakpoint.',
            },
        },
    },
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        children: 'Label',
        href: 'https://aragon.org',
        target: '_blank',
    },
};

export default meta;
