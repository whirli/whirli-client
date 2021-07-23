interface TestCase {
    test: any;
    result: any;
}

export const partialSpecTestCaseProvider = (): TestCase[] => [
    {
        test: { name: 'Standard GET', partialSpec: { method: 'GET', path: '/' } },
        result: {
            method: ['$get', 'get'],
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard POST', partialSpec: { method: 'POST', path: '/' } },
        result: {
            method: ['$post', 'post'],
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard PUT', partialSpec: { method: 'PUT', path: '/' } },
        result: {
            method: ['$put', 'put'],
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard PATCH', partialSpec: { method: 'PATCH', path: '/' } },
        result: {
            method: ['$patch', 'patch'],
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard DELETE', partialSpec: { method: 'DELETE', path: '/' } },
        result: {
            method: ['$delete', 'delete'],
            route: 'guest',
        },
    },
    {
        test: { name: 'member access', partialSpec: { access: 'member', method: 'GET', path: '/' } },
        result: {
            method: ['$get', 'get'],
            route: 'member',
        },
    },
    {
        test: { name: 'wacc access', partialSpec: { access: 'wacc', method: 'GET', path: '/' } },
        result: {
            method: ['$get', 'get'],
            route: 'wacc',
        },
    },
    {
        test: { name: 'no symbols in path', partialSpec: { method: 'GET', path: '/user' } },
        result: {
            method: ['$get', 'get'],
            route: 'guest/user',
        },
    },
    {
        test: { name: 'one symbol in path', partialSpec: { method: 'GET', path: '/{id}' }, args: ['1'] },
        result: {
            method: ['$get', 'get'],
            route: 'guest/1',
        },
    },
    {
        test: {
            name: 'multi-level route and one symbol',
            partialSpec: { method: 'GET', path: '/user/{id}' },
            args: ['1'],
        },
        result: {
            method: ['$get', 'get'],
            route: 'guest/user/1',
        },
    },
    {
        test: {
            name: 'more than one symbol',
            partialSpec: { method: 'GET', path: '/user/{id}/{anotherId}' },
            args: ['1', '2'],
        },
        result: {
            method: ['$get', 'get'],
            route: 'guest/user/1/2',
        },
    },
    // @todo: This test will fail. It is left in to remember that routes with two of the same symbol will not work
    // {
    //     test: {
    //         name: 'two symbols that have the same name',
    //         partialSpec: { method: 'GET', path: '/{id}/{id}' },
    //         args: ['1', '2'],
    //     },
    //     result: {
    //         method: '$get',
    //         route: 'guest/1/2',
    //     },
    // },
    {
        test: {
            name: 'many symbols',
            partialSpec: { method: 'GET', path: '/{id}/{anotherId}/{moreId}/{suchId}' },
            args: ['1', '2', '3', '4'],
        },
        result: {
            method: ['$get', 'get'],
            route: 'guest/1/2/3/4',
        },
    },
];

export const requestTestCaseProvider = (): TestCase[] => [
    {
        test: {
            name: 'no path variables and no configuration and a GET method',
            partialSpec: { method: 'GET', path: '/' },
            requestArguments: [],
        },
        result: {
            method: ['$get', 'get'],
            route: 'guest',
            body: undefined,
            config: undefined,
        },
    },
    {
        test: {
            name: 'no path variables, a request config and a GET method',
            partialSpec: { method: 'GET', path: '/' },
            requestArguments: [{ params: { id: '1' } }],
        },
        result: {
            method: ['$get', 'get'],
            route: 'guest',
            body: { params: { id: '1' } },
            config: undefined,
        },
    },
    {
        test: {
            name: 'no path variables, a request body, a request config and a POST method',
            partialSpec: { method: 'POST', path: '/' },
            requestArguments: [{ params: { id: '1' } }, { headers: { fake: 'header' } }],
        },
        result: {
            method: ['$post', 'post'],
            route: 'guest',
            body: { params: { id: '1' } },
            config: { headers: { fake: 'header' } },
        },
    },
    {
        test: {
            name: 'one path variable, a request body, a request config and a POST method',
            partialSpec: { method: 'POST', path: '/{id}' },
            requestArguments: ['1', { params: { id: '1' } }, { headers: { fake: 'header' } }],
        },
        result: {
            method: ['$post', 'post'],
            route: 'guest/1',
            body: { params: { id: '1' } },
            config: { headers: { fake: 'header' } },
        },
    },
];
