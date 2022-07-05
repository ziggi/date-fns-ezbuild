import toDate from '../toDate/index';
import formatters from '../_lib/format/lightFormatters/index';
import getTimezoneOffsetInMilliseconds from '../_lib/getTimezoneOffsetInMilliseconds/index';
import isValid from '../isValid/index';
import subMilliseconds from '../subMilliseconds/index';
import requiredArgs from '../_lib/requiredArgs/index';
// This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
export default function lightFormat(dirtyDate, formatStr) {
    requiredArgs(2, arguments);
    const originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
        throw new RangeError('Invalid time value');
    }
    // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    const timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    const utcDate = subMilliseconds(originalDate, timezoneOffset);
    const tokens = formatStr.match(formattingTokensRegExp);
    // The only case when formattingTokensRegExp doesn't match the string is when it's empty
    if (!tokens)
        return '';
    const result = tokens
        .map((substring) => {
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return "'";
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return cleanEscapedString(substring);
        }
        const formatter = formatters[firstCharacter];
        if (formatter) {
            return formatter(utcDate, substring);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError('Format string contains an unescaped latin alphabet character `' +
                firstCharacter +
                '`');
        }
        return substring;
    })
        .join('');
    return result;
}
function cleanEscapedString(input) {
    const matches = input.match(escapedStringRegExp);
    if (!matches) {
        return input;
    }
    return matches[1].replace(doubleQuoteRegExp, "'");
}
