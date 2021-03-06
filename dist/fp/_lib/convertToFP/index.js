export default function convertToFP(fn, arity, a = []) {
    if (a.length >= arity) {
        return fn.apply(null, a.slice(0, arity).reverse());
    }
    return function (...args) {
        return convertToFP(fn, arity, a.concat(args));
    };
}
