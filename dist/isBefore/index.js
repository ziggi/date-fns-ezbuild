import toDate from '../toDate/index';
import requiredArgs from '../_lib/requiredArgs/index';
/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
export default function isBefore(dirtyDate, dirtyDateToCompare) {
    requiredArgs(2, arguments);
    const date = toDate(dirtyDate);
    const dateToCompare = toDate(dirtyDateToCompare);
    return date.getTime() < dateToCompare.getTime();
}
