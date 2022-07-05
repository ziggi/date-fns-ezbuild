import { Parser } from '../Parser';
import { dayPeriodEnumToHours } from '../utils';
// in the morning, in the afternoon, in the evening, at night
export class DayPeriodParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 80;
        this.incompatibleTokens = ['a', 'b', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'B':
            case 'BB':
            case 'BBB':
                return (match.dayPeriod(dateString, {
                    width: 'abbreviated',
                    context: 'formatting',
                }) ||
                    match.dayPeriod(dateString, {
                        width: 'narrow',
                        context: 'formatting',
                    }));
            case 'BBBBB':
                return match.dayPeriod(dateString, {
                    width: 'narrow',
                    context: 'formatting',
                });
            case 'BBBB':
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
