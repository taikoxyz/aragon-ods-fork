import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import ReactDOM from 'react-dom';
import { IconType } from '../../icon';
import { TextAreaRichText, type ITextAreaRichTextProps } from './textAreaRichText';

describe('<TextAreaRichText /> component', () => {
    (global.ClipboardEvent as unknown) = class ClipboardEventMock {};
    (global.DragEvent as unknown) = class DragEventMock {};

    const createPortalMock = jest.spyOn(ReactDOM, 'createPortal');

    afterEach(() => {
        createPortalMock.mockReset();
    });

    const createTestComponent = (props?: Partial<ITextAreaRichTextProps>) => {
        const completeProps: ITextAreaRichTextProps = { ...props };

        return <TextAreaRichText {...completeProps} />;
    };

    it('renders a textbox with the specified id', async () => {
        const id = 'testid';
        render(createTestComponent({ id }));
        const component = await screen.findByRole('textbox');
        expect(component).toBeInTheDocument();
        expect(component.getAttribute('contenteditable')).toEqual('true');
        expect(component.getAttribute('aria-labelledby')).toEqual(id);
    });

    it('renders the rich text actions', () => {
        render(createTestComponent());
        expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
    });

    it('disables the textbox when the disabled property is set to true', async () => {
        const disabled = true;
        render(createTestComponent({ disabled }));
        const textbox = await screen.findByRole('textbox');
        expect(textbox.getAttribute('contenteditable')).toEqual('false');
    });

    it('generates a random id for the textbox when the id property is not set', async () => {
        render(createTestComponent());
        const textbox = await screen.findByRole('textbox');
        expect(textbox.getAttribute('aria-labelledby')).toBeDefined();
    });

    it('calls the onChange property on input change', async () => {
        const onChange = jest.fn();
        render(createTestComponent({ onChange }));
        fireEvent.input(await screen.findByRole('textbox'), 'test');
        expect(onChange).toHaveBeenCalled();
    });

    it('renders the textarea as a React portal on expand action click', async () => {
        const user = userEvent.setup();
        render(createTestComponent());
        await user.click(screen.getByTestId(IconType.EXPAND));
        expect(createPortalMock).toHaveBeenCalled();
        expect(document.body.style.overflow).toEqual('hidden');
        expect(document.body.style.pointerEvents).toEqual('auto');
    });

    it('resets the expanded state on ESC key down', async () => {
        const user = userEvent.setup();
        render(createTestComponent());
        await user.click(screen.getByTestId(IconType.EXPAND));
        await user.keyboard('{Escape}');
        expect(document.body.style.overflow).toEqual('auto');
    });
});
