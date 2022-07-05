import { Parser } from '../Parser';
import { parseNDigitsSigned } from '../utils';
export class ExtendedYearParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 130;
        this.incompatibleTokens = ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T'];
    }
    parse(dateString, token) {
        if (token === 'u') {
            return parseNDigitsSigned(4, dateString);
        }
        return parseNDigitsSigned(token.length, dateString);
    }
    set(date, _flags, value) {
        date.setUTCFullYear(value, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
