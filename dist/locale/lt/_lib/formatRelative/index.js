const formatRelativeLocale = {
    lastWeek: "'Praėjusį' eeee p",
    yesterday: "'Vakar' p",
    today: "'Šiandien' p",
    tomorrow: "'Rytoj' p",
    nextWeek: 'eeee p',
    other: 'P',
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
export default formatRelative;
