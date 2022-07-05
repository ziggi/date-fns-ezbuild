import { Parser } from '../Parser';
import setUTCDay from '../../../_lib/setUTCDay';
// Day of week
export class DayParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.incompatibleTokens = ['D', 'i', 'e', 'c', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            // Tue
            case 'E':
            case 'EE':
            case 'EEE':
                return (match.day(dateString, {
                    width: 'abbreviated',
                    context: 'formatting',
                }) ||
                    match.day(dateString, { width: 'short', context: 'formatting' }) ||
                    match.day(dateString, { width: 'narrow', context: 'formatting' }));
            // T
            case 'EEEEE':
                return match.day(dateString, {
                    width: 'narrow',
                    context: 'formatting',
                });
            // Tu
            case 'EEEEEE':
                return (match.day(dateString, { width: 'short', context: 'formatting' }) ||
                    match.day(dateString, { width: 'narrow', context: 'formatting' }));
            // Tuesday
            case 'EEEE':
            default:
                return (match.day(dateString, { width: 'wide', context: 'formatting' }) ||
                    match.day(dateString, {
                        width: 'abbreviated',
                        context: 'formatting',
                    }) ||
                    match.day(dateString, { width: 'short', context: 'formatting' }) ||
                    match.day(dateString, { width: 'narrow', context: 'formatting' }));
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = setUTCDay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
