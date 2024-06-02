<script setup lang="ts">
import type {Props} from '@/interface/compositeCommentInterface';

const props = defineProps<Props>()

const nestedComments = props.comment.childComments;

</script>

<template>
    <div>
        <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <img :src="comment.avatar" alt="">
        </div>
        <div>{{ comment.comment }}</div>
        <template v-if="nestedComments">
          <CompositeComment v-for="(nestedComment) in nestedComments" :key="nestedComment.id" :comment="nestedComment"/>
        </template>
    </div>
</template>