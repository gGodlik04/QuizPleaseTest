import type { mockDataType } from "@/mockData/mockDataType";

export interface Props {
    comment: {
        id: number,
        name: string,
        time: string,
        likes: number,
        avatar: string,
        comment: string,
        childComments: mockDataType[],
    }
}