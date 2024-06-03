<script setup lang="ts">
import type {Props} from '@/interface/compositeCommentInterface';
import IconUI from './UI/IconUI.vue';

const props = defineProps<Props>()

const nestedComments = props.comment.childComments;

</script>

<template>
    <div class="flex mt-4">
        <div class="w-16 h-8 rounded-full flex items-center justify-center flex">
            <img :src="comment.avatar" class="w-8 h-8" alt="">
        </div>     
        <div class="ml-4">
            <div class="flex gap-4">
                <div class="text-0.75 font-bold">{{ comment.name }}</div>
                <div class="text-0.75 mt-auto mb-auto text-gray-600">{{ comment.time }}</div>
            </div>
            <div class="mt-2 text-0.875">{{ comment.comment }}</div>
            <div class="flex gap-2">
                <div class="flex">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center flex hover:bg-gray-200">
                        <IconUI :name="'up-arrow'"/>
                    </div>
                    <span class="ml-1 text-0.75 mt-auto mb-auto font-bold">{{ comment.likes }}</span>
                </div>
                <span class="text-0.75 mt-auto mb-auto font-bold">Vote</span>
                <div class="w-8 h-8 rounded-full flex items-center justify-center flex hover:bg-gray-200">
                    <IconUI :name="'down-arrow'"/>
                </div>
            </div>
            <template v-if="nestedComments">
                <CompositeComment v-for="(nestedComment) in nestedComments" :key="nestedComment.id" :comment="nestedComment"/>
            </template>
        </div>
    </div>
</template>