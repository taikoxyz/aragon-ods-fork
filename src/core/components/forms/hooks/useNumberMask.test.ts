import { renderHook } from '@testing-library/react';
import type { InputMask } from 'imask/esm/index';
import * as ReactIMask from 'react-imask';
import { formatterUtils } from '../../../utils';
import { useNumberMask, type IUseNumberMaskResult } from './useNumberMask';

// Mock react-imask library to be able to spy on the useIMask hook
jest.mock('react-imask', () => ({ __esModule: true, ...jest.requireActual('react-imask') }));

describe('useNumberMask hook', () => {
    const maskMock = jest.spyOn(ReactIMask, 'useIMask');
    const formatNumberMock = jest.spyOn(formatterUtils, 'formatNumber');

    beforeEach(() => {
        const maskResult = { setValue: jest.fn() } as unknown as IUseNumberMaskResult;
        maskMock.mockReturnValue(maskResult);
    });

    afterEach(() => {
        maskMock.mockReset();
        formatNumberMock.mockReset();
    });

    it('returns the result of the useIMask hook', () => {
        const maskResult = { setValue: jest.fn(), setUnmaskedValue: jest.fn() } as unknown as IUseNumberMaskResult;
        maskMock.mockReturnValue(maskResult);
        const { result } = renderHook(() => useNumberMask({}));
        expect(result.current).toEqual(maskResult);
    });

    it('sets the mask to be a number mask with decimals', () => {
        renderHook(() => useNumberMask({}));
        const expectedNumberBlock = { num: { mask: Number, scale: expect.any(Number) } };
        expect(maskMock).toHaveBeenCalledWith(
            expect.objectContaining({ mask: 'num', blocks: expectedNumberBlock }),
            expect.anything(),
        );
    });

    it('sets the min and max params to the mask when defined', () => {
        const min = 0;
        const max = 100;
        renderHook(() => useNumberMask({ min, max }));
        const expectedNumberBlock = { num: expect.objectContaining({ min, max }) };
        expect(maskMock).toHaveBeenCalledWith(
            expect.objectContaining({ blocks: expectedNumberBlock }),
            expect.anything(),
        );
    });

    it('sets the thousand and decimal separator using the current locale', () => {
        const thousandsSeparator = ' ';
        const radix = '.';
        const formattedNumber = `100${thousandsSeparator}000${radix}1`;
        formatNumberMock.mockReturnValue(formattedNumber);
        renderHook(() => useNumberMask({}));
        const expectedNumberBlock = { num: expect.objectContaining({ thousandsSeparator, radix }) };
        expect(maskMock).toHaveBeenCalledWith(
            expect.objectContaining({ blocks: expectedNumberBlock }),
            expect.anything(),
        );
    });

    it('sets the defined prefix and suffix on the mask', () => {
        const prefix = '>';
        const suffix = 'ETH';
        renderHook(() => useNumberMask({ prefix, suffix }));
        expect(maskMock).toHaveBeenCalledWith(
            expect.objectContaining({ mask: `${prefix} num ${suffix}` }),
            expect.anything(),
        );
    });

    it('correctly set the mask when only suffix is set', () => {
        const suffix = '%';
        renderHook(() => useNumberMask({ suffix }));
        expect(maskMock).toHaveBeenCalledWith(expect.objectContaining({ mask: `num ${suffix}` }), expect.anything());
    });

    it('updates the mask value on value property change for controlled inputs', () => {
        const value = '100';
        const setValue = jest.fn();
        const maskResult = { setValue } as unknown as IUseNumberMaskResult;
        maskMock.mockReturnValue(maskResult);

        const { rerender } = renderHook((props) => useNumberMask(props), { initialProps: { value } });
        expect(setValue).toHaveBeenCalledWith(value);

        const newValue = '101';
        rerender({ value: newValue });
        expect(setValue).toHaveBeenCalledWith(newValue);
    });

    it('calls the onChange property with the unmasked value when value is valid', () => {
        const onChange = jest.fn();
        const maskValue = { unmaskedValue: '291829', updateOptions: jest.fn() } as unknown as InputMask;
        renderHook(() => useNumberMask({ onChange }));
        const { onAccept } = maskMock.mock.calls[0][1] ?? {};
        onAccept?.('', maskValue);
        expect(onChange).toHaveBeenCalledWith(maskValue.unmaskedValue);
    });

    it('updates the lazy option to force displaying the mask pattern when new value is not empty', () => {
        const onChange = jest.fn();
        const maskValue = { unmaskedValue: '1', updateOptions: jest.fn() } as unknown as InputMask;
        renderHook(() => useNumberMask({ onChange }));
        const { onAccept } = maskMock.mock.calls[0][1] ?? {};
        onAccept?.('', maskValue);
        expect(maskValue.updateOptions).toHaveBeenCalledWith({ lazy: false });
    });

    it('updates the lazy option to hide the mask pattern when new value is empty', () => {
        const onChange = jest.fn();
        const maskValue = { unmaskedValue: '', updateOptions: jest.fn() } as unknown as InputMask;
        renderHook(() => useNumberMask({ onChange }));
        const { onAccept } = maskMock.mock.calls[0][1] ?? {};
        onAccept?.('', maskValue);
        expect(maskValue.updateOptions).toHaveBeenCalledWith({ lazy: true });
    });
});
