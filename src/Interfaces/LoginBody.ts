import ApiRequestBody from './ApiRequestBody';

export default interface LoginBody extends ApiRequestBody {
    email: string;
    password: string;
}
