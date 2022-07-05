const formatRelativeLocale = {
    lastWeek: "'afgelopen' eeee 'om' p",
    yesterday: "'gisteren om' p",
    today: "'vandaag om' p",
    tomorrow: "'morgen om' p",
    nextWeek: "eeee 'om' p",
    other: 'P',
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
export default formatRelative;
