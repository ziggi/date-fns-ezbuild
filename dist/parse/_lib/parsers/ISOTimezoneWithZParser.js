import { Parser } from '../Parser';
import { timezonePatterns } from '../constants';
import { parseTimezonePattern } from '../utils';
// Timezone (ISO-8601. +00:00 is `'Z'`)
export class ISOTimezoneWithZParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 10;
        this.incompatibleTokens = ['t', 'T', 'x'];
    }
    parse(dateString, token) {
        switch (token) {
            case 'X':
                return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
            case 'XX':
                return parseTimezonePattern(timezonePatterns.basic, dateString);
            case 'XXXX':
                return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
            case 'XXXXX':
                return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
            case 'XXX':
            default:
                return parseTimezonePattern(timezonePatterns.extended, dateString);
        }
    }
    set(date, flags, value) {
        if (flags.timestampIsSet) {
            return date;
        }
        return new Date(date.getTime() - value);
    }
}
