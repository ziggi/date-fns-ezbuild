// Source: https://www.unicode.org/cldr/charts/32/summary/gu.html
const formatRelativeLocale = {
    lastWeek: "'પાછલા' eeee p",
    yesterday: "'ગઈકાલે' p",
    today: "'આજે' p",
    tomorrow: "'આવતીકાલે' p",
    nextWeek: 'eeee p',
    other: 'P',
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
export default formatRelative;
