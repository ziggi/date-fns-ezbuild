const roundingMap = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: (value) => (value < 0 ? Math.ceil(value) : Math.floor(value)), // Math.trunc is not supported by IE
};
const defaultRoundingMethod = 'trunc';
export function getRoundingMethod(method) {
    return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}
