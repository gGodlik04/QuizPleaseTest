import type {mockDataType} from './mockDataType';

const mockData: mockDataType[] = [
    {
        id: 1,
        name: 'rayray1010',
        time: '3h ago',
        likes: 12,
        avatar: '/src/images/2.png',
        comment: `I swear I will never understand some poll responses.`,
        childComments: [
            {
                id: 2,
                name: 'drippysock',
                time: '2h ago',
                likes: 0,
                avatar: '/src/images/1.png',
                comment: `"Think he should drop out" and "I won't vote for him if he doesn't drop out" are not necessarily equivalent statements.`,
                childComments: [],
            },
            {
                id: 3,
                name: 'TintedApostle',
                time: '2h ago',
                likes: 73,
                avatar: '/src/images/3.png',
                comment: `Those who can make you believe absurdities can make you commit atrocities.`,
                childComments: [
                    {
                        id: 4,
                        name: 'Secret_Initiative_41',
                        time: '2h ago',
                        likes: 73,
                        avatar: '/src/images/1.png',
                        comment: `Everyone needs to give the impact of the verdict time to sink in with the Trump supporters and independents.`,
                        childComments: [],
                    }
                ],
            }
        ]
    }
]

export default mockData;