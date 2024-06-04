<script setup lang="ts">
import { inject, computed } from 'vue';
import IconUI from '@/components/UI/IconUI.vue';
import type { Props } from '@/interface/CommentInteraction';
import type { mockDataType } from '@/mockData/mockDataType';
import { findCommentInData } from '@/utils/helpers/ArrayHelper';

const props = defineProps<Props>();

const injectedComments = inject<mockDataType[]>('comments', []);

const isZeroLikesOnComment = computed(() => {
    return props.comment.likes === 0;
});

const likeComment = () => {
    findCommentInData(injectedComments, props.comment.id, (comment) => {
        comment.likes++;
    } );
};

const dislikeComment = () => {
    findCommentInData(injectedComments, props.comment.id, (comment) => {
        comment.likes--;
    } );
};

const showTextareaToReplyComment = () => {

};

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
            <div class="w-8 h-8 rounded-full flex items-center justify-center flex hover:bg-gray-200">
                <IconUI :name="'reply'" />
            </div>
            <span 
                @click="showTextareaToReplyComment"
                class="text-0.75 mt-auto mb-auto font-bold"
            >
                Reply
            </span>
        </div>
    </div>
</template>