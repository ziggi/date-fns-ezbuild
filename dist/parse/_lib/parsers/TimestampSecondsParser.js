import { Parser } from '../Parser';
import { parseAnyDigitsSigned } from '../utils';
export class TimestampSecondsParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 40;
        this.incompatibleTokens = '*';
    }
    parse(dateString) {
        return parseAnyDigitsSigned(dateString);
    }
    set(_date, _flags, value) {
        return [new Date(value * 1000), { timestampIsSet: true }];
    }
}
