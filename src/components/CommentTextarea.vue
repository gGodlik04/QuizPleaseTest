<script setup lang="ts">
import { ref } from 'vue';
import IconUI from './UI/IconUI.vue';
import type { Props } from '@/interface/CommentTextareaInterface';


const commentText = ref('');

const props = defineProps<Props>();

const replyComment = () => {
    props.addReplyFunction(commentText.value);
}

const cancelReply = () => {
    props.cancelReplyFunction();
}

</script>


<template>
    <div class="border rounded-lg">
        <textarea class="focus:outline-none p-2 w-full" id="" v-model="commentText"></textarea>
        <div class="flex justify-between">
            <IconUI :name="'text-icon'" class="ml-2"/>
            <div class="flex gap-1 mb-1 mr-1 justify-end">
                <button @click="cancelReply" class="rounded-xl p-1 px-2 text-0.75 font-bold text-black bg-slate-200 hover:bg-slate-300">Cancel</button>
                <button @click="replyComment" class="rounded-xl p-1 px-2 text-0.75 font-bold text-white bg-sky-800 hover:bg-sky-900">Comment</button>
            </div>
        </div>
    </div>
</template>