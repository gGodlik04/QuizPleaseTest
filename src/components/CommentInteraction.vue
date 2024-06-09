<script setup lang="ts">
import { inject, computed, ref } from 'vue';
import IconUI from '@/components/UI/IconUI.vue';
import type { Props } from '@/interface/CommentInteractionInterface';
import type { mockDataType } from '@/mockData/mockDataType';
import { findCommentInData } from '@/utils/helpers/ArrayHelper';
import CommentTextarea from './CommentTextarea.vue';
import { formatDateDayFullMonth } from '@/utils/helpers/DateHelper';


const props = defineProps<Props>();

const injectedComments = inject<mockDataType[]>('comments', []);

const isTextAreaToReplyShowed = ref(false);

const isZeroLikesOnComment = computed(() => {
    return props.comment.likes === 0;
});

const likeComment = (): void => {
    findCommentInData(injectedComments, props.comment.id, (comment) => {
        comment.likes++;
    });
};

const dislikeComment = (): void => {
    findCommentInData(injectedComments, props.comment.id, (comment) => {
        comment.likes--;
    });
};

const toggleShowTextareaToReplyComment = (): void => {
    isTextAreaToReplyShowed.value = !isTextAreaToReplyShowed.value;
};

const addReplyedComment = (replyedComment: string): void => {
    findCommentInData(injectedComments, props.comment.id, (comment) => {
        comment.childComments.push({
            id: +new Date(),
            name: 'Аnonymous',
            time: formatDateDayFullMonth(new Date()),
            likes: 0,
            avatar: '/src/images/1.png',
            comment: replyedComment,
            childComments: [], 
        })
    });

    toggleShowTextareaToReplyComment();
}

</script>

<template>
    <div class="flex gap-2">
        <div class="flex">
            <div 
                @click="likeComment"
                class="w-8 h-8 rounded-full flex items-center justify-center flex hover:bg-gray-200"
            >
                <IconUI :name="'up-arrow'" />
            </div>
            <span v-show="!isZeroLikesOnComment" class="ml-1 text-0.75 mt-auto mb-auto font-bold">{{ comment.likes }}</span>
        </div>
        <span v-show="isZeroLikesOnComment" class="text-0.75 mt-auto mb-auto font-bold">Vote</span>
        <div 
            @click="dislikeComment"
            class="w-8 h-8 rounded-full flex items-center justify-center flex hover:bg-gray-200"
        >
            <IconUI :name="'down-arrow'" />
        </div>
        <div class="flex">
            <div 
                class="w-8 h-8 rounded-full flex items-center justify-center flex hover:bg-gray-200"
                @click="toggleShowTextareaToReplyComment"
            >
                <IconUI :name="'reply'" />
            </div>
            <span 
                class="text-0.75 mt-auto mb-auto font-bold"
            >
                Reply
            </span>
        </div>
    </div>
    <CommentTextarea 
        v-show="isTextAreaToReplyShowed" 
        :addReplyFunction="addReplyedComment"
        :cancelReplyFunction="toggleShowTextareaToReplyComment"
    />
</template>