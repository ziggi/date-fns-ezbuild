import formatDistance from './_lib/formatDistance/index';
import formatLong from './_lib/formatLong/index';
import formatRelative from './_lib/formatRelative/index';
import localize from './_lib/localize/index';
import match from './_lib/match/index';
/**
 * @type {Locale}
 * @category Locales
 * @summary Hebrew locale.
 * @language Hebrew
 * @iso-639-2 heb
 * @author Nir Lahad [@nirlah]{@link https://github.com/nirlah}
 */
const locale = {
    code: 'he',
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
        weekStartsOn: 0 /* Sunday */,
        firstWeekContainsDate: 1,
    },
};
export default locale;
