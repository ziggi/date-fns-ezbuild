import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index';
//Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
const dateFormats = {
    full: 'EEEE, d MMMM, y',
    long: 'd MMMM, y',
    medium: 'd MMM, y',
    short: 'd/M/yy', // CLDR #1828
};
const timeFormats = {
    full: 'hh:mm:ss a zzzz',
    long: 'hh:mm:ss a z',
    medium: 'hh:mm:ss a',
    short: 'hh:mm a', // CLDR #1832
};
const dateTimeFormats = {
    full: '{{date}} {{time}}',
    long: '{{date}} {{time}}',
    medium: '{{date}} {{time}}',
    short: '{{date}} {{time}}', // CLDR #1836
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
