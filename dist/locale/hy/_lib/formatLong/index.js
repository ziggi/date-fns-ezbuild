import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index';
const dateFormats = {
    full: 'd MMMM, y, EEEE',
    long: 'd MMMM, y',
    medium: 'd MMM, y',
    short: 'dd.MM.yyyy',
};
const timeFormats = {
    full: 'HH:mm:ss zzzz',
    long: 'HH:mm:ss z',
    medium: 'HH:mm:ss',
    short: 'HH:mm',
};
const dateTimeFormats = {
    full: "{{date}} 'ժ․'{{time}}",
    long: "{{date}} 'ժ․'{{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
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
