import toInteger from '../toInteger/index';
import toDate from '../../toDate/index';
import getUTCWeek from '../getUTCWeek/index';
import requiredArgs from '../requiredArgs/index';
export default function setUTCWeek(dirtyDate, dirtyWeek, options) {
    requiredArgs(2, arguments);
    const date = toDate(dirtyDate);
    const week = toInteger(dirtyWeek);
    const diff = getUTCWeek(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
