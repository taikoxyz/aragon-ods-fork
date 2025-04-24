import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
export type DialogAlertVariant = 'critical' | 'info' | 'success' | 'warning';
export interface IDialogAlertRootProps extends ComponentPropsWithoutRef<'div'> {
    /**
     * Children of the component.
     */
    children?: ReactNode;
    /**
     * Additional CSS class names for custom styling of the dialog's content container.
     */
    containerClassName?: string;
    /**
     * Manages the visibility state of the dialog. Should be implemented alongside `onOpenChange` for controlled usage.
     */
    open?: boolean;
    /**
     * Additional CSS class names for custom styling of the overlay behind the dialog.
     */
    overlayClassName?: string;
    /**
     * The visual style variant of the dialog.
     * @default info
     */
    variant?: DialogAlertVariant;
    /**
     * Callback function invoked when the open state of the dialog changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Handler called when focus moves to the trigger after closing the dialog.
     */
    onCloseAutoFocus?: (e: Event) => void;
    /**
     * Handler called when focus moves to the destructive action after opening the dialog.
     */
    onOpenAutoFocus?: (e: Event) => void;
    /**
     * Handler called when the escape key is pressed while the dialog is opened. Closes the dialog by default.
     */
    onEscapeKeyDown?: (e: KeyboardEvent) => void;
    /**
     * Keeps the focus inside the Alert Dialog when set to true.
     * @default true
     */
    useFocusTrap?: boolean;
}
export interface IDialogAlertContext {
    variant: DialogAlertVariant;
}
export declare const DialogAlertContext: import("react").Context<IDialogAlertContext>;
/**
 * `DialogAlert.Root` component.
 */
export declare const DialogAlertRoot: React.FC<IDialogAlertRootProps>;
