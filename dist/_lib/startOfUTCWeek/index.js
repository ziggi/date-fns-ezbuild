import toDate from '../../toDate/index';
import requiredArgs from '../requiredArgs/index';
import toInteger from '../toInteger/index';
import { getDefaultOptions } from '../defaultOptions/index';
export default function startOfUTCWeek(dirtyDate, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    requiredArgs(1, arguments);
    const defaultOptions = getDefaultOptions();
    const weekStartsOn = toInteger((_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.weekStartsOn) !== null && _d !== void 0 ? _d : defaultOptions.weekStartsOn) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.weekStartsOn) !== null && _h !== void 0 ? _h : 0);
    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    const date = toDate(dirtyDate);
    const day = date.getUTCDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
