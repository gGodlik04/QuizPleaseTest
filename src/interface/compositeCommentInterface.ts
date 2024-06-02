import type { mockDataType } from "@/mockData/mockDataType";

export interface Props {
    comment: {
        name: string,
        time: string,
        likes: number,
        avatar: string,
        comment: string,
        childComments: mockDataType[],
    }
}