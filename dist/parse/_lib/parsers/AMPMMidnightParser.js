import { Parser } from '../Parser';
import { dayPeriodEnumToHours } from '../utils';
export class AMPMMidnightParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 80;
        this.incompatibleTokens = ['a', 'B', 'H', 'k', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'b':
            case 'bb':
            case 'bbb':
                return (match.dayPeriod(dateString, {
                    width: 'abbreviated',
                    context: 'formatting',
                }) ||
                    match.dayPeriod(dateString, {
                        width: 'narrow',
                        context: 'formatting',
                    }));
            case 'bbbbb':
                return match.dayPeriod(dateString, {
                    width: 'narrow',
                    context: 'formatting',
                });
            case 'bbbb':
            default:
                return (match.dayPeriod(dateString, {
                    width: 'wide',
                    context: 'formatting',
                }) ||
                    match.dayPeriod(dateString, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    match.dayPeriod(dateString, {
                        width: 'narrow',
                        context: 'formatting',
                    }));
        }
    }
    set(date, _flags, value) {
        date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
        return date;
    }
}
