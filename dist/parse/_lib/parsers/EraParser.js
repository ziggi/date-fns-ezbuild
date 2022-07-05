import { Parser } from '../Parser';
export class EraParser extends Parser {
    constructor() {
        super(...arguments);
        this.priority = 140;
        this.incompatibleTokens = ['R', 'u', 't', 'T'];
    }
    parse(dateString, token, match) {
        switch (token) {
            // AD, BC
            case 'G':
            case 'GG':
            case 'GGG':
                return (match.era(dateString, { width: 'abbreviated' }) ||
                    match.era(dateString, { width: 'narrow' }));
            // A, B
            case 'GGGGG':
                return match.era(dateString, { width: 'narrow' });
            // Anno Domini, Before Christ
            case 'GGGG':
            default:
                return (match.era(dateString, { width: 'wide' }) ||
                    match.era(dateString, { width: 'abbreviated' }) ||
                    match.era(dateString, { width: 'narrow' }));
        }
    }
    set(date, flags, value) {
        flags.era = value;
        date.setUTCFullYear(value, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
