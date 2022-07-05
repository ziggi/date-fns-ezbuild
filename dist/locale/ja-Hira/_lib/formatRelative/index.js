const formatRelativeLocale = {
    lastWeek: 'せんしゅうのeeeeのp',
    yesterday: 'きのうのp',
    today: 'きょうのp',
    tomorrow: 'あしたのp',
    nextWeek: 'よくしゅうのeeeeのp',
    other: 'P',
};
const formatRelative = (token, _date, _baseDate, _options) => {
    return formatRelativeLocale[token];
};
export default formatRelative;
