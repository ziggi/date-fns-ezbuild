import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits } from '../utils';
import setUTCWeek from '../../../_lib/setUTCWeek';
import startOfUTCWeek from '../../../_lib/startOfUTCWeek';
// Local week of year
export class LocalWeekParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 100;
        this.incompatibleTokens = [
            'y',
            'R',
            'u',
            'q',
            'Q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T',
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'w':
                return parseNumericPattern(numericPatterns.week, dateString);
            case 'wo':
                return match.ordinalNumber(dateString, { unit: 'week' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value, options) {
        return startOfUTCWeek(setUTCWeek(date, value, options), options);
    }
}
