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
