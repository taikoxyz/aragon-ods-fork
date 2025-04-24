import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputNumber } from './inputNumber';

const meta: Meta<typeof InputNumber> = {
    title: 'Core/Components/Forms/InputNumber',
    component: InputNumber,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/ISSDryshtEpB7SUSdNqAcw/branch/jfKRr1V9evJUp1uBeyP3Zz/Aragon-ODS?type=design&node-id=10074-6967&mode=design&t=LRQNgdDVgpUu0QIo-0',
        },
    },
};

type Story = StoryObj<typeof InputNumber>;

/**
 * Default usage example of the `InputNumber` component.
 */
export const Default: Story = {
    args: {
        placeholder: '0',
    },
};

/**
 * Usage example of a controlled `InputNumber` component.
 */
export const Controlled: Story = {
    render: ({ onChange, ...props }) => {
        const [value, setValue] = useState<string>('1');

        return <InputNumber value={value} onChange={setValue} {...props} />;
    },
};

export default meta;
