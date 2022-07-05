import { Parser } from '../Parser';
import { timezonePatterns } from '../constants';
import { parseTimezonePattern } from '../utils';
// Timezone (ISO-8601)
export class ISOTimezoneParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 10;
        this.incompatibleTokens = ['t', 'T', 'X'];
    }
    parse(dateString, token) {
        switch (token) {
            case 'x':
                return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
            case 'xx':
                return parseTimezonePattern(timezonePatterns.basic, dateString);
            case 'xxxx':
                return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
            case 'xxxxx':
                return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
            case 'xxx':
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
