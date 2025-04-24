import { type Accept } from 'react-dropzone';
import { type IInputContainerBaseProps } from '../inputContainer';
export declare enum InputFileAvatarError {
    SQUARE_ONLY = "square-only",
    WRONG_DIMENSION = "wrong-dimension",
    UNKNOWN_ERROR = "unknown-file-error",
    FILE_INVALID_TYPE = "file-invalid-type",
    TOO_MANY_FILES = "too-many-files",
    FILE_TOO_LARGE = "file-too-large"
}
export interface IInputFileAvatarProps extends Pick<IInputContainerBaseProps, 'alert' | 'label' | 'helpText' | 'isOptional' | 'variant' | 'disabled'> {
    /**
     * Function that is called when a file is selected. Passes the file to the parent component.
     * If the file is rejected, the function is not called.
     * If the file is accepted, the function is called with the file as an argument.
     */
    onFileSelect?: (file: File) => void;
    /**
     * Function that is called when a file is rejected. Passes the error message to the parent component.
     */
    onFileError?: (error: InputFileAvatarError) => void;
    /**
     * Allowed file extensions, it must be an object with the keys set to the MIME type
     * and the values an array of file extensions (see https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker#accept)
     * @default { 'image/png': [], 'image/gif': [], 'image/jpeg': ['.jpg', '.jpeg'] }
     */
    acceptedFileTypes?: Accept;
    /**
     * Maximum file size in bytes (e.g. 2097152 bytes | 2 * 1024 ** 2 = 2MiB).
     */
    maxFileSize?: number;
    /**
     * Minimum dimension of the image in pixels.
     */
    minDimension?: number;
    /**
     * Maximum dimension of the image in pixels.
     */
    maxDimension?: number;
    /**
     * If true, only square images are accepted.
     */
    onlySquare?: boolean;
    /**
     * Optional ID for the file avatar input.
     */
    id?: string;
}
