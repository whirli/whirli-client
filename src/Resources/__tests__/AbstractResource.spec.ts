import AbstractResource from '../AbstractResource';
import { httpClient } from '../../../test/mocks/HttpClient';
import Client from '../../Client';
import PartialSpec from '../../Interfaces/PartialSpec';
import { testCaseProvider } from '../../../test/providers/AbstractResourceProvider';

describe('AbstractResource.ts', () => {
    const client = new Client(httpClient);
    let abstractResource: AbstractResource;

    beforeEach(() => {
        abstractResource = new AbstractResource(client);
    });

    it('can be instantiated', () => {
        expect(abstractResource).toBeInstanceOf(AbstractResource);
    });

    const testCases = testCaseProvider();

    for (let i = 0; i < testCases.length; i++) {
        const { test, result } = testCases[i];

        describe(`when given a partial spec that has ${test.name}`, () => {
            let resourceRequestFn: Function;

            beforeEach(() => {
                resourceRequestFn = abstractResource.createMethodFromPartialSpec(test.partialSpec as PartialSpec);
            });

            afterEach(() => {
                httpClient[result.method].mockClear();
            });

            it('can create a request method for a resource', () => {
                resourceRequestFn(...(test.args as string[]));
                const argsReceivedByMock = httpClient[result.method].mock.calls[0];

                expect(resourceRequestFn).toBeInstanceOf(Function);
                expect(argsReceivedByMock[0]).toBe(result.route);
            });
        });
    }
});
