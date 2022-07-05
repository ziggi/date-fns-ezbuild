import { Parser } from '../Parser';
import { numericPatterns } from '../constants';
import { parseNumericPattern, parseNDigits } from '../utils';
export class Hour0To11Parser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 70;
        this.incompatibleTokens = ['h', 'H', 'k', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'K':
                return parseNumericPattern(numericPatterns.hour11h, dateString);
            case 'Ko':
                return match.ordinalNumber(dateString, { unit: 'hour' });
            default:
                return parseNDigits(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        const isPM = date.getUTCHours() >= 12;
        if (isPM && value < 12) {
            date.setUTCHours(value + 12, 0, 0, 0);
        }
        else {
            date.setUTCHours(value, 0, 0, 0);
        }
        return date;
    }
}
