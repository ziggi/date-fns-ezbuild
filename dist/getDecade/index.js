import toDate from '../toDate/index';
import requiredArgs from '../_lib/requiredArgs/index';
/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year of decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */
export default function getDecade(dirtyDate) {
    requiredArgs(1, arguments);
    const date = toDate(dirtyDate);
    const year = date.getFullYear();
    const decade = Math.floor(year / 10) * 10;
    return decade;
}
