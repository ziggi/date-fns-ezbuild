import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index';
const dateFormats = {
    full: 'EEEE, do MMMM, y',
    long: 'do MMMM, y',
    medium: 'd MMM, y',
    short: 'dd/MM/yyyy', // CLDR #1790
};
const timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a', // CLDR #1794
};
const dateTimeFormats = {
    full: "{{date}} 'को' {{time}}",
    long: "{{date}} 'को' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}', // CLDR #1798
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
