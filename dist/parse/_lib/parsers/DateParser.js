import { isLeapYearIndex, parseNDigits, parseNumericPattern } from '../utils';
import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// Day of the month
export class DateParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.subPriority = 1;
        this.incompatibleTokens = [
            'Y',
            'R',
            'q',
            'Q',
            'w',
            'I',
            'D',
            'i',
            'e',
            'c',
            't',
            'T',
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'd':
                return parseNumericPattern(numericPatterns.date, dateString);
            case 'do':
                return match.ordinalNumber(dateString, { unit: 'date' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getUTCFullYear();
        const isLeapYear = isLeapYearIndex(year);
        const month = date.getUTCMonth();
        if (isLeapYear) {
            return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
        }
        else {
            return value >= 1 && value <= DAYS_IN_MONTH[month];
        }
    }
    set(date, _flags, value) {
        date.setUTCDate(value);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
