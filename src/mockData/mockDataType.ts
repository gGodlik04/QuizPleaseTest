export interface mockDataType {
    id: number,
    name: string,
    time: string,
    likes: number,
    avatar: string,
    comment: string,
    childComments: mockDataType[], 
}