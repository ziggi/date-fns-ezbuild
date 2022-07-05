const formatRelativeLocale = {
    lastWeek: (date) => {
        switch (date.getUTCDay()) {
            case 6: //Σάββατο
                return "'το προηγούμενο' eeee 'στις' p";
            default:
                return "'την προηγούμενη' eeee 'στις' p";
        }
    },
    yesterday: "'χθες στις' p",
    today: "'σήμερα στις' p",
    tomorrow: "'αύριο στις' p",
    nextWeek: "eeee 'στις' p",
    other: 'P',
};
const formatRelative = (token, date) => {
    const format = formatRelativeLocale[token];
    if (typeof format === 'function')
        return format(date);
    return format;
};
export default formatRelative;
