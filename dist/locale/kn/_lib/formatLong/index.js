import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index';
// Reference: https://www.unicode.org/cldr/charts/32/summary/kn.html
const dateFormats = {
    full: 'EEEE, MMMM d, y',
    long: 'MMMM d, y',
    medium: 'MMM d, y',
    short: 'd/M/yy', // CLDR 1819
};
const timeFormats = {
    full: 'hh:mm:ss a zzzz',
    long: 'hh:mm:ss a z',
    medium: 'hh:mm:ss a',
    short: 'hh:mm a', // CLDR 1823
};
const dateTimeFormats = {
    full: '{{date}} {{time}}',
    long: '{{date}} {{time}}',
    medium: '{{date}} {{time}}',
    short: '{{date}} {{time}}', // CLDR 1827
};
const formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: 'full',
    }),
    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: 'full',
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: 'full',
    }),
};
export default formatLong;
