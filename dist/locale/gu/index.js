import formatDistance from './_lib/formatDistance/index';
import formatLong from './_lib/formatLong/index';
import formatRelative from './_lib/formatRelative/index';
import localize from './_lib/localize/index';
import match from './_lib/match/index';
/**
 * @type {Locale}
 * @category Locales
 * @summary Gujarati locale (India).
 * @language Gujarati
 * @iso-639-2 guj
 * @author Manaday Mavani [@ManadayM]{@link https://github.com/manadaym}
 */
const locale = {
    code: 'gu',
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 4,
    },
};
export default locale;
