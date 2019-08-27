import { extractUrlParams } from "./utils";

export default class Spec {
    /**
     * Create a complete spec, by adding extra spec values to a partialSpec, and assigning defaults.
     * @param resourcePath
     * @param partialSpec
     */
    constructor(resourcePath, partialSpec) {
        const resourceSpecPath = `/${resourcePath.join(partialSpec.path)}`;

        this.path = resourceSpecPath;
        this.requestMethod = partialSpec.method.toUpperCase();
        this.urlParams = extractUrlParams(resourceSpecPath);
    }

    /**
     * For the list of URL parameters in this spec object, return a new object
     * that maps the URL parameters to an array of values, sequentially.
     * Also validates that all values passed in are strings, otherwise errors.
     *
     * E.G. spec.urlParams = ['id', 'name'] & values = ['10', 'tester'] then returns:
     * { id: '10', name: 'tester' }
     *
     * @param {array} values
     * @returns {object}
     * @throws Error When any value passed in is not a string.
     */
    mapValuesToPathSymbols(values) {
        return this.urlParams.reduce((urlData, param) => {
            const value = values.shift();
            if (typeof value !== 'string') {
                throw new Error(
                    `Whirli Spec Error: Argument "${param}" must be a string, but got: ${value} (on API request to \`${this.requestMethod} ${this.path}\`)`
                );
            }

            urlData[param] = value;
            return urlData;
        }, {});
    }

    /**
     * Using an object of URL data (e.g. { id: '10' } ), return a full URL
     * for the resource request, e.g. /resource/{id} becomes /resource/10.
     * @param urlData
     * @return {string}
     */
    replacePathSymbolsWithUrlData(urlData) {
        return this.path.replace(/{([\s\S]+?)}/g, ($0, $1) =>
            encodeURIComponent(urlData[$1] || '')
        );
    }
}
