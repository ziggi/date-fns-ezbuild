import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index';
const eraValues = {
    narrow: ['av. J.-C', 'ap. J.-C'],
    abbreviated: ['av. J.-C', 'ap. J.-C'],
    wide: ['avant Jésus-Christ', 'après Jésus-Christ'],
};
const quarterValues = {
    narrow: ['T1', 'T2', 'T3', 'T4'],
    abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
    wide: [
        '1er trimestre',
        '2ème trimestre',
        '3ème trimestre',
        '4ème trimestre',
    ],
};
const monthValues = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
        'janv.',
        'févr.',
        'mars',
        'avr.',
        'mai',
        'juin',
        'juil.',
        'août',
        'sept.',
        'oct.',
        'nov.',
        'déc.',
    ],
    wide: [
        'janvier',
        'février',
        'mars',
        'avril',
        'mai',
        'juin',
        'juillet',
        'août',
        'septembre',
        'octobre',
        'novembre',
        'décembre',
    ],
};
const dayValues = {
    narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
    abbreviated: [
        'dim.',
        'lun.',
        'mar.',
        'mer.',
        'jeu.',
        'ven.',
        'sam.',
    ],
    wide: [
        'dimanche',
        'lundi',
        'mardi',
        'mercredi',
        'jeudi',
        'vendredi',
        'samedi',
    ],
};
const dayPeriodValues = {
    narrow: {
        am: 'AM',
        pm: 'PM',
        midnight: 'minuit',
        noon: 'midi',
        morning: 'mat.',
        afternoon: 'ap.m.',
        evening: 'soir',
        night: 'mat.',
    },
    abbreviated: {
        am: 'AM',
        pm: 'PM',
        midnight: 'minuit',
        noon: 'midi',
        morning: 'matin',
        afternoon: 'après-midi',
        evening: 'soir',
        night: 'matin',
    },
    wide: {
        am: 'AM',
        pm: 'PM',
        midnight: 'minuit',
        noon: 'midi',
        morning: 'du matin',
        afternoon: 'de l’après-midi',
        evening: 'du soir',
        night: 'du matin',
    },
};
const ordinalNumber = (dirtyNumber, options) => {
    const number = Number(dirtyNumber);
    const unit = options === null || options === void 0 ? void 0 : options.unit;
    if (number === 0)
        return '0';
    const feminineUnits = ['year', 'week', 'hour', 'minute', 'second'];
    let suffix;
    if (number === 1) {
        suffix = unit && feminineUnits.includes(unit) ? 'ère' : 'er';
    }
    else {
        suffix = 'ème';
    }
    return number + suffix;
};
const localize = {
    ordinalNumber,
    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: 'wide',
    }),
    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: 'wide',
        argumentCallback: (quarter) => (quarter - 1),
    }),
    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: 'wide',
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: 'wide',
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: 'wide',
    }),
};
export default localize;
