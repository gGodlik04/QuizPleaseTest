<script setup lang="ts">
import { reactive, provide } from 'vue';
import CompositeComment from '@/components/CompositeComment.vue';
import mockData from '../mockData/mock';


const data = reactive(mockData);

provide('comments', data);
</script>


<template>
    <div v-for="(comment) in data" :key="comment.id">
        <CompositeComment 
            :comment="comment"
        />
    </div>
</template>