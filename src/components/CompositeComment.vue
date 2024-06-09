<script setup lang="ts">
import type {Props} from '@/interface/CompositeCommentInterface';
import AvatarUI from '@/components/UI/AvatarUI.vue';
import AvatarTree from '@/components/AvatarTree.vue';
import UserInfoUI from './UI/UserInfoUI.vue';
import CommentInteraction from './CommentInteraction.vue';


const props = defineProps<Props>()

const nestedComments = props.comment.childComments;

</script>

<template>
    <div class="flex mt-4">
        <AvatarTree>
            <AvatarUI :url="comment.avatar"/>   
        </AvatarTree>
        <div class="ml-4 w-full">
            <UserInfoUI :comment="comment"/>
            <div class="mt-2 text-0.875">{{ comment.comment }}</div>
            <CommentInteraction :comment="comment"/>
            <template v-if="nestedComments">
                <CompositeComment v-for="(nestedComment) in nestedComments" :key="nestedComment.id" :comment="nestedComment"/>
            </template>
        </div>
    </div>
</template>