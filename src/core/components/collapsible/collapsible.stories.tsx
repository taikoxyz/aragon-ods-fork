import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Collapsible } from './collapsible';

/**
 * Collapsible component that can wrap any content and visually collapse it for space-saving purposes.
 */
const meta: Meta<typeof Collapsible> = {
    title: 'Core/Components/Collapsible',
    component: Collapsible,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/jfKRr1V9evJUp1uBeyP3Zz/v1.0.0?node-id=10157-27011&t=RVJHJFTrLMnhgYnJ-4',
        },
    },
};

type Story = StoryObj<typeof Collapsible>;

/**
 * Default usage example of the Collapsible component.
 */
export const Default: Story = {
    args: { buttonLabelClosed: 'Read more', buttonLabelOpened: 'Read less' },
    render: (args) => (
        <Collapsible {...args}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt.
                Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque. Nulla facilisi. Nullam nec sapien
                nec turpis tincidunt scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla
                nec nunc consectetur tincidunt. Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque.
                Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt. Nulla facilisi. Nullam nec
                sapien nec turpis tincidunt scelerisque. Nulla facilisi. Nullam nec sapien nec turpis tincidunt
                scelerisque.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt.
                Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque. Nulla facilisi. Nullam nec sapien
                nec turpis tincidunt scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla
                nec nunc consectetur tincidunt. Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque.
                Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt.
                Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque. Nulla facilisi. Nullam nec sapien
                nec turpis tincidunt scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla
                nec nunc consectetur tincidunt. Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque.
                Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt. Nulla facilisi. Nullam nec
                sapien nec turpis tincidunt scelerisque. Nulla facilisi. Nullam nec sapien nec turpis tincidunt
                scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec nunc consectetur
                tincidunt. Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque. Nulla facilisi. Nullam
                nec sapien nec turpis tincidunt scelerisque.
            </p>
        </Collapsible>
    ),
};

/**
 * Collapsible component with a short text as the content to show overflow detection.
 */
export const ShortContent: Story = {
    args: { buttonLabelClosed: 'Read more', buttonLabelOpened: 'Read less' },
    render: (args) => (
        <Collapsible {...args}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt.
                Nulla facilisi.
            </p>
        </Collapsible>
    ),
};

/**
 * Collapsible component with an image as the content with defaultOpen true.
 */
export const WithImage: Story = {
    args: {
        buttonLabelClosed: 'See more',
        buttonLabelOpened: 'See less',
        defaultOpen: true,
    },
    render: (args) => (
        <Collapsible {...args}>
            <img
                src="https://source.unsplash.com/800x600/?landscape"
                alt="A beautiful landscape"
                className="h-auto w-full"
            />
        </Collapsible>
    ),
};

/**
 * Controlled usage example of the Collapsible component.
 */
export const Controlled: Story = {
    args: {
        buttonLabelOpened: 'Collapse content',
        buttonLabelClosed: 'Expand content',
        collapsedSize: 'sm',
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);

        const handleToggle = (toggle: boolean) => {
            setIsOpen(toggle);
        };

        return (
            <Collapsible {...args} isOpen={isOpen} onToggle={handleToggle}>
                <p>
                    This is some example content within the Collapsible component. When expanded, the content will be
                    fully visible.
                </p>
                <br />
                <p>
                    Controlled usage ensures that the parent controls the open and closed states and updates the
                    component accordingly.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec nunc consectetur
                    tincidunt. Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque. Nulla facilisi.
                    Nullam nec sapien nec turpis tincidunt scelerisque.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt. Nulla facilisi. Nullam nec sapien nec
                    turpis tincidunt scelerisque. Nulla facilisi. Nullam nec sapien nec turpis tincidunt
                    scelerisque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla nec nunc
                    consectetur tincidunt. Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque. Nulla
                    facilisi. Nullam nec sapien nec turpis tincidunt scelerisque.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Sed ac nulla nec nunc consectetur tincidunt. Nulla facilisi. Nullam nec sapien nec
                    turpis tincidunt scelerisque. Nulla facilisi. Nullam nec sapien nec turpis tincidunt scelerisque.
                </p>
            </Collapsible>
        );
    },
};

export default meta;
