import { getDefaultOptions } from '../_lib/defaultOptions/index';
import differenceInCalendarDays from '../differenceInCalendarDays/index';
import format from '../format/index';
import defaultLocale from '../_lib/defaultLocale/index';
import subMilliseconds from '../subMilliseconds/index';
import toDate from '../toDate/index';
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index';
import requiredArgs from '../_lib/requiredArgs/index';
import toInteger from '../_lib/toInteger/index';
/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @param {Date|Number} date - the date to format
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(addDays(new Date(), -6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
export default function formatRelative(dirtyDate, dirtyBaseDate, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    requiredArgs(2, arguments);
    const date = toDate(dirtyDate);
    const baseDate = toDate(dirtyBaseDate);
    const defaultOptions = getDefaultOptions();
    const locale = (_b = (_a = options === null || options === void 0 ? void 0 : options.locale) !== null && _a !== void 0 ? _a : defaultOptions.locale) !== null && _b !== void 0 ? _b : defaultLocale;
    const weekStartsOn = toInteger((_k = (_g = (_f = (_c = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _c !== void 0 ? _c : (_e = (_d = options === null || options === void 0 ? void 0 : options.locale) === null || _d === void 0 ? void 0 : _d.options) === null || _e === void 0 ? void 0 : _e.weekStartsOn) !== null && _f !== void 0 ? _f : defaultOptions.weekStartsOn) !== null && _g !== void 0 ? _g : (_j = (_h = defaultOptions.locale) === null || _h === void 0 ? void 0 : _h.options) === null || _j === void 0 ? void 0 : _j.weekStartsOn) !== null && _k !== void 0 ? _k : 0);
    if (!locale.localize) {
        throw new RangeError('locale must contain localize property');
    }
    if (!locale.formatLong) {
        throw new RangeError('locale must contain formatLong property');
    }
    if (!locale.formatRelative) {
        throw new RangeError('locale must contain formatRelative property');
    }
    const diff = differenceInCalendarDays(date, baseDate);
    if (isNaN(diff)) {
        throw new RangeError('Invalid time value');
    }
    let token;
    if (diff < -6) {
        token = 'other';
    }
    else if (diff < -1) {
        token = 'lastWeek';
    }
    else if (diff < 0) {
        token = 'yesterday';
    }
    else if (diff < 1) {
        token = 'today';
    }
    else if (diff < 2) {
        token = 'tomorrow';
    }
    else if (diff < 7) {
        token = 'nextWeek';
    }
    else {
        token = 'other';
    }
    const utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
    const utcBaseDate = subMilliseconds(baseDate, getTimezoneOffsetInMilliseconds(baseDate));
    const formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
        locale,
        weekStartsOn,
    });
    return format(date, formatStr, { locale, weekStartsOn });
}
