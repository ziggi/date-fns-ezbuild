import requiredArgs from '../requiredArgs/index';
import startOfUTCWeek from '../startOfUTCWeek/index';
export default function isSameUTCWeek(dirtyDateLeft, dirtyDateRight, options) {
    requiredArgs(2, arguments);
    const dateLeftStartOfWeek = startOfUTCWeek(dirtyDateLeft, options);
    const dateRightStartOfWeek = startOfUTCWeek(dirtyDateRight, options);
    return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
