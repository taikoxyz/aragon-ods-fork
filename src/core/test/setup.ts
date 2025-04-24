// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'util';
import { testLogger } from './utils';

// Setup test logger
testLogger.setup();

// Globally setup TextEncoder/TextDecoder needed by viem
Object.assign(global, { TextDecoder, TextEncoder });

if (typeof window !== 'undefined') {
    // Mock scrollIntoView function
    HTMLElement.prototype.scrollIntoView = jest.fn();
}
