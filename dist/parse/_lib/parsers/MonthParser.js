import { mapValue, parseNDigits, parseNumericPattern } from '../utils';
import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
export class MonthParser extends Parser {
    constructor() {
        super(...arguments);
        this.incompatibleTokens = [
            'Y',
            'R',
            'q',
            'Q',
            'L',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T',
        ];
        this.priority = 110;
    }
    parse(dateString, token, match) {
        const valueCallback = (value) => value - 1;
        switch (token) {
            // 1, 2, ..., 12
            case 'M':
                return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback);
            // 01, 02, ..., 12
            case 'MM':
                return mapValue(parseNDigits(2, dateString), valueCallback);
            // 1st, 2nd, ..., 12th
            case 'Mo':
                return mapValue(match.ordinalNumber(dateString, {
                    unit: 'month',
                }), valueCallback);
            // Jan, Feb, ..., Dec
            case 'MMM':
                return (match.month(dateString, {
                    width: 'abbreviated',
                    context: 'formatting',
                }) ||
                    match.month(dateString, { width: 'narrow', context: 'formatting' }));
            // J, F, ..., D
            case 'MMMMM':
                return match.month(dateString, {
                    width: 'narrow',
                    context: 'formatting',
                });
            // January, February, ..., December
            case 'MMMM':
            default:
                return (match.month(dateString, { width: 'wide', context: 'formatting' }) ||
                    match.month(dateString, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    match.month(dateString, { width: 'narrow', context: 'formatting' }));
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        date.setUTCMonth(value, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
