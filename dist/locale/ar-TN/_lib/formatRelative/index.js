const formatRelativeLocale = {
    lastWeek: "eeee 'إلي فات مع' p",
    yesterday: "'البارح مع' p",
    today: "'اليوم مع' p",
    tomorrow: "'غدوة مع' p",
    nextWeek: "eeee 'الجمعة الجاية مع' p 'نهار'",
    other: 'P',
};
const formatRelative = (token) => formatRelativeLocale[token];
export default formatRelative;