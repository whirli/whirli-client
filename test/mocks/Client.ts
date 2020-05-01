import { httpClient } from './HttpClient';
import HttpClient from '../../src/Interfaces/HttpClient';
const client: any = jest.genMockFromModule('../../src/Client');

client.getHttpClient = (): HttpClient => httpClient;

export default client;
