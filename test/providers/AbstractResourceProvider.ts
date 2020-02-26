interface TestCase {
    test: any;
    result: any;
}

export const testCaseProvider = (): TestCase[] => [
    {
        test: { name: 'Standard GET', partialSpec: { method: 'GET', path: '/' } },
        result: {
            method: '$get',
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard POST', partialSpec: { method: 'POST', path: '/' } },
        result: {
            method: '$post',
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard PUT', partialSpec: { method: 'PUT', path: '/' } },
        result: {
            method: '$put',
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard PATCH', partialSpec: { method: 'PATCH', path: '/' } },
        result: {
            method: '$patch',
            route: 'guest',
        },
    },
    {
        test: { name: 'Standard DELETE', partialSpec: { method: 'DELETE', path: '/' } },
        result: {
            method: '$delete',
            route: 'guest',
        },
    },
    {
        test: { name: 'member access', partialSpec: { access: 'member', method: 'GET', path: '/' } },
        result: {
            method: '$get',
            route: 'member',
        },
    },
    {
        test: { name: 'wacc access', partialSpec: { access: 'wacc', method: 'GET', path: '/' } },
        result: {
            method: '$get',
            route: 'wacc',
        },
    },
    {
        test: { name: 'no symbols in path', partialSpec: { method: 'GET', path: '/user' } },
        result: {
            method: '$get',
            route: 'guest/user',
        },
    },
    {
        test: { name: 'one symbol in path', partialSpec: { method: 'GET', path: '/{id}' }, args: ['1'] },
        result: {
            method: '$get',
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
            method: '$get',
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
            method: '$get',
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
            method: '$get',
            route: 'guest/1/2/3/4',
        },
    },
];
