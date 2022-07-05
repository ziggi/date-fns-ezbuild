import { Parser } from '../Parser';
import { parseAnyDigitsSigned } from '../utils';
export class TimestampMillisecondsParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 20;
        this.incompatibleTokens = '*';
    }
    parse(dateString) {
        return parseAnyDigitsSigned(dateString);
    }
    set(_date, _flags, value) {
        return [new Date(value), { timestampIsSet: true }];
    }
}
