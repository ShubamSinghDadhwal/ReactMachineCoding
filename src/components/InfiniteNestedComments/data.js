/*
hello 
    hello world
        hello world 123
js
    react
*/

export const comments = {
    id: '1',
    // name: 'input box',
    items: [
        {
            id: '234',
            name: 'hello',
            items: [
                {
                    id: '345',
                    name: 'hello world',
                    items: [
                        {
                            id: '891',
                            name: 'hello world 123',
                            items: [],
                        }
                    ]
                }
            ]
        },
        {
            id: '456',
            name: 'js',
            items: [
                {
                    id: '567',
                    name: 'react',
                    items: []
                }
            ],
            // items: []
        },
    ]
};

export const commentsForRecursionVisualisation = {
    id: '1',
    // name: 'input box',
    items: [
        {
            // CASE 1: Assume here we have to insert
            id: '234',
            name: 'hello',
            items: []
        },
        {
            id: '456',
            name: 'js',
            items: [],
            // CASE 2: think how the empty items will be returned
        },
    ]
};