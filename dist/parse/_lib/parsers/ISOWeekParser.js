import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits } from '../utils';
import setUTCISOWeek from '../../../_lib/setUTCISOWeek';
import startOfUTCISOWeek from '../../../_lib/startOfUTCISOWeek';
// ISO week of year
export class ISOWeekParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 100;
        this.incompatibleTokens = [
            'y',
            'Y',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'w',
            'd',
            'D',
            'e',
            'c',
            't',
            'T',
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'I':
                return parseNumericPattern(numericPatterns.week, dateString);
            case 'Io':
                return match.ordinalNumber(dateString, { unit: 'week' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value) {
        return startOfUTCISOWeek(setUTCISOWeek(date, value));
    }
}
