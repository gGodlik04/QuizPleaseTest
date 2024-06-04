import type { mockDataType } from "@/mockData/mockDataType";

export const findCommentInData = (comments: Array<mockDataType>, id: number, callback: (comment: mockDataType) => void)  => {


    comments.forEach(comment => {
        if (comment.id !== id) {

            if (comment.childComments) {
                findCommentInData(comment.childComments, id, callback);
            }
            return;
        }

        callback(comment);
    })
}