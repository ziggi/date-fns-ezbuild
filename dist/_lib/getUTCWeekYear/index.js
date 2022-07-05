import toDate from '../../toDate/index';
import requiredArgs from '../requiredArgs/index';
import startOfUTCWeek from '../startOfUTCWeek/index';
import toInteger from '../toInteger/index';
import { getDefaultOptions } from '../defaultOptions/index';
export default function getUTCWeekYear(dirtyDate, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    requiredArgs(1, arguments);
    const date = toDate(dirtyDate);
    const year = date.getUTCFullYear();
    const defaultOptions = getDefaultOptions();
    const firstWeekContainsDate = toInteger((_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.firstWeekContainsDate) !== null && _d !== void 0 ? _d : defaultOptions.firstWeekContainsDate) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.firstWeekContainsDate) !== null && _h !== void 0 ? _h : 1);
    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }
    const firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    const startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    const startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    }
    else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
    }
    else {
        return year - 1;
    }
}
