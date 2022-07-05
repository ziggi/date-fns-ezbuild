// Source: https://www.unicode.org/cldr/charts/32/summary/te.html
const formatRelativeLocale = {
    lastWeek: "'గత' eeee p",
    yesterday: "'నిన్న' p",
    today: "'ఈ రోజు' p",
    tomorrow: "'రేపు' p",
    nextWeek: "'తదుపరి' eeee p",
    other: 'P',
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
export default formatRelative;
