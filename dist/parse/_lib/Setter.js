const TIMEZONE_UNIT_PRIORITY = 10;
export class Setter {
    constructor() {
        this.subPriority = 0;
    }
    validate(_utcDate, _options) {
        return true;
    }
}
export class ValueSetter extends Setter {
    constructor(value, validateValue, setValue, priority, subPriority) {
        super();
        this.value = value;
        this.validateValue = validateValue;
        this.setValue = setValue;
        this.priority = priority;
        if (subPriority) {
            this.subPriority = subPriority;
        }
    }
    validate(utcDate, options) {
        return this.validateValue(utcDate, this.value, options);
    }
    set(utcDate, flags, options) {
        return this.setValue(utcDate, flags, this.value, options);
    }
}
export class DateToSystemTimezoneSetter extends Setter {
    constructor() {
        super(...arguments);
        this.priority = TIMEZONE_UNIT_PRIORITY;
        this.subPriority = -1;
    }
    set(date, flags) {
        if (flags.timestampIsSet) {
            return date;
        }
        const convertedDate = new Date(0);
        convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
        convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
        return convertedDate;
    }
}
