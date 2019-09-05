/** Shorthand for a safer hasOwnProperty call */
export function hasOwnProp(object: Object, key: string): boolean {
    return {}.hasOwnProperty.call(object, key);
}

/** Allow for special capitalization cases (such as OAuth) */
export function pascalToCamelCase(name: string): string {
    const specialCases: { [key: string]: string } = {
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
 */
export function extractUrlParams(path: string): Array<string> {
    const params: RegExpMatchArray|null = path.match(/{\w+}/g);
    if (!params) return [];

    return params.map((param: string) => param.replace(/[{}]/g, ''));
}
