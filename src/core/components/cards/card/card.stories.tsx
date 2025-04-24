import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './card';

const meta: Meta<typeof Card> = {
    title: 'Core/Components/Cards/Card',
    component: Card,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/jfKRr1V9evJUp1uBeyP3Zz/v1.0.0?node-id=10157-27011&t=RVJHJFTrLMnhgYnJ-4',
        },
    },
};

type Story = StoryObj<typeof Card>;

/**
 * Default usage example of the Card component.
 */
export const Default: Story = {
    args: {
        className: 'min-w-[320px]',
        children: (
            <div className="flex flex-col items-center p-2">
                <p className="text-xs font-semibold leading-normal">Example</p>
                <p className="text-xs font-normal leading-normal">Description</p>
            </div>
        ),
    },
};

export default meta;
