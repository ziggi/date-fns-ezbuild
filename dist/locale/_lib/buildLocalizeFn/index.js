export default function buildLocalizeFn(args) {
    return (dirtyIndex, options) => {
        const context = (options === null || options === void 0 ? void 0 : options.context) ? String(options.context) : 'standalone';
        let valuesArray;
        if (context === 'formatting' && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = ((options === null || options === void 0 ? void 0 : options.width)
                ? String(options.width)
                : defaultWidth);
            valuesArray = (args.formattingValues[width] ||
                args.formattingValues[defaultWidth]);
        }
        else {
            const defaultWidth = args.defaultWidth;
            const width = ((options === null || options === void 0 ? void 0 : options.width)
                ? String(options.width)
                : args.defaultWidth);
            valuesArray = (args.values[width] ||
                args.values[defaultWidth]);
        }
        const index = (args.argumentCallback
            ? args.argumentCallback(dirtyIndex)
            : dirtyIndex);
        // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
