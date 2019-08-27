/** Shorthand for a safer hasOwnProperty call */
export function hasOwnProp(object, key) {
    return {}.hasOwnProperty.call(object, key);
}

/** Allow for special capitalization cases (such as OAuth) */
export function pascalToCamelCase(name) {
    const specialCases = {
        OAuth: 'oauth',
    };

    if (hasOwnProp(specialCases, name)) {
        return specialCases[name];
    }

    return name[0].toLowerCase() + name.substring(1);
}

/**
 * From a URL with parameter symbols, extract an array of the symbol names.
 * E.G. /api/v1/user/{id} will return ['id'].
 * @param {string} path
 * @returns {array}
 */
export function extractUrlParams(path) {
    const params = path.match(/{\w+}/g);
    if (!params) return [];

    return params.map((param) => param.replace(/[{}]/g, ''));
}
