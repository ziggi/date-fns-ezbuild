import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits } from '../utils';
export class MinuteParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 60;
        this.incompatibleTokens = ['t', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'm':
                return parseNumericPattern(numericPatterns.minute, dateString);
            case 'mo':
                return match.ordinalNumber(dateString, { unit: 'minute' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 59;
    }
    set(date, _flags, value) {
        date.setUTCMinutes(value, 0, 0);
        return date;
    }
}
