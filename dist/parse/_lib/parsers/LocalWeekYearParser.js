import { Parser } from '../Parser';
import { parseNDigits, normalizeTwoDigitYear, mapValue } from '../utils';
import getUTCWeekYear from '../../../_lib/getUTCWeekYear';
import startOfUTCWeek from '../../../_lib/startOfUTCWeek';
// Local week-numbering year
export class LocalWeekYearParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 130;
        this.incompatibleTokens = [
            'y',
            'R',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T',
        ];
    }
    parse(dateString, token, match) {
        const valueCallback = (year) => ({
            year,
            isTwoDigitYear: token === 'YY',
        });
        switch (token) {
            case 'Y':
                return mapValue(parseNDigits(4, dateString), valueCallback);
            case 'Yo':
                return mapValue(match.ordinalNumber(dateString, {
                    unit: 'year',
                }), valueCallback);
            default:
                return mapValue(parseNDigits(token.length, dateString), valueCallback);
        }
    }
    validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
    }
    set(date, flags, value, options) {
        const currentYear = getUTCWeekYear(date, options);
        if (value.isTwoDigitYear) {
            const normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
            date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
            date.setUTCHours(0, 0, 0, 0);
            return startOfUTCWeek(date, options);
        }
        const year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
    }
}
