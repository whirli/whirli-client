import AbstractResource from '../AbstractResource';
import { httpClient } from '../../../test/mocks/HttpClient';
import Client from '../../Client';
import PartialSpec from '../../Interfaces/PartialSpec';
import { partialSpecTestCaseProvider, requestTestCaseProvider } from '../../../test/providers/AbstractResourceProvider';

describe('AbstractResource.ts', () => {
    const client = new Client(httpClient);
    let abstractResource: AbstractResource;

    beforeEach(() => {
        abstractResource = new AbstractResource(client);
    });

    it('can be instantiated', () => {
        expect(abstractResource).toBeInstanceOf(AbstractResource);
    });

    describe('when given a partial spec', () => {
        const testCases = partialSpecTestCaseProvider();

        for (let i = 0; i < testCases.length; i++) {
            const { test, result } = testCases[i];

            describe(`that has ${test.name}`, () => {
                let resourceRequestFn: Function;

                beforeEach(() => {
                    resourceRequestFn = abstractResource.createMethodFromPartialSpec(test.partialSpec as PartialSpec);
                });

                afterEach(() => {
                    httpClient[result.method[0]].mockClear();
                    httpClient[result.method[1]].mockClear();
                });

                it('can create a request method for a resource', () => {
                    const request = { data: 'test' };
                    const args = test.args || [];

                    resourceRequestFn(...args, request);

                    const argsReceivedByMethod =
                        httpClient[result.method[0]].mock.calls[0] || httpClient[result.method[1]].mock.calls[0];
                    const requestPath = argsReceivedByMethod[0];
                    const requestBody = argsReceivedByMethod[1];

                    expect(resourceRequestFn).toBeInstanceOf(Function);
                    expect(requestPath).toBe(result.route);
                    expect(requestBody).toBe(request);
                });
            });
        }
    });

    describe('when making requests', () => {
        const testCases = requestTestCaseProvider();

        for (let i = 0; i < testCases.length; i++) {
            const { test, result } = testCases[i];

            describe(`that have ${test.name}`, () => {
                let resourceRequestFn: Function;

                beforeEach(() => {
                    resourceRequestFn = abstractResource.createMethodFromPartialSpec(test.partialSpec as PartialSpec);
                });

                afterEach(() => {
                    httpClient[result.method[0]].mockClear();
                    httpClient[result.method[1]].mockClear();
                });

                it('makes the correct method call to the http client (e.g. axios)', () => {
                    resourceRequestFn(...test.requestArguments);

                    const argsReceivedByMethod =
                        httpClient[result.method[0]].mock.calls[0] || httpClient[result.method[1]].mock.calls[0];
                    const requestPath = argsReceivedByMethod[0];
                    const requestBody = argsReceivedByMethod[1];
                    const requestConfig = argsReceivedByMethod[2];

                    expect(requestPath).toBe(result.route);
                    expect(requestBody).toEqual(result.body);
                    expect(requestConfig).toEqual(result.config);
                });
            });
        }
    });
});
