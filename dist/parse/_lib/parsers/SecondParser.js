import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits } from '../utils';
export class SecondParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 50;
        this.incompatibleTokens = ['t', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 's':
                return parseNumericPattern(numericPatterns.second, dateString);
            case 'so':
                return match.ordinalNumber(dateString, { unit: 'second' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 59;
    }
    set(date, _flags, value) {
        date.setUTCSeconds(value, 0);
        return date;
    }
}
