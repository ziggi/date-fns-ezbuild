import assign from '../assign/index';
export default function cloneObject(object) {
    return assign({}, object);
}
