const formatRelativeLocale = {
    lastWeek: "'geçen hafta' eeee 'saat' p",
    yesterday: "'dün saat' p",
    today: "'bugün saat' p",
    tomorrow: "'yarın saat' p",
    nextWeek: "eeee 'saat' p",
    other: 'P',
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
export default formatRelative;
