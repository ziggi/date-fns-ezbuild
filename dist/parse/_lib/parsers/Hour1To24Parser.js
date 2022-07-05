import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits } from '../utils';
export class Hour1To24Parser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 70;
        this.incompatibleTokens = ['a', 'b', 'h', 'H', 'K', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'k':
                return parseNumericPattern(numericPatterns.hour24h, dateString);
            case 'ko':
                return match.ordinalNumber(dateString, { unit: 'hour' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 24;
    }
    set(date, _flags, value) {
        const hours = value <= 24 ? value % 24 : value;
        date.setUTCHours(hours, 0, 0, 0);
        return date;
    }
}
