import { Parser } from '../Parser';
import { dayPeriodEnumToHours } from '../utils';
export class AMPMParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 80;
        this.incompatibleTokens = ['b', 'B', 'H', 'k', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            case 'a':
            case 'aa':
            case 'aaa':
                return (match.dayPeriod(dateString, {
                    width: 'abbreviated',
                    context: 'formatting',
                }) ||
                    match.dayPeriod(dateString, {
                        width: 'narrow',
                        context: 'formatting',
                    }));
            case 'aaaaa':
                return match.dayPeriod(dateString, {
                    width: 'narrow',
                    context: 'formatting',
                });
            case 'aaaa':
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
