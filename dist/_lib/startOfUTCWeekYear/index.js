import getUTCWeekYear from '../getUTCWeekYear/index';
import requiredArgs from '../requiredArgs/index';
import startOfUTCWeek from '../startOfUTCWeek/index';
import toInteger from '../toInteger/index';
import { getDefaultOptions } from '../defaultOptions/index';
export default function startOfUTCWeekYear(dirtyDate, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    requiredArgs(1, arguments);
    const defaultOptions = getDefaultOptions();
    const firstWeekContainsDate = toInteger((_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.firstWeekContainsDate) !== null && _d !== void 0 ? _d : defaultOptions.firstWeekContainsDate) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.firstWeekContainsDate) !== null && _h !== void 0 ? _h : 1);
    const year = getUTCWeekYear(dirtyDate, options);
    const firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    const date = startOfUTCWeek(firstWeek, options);
    return date;
}
