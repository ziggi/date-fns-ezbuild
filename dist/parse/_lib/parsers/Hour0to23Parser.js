import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits } from '../utils';
export class Hour0to23Parser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 70;
        this.incompatibleTokens = ['a', 'b', 'h', 'K', 'k', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'H':
                return parseNumericPattern(numericPatterns.hour23h, dateString);
            case 'Ho':
                return match.ordinalNumber(dateString, { unit: 'hour' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 23;
    }
    set(date, _flags, value) {
        date.setUTCHours(value, 0, 0, 0);
        return date;
    }
}
