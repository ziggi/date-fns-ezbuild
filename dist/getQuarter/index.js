import toDate from '../toDate/index';
import requiredArgs from '../_lib/requiredArgs/index';
/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
export default function getQuarter(dirtyDate) {
    requiredArgs(1, arguments);
    const date = toDate(dirtyDate);
    const quarter = Math.floor(date.getMonth() / 3) + 1;
    return quarter;
}
