import { Parser } from '../Parser';
import { mapValue, parseNDigits } from '../utils';
export class FractionOfSecondParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 30;
        this.incompatibleTokens = ['t', 'T'];
    }
    parse(dateString, token) {
        const valueCallback = (value) => Math.floor(value * Math.pow(10, -token.length + 3));
        return mapValue(parseNDigits(token.length, dateString), valueCallback);
    }
    set(date, _flags, value) {
        date.setUTCMilliseconds(value);
        return date;
    }
}
