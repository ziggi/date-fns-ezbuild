import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits, isLeapYearIndex } from '../utils';
export class DayOfYearParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.subpriority = 1;
        this.incompatibleTokens = [
            'Y',
            'R',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'I',
            'd',
            'E',
            'i',
            'e',
            'c',
            't',
            'T',
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'D':
            case 'DD':
                return parseNumericPattern(numericPatterns.dayOfYear, dateString);
            case 'Do':
                return match.ordinalNumber(dateString, { unit: 'date' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getUTCFullYear();
        const isLeapYear = isLeapYearIndex(year);
        if (isLeapYear) {
            return value >= 1 && value <= 366;
        }
        else {
            return value >= 1 && value <= 365;
        }
    }
    set(date, _flags, value) {
        date.setUTCMonth(0, value);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
