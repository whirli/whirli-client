export default class ApiResponseException extends Error {
    constructor(message) {
        super();
        this.name = 'ApiResponseException';
        this.message = message || 'There was a problem making that request to the API';
    }
}
