const formatRelativeLocale = {
    lastWeek: "eeee 'گذشته در' p",
    yesterday: "'دیروز در' p",
    today: "'امروز در' p",
    tomorrow: "'فردا در' p",
    nextWeek: "eeee 'در' p",
    other: 'P',
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
export default formatRelative;
