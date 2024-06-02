<script setup lang="ts">
import CompositeComment from '@/components/CompositeComment.vue';
import mockData from '../mockData/mock';
</script>

<scrip setup lang="ts">

</scrip>

<template>
    <div v-for="(comment) in mockData" :key="comment.id">
        <CompositeComment 
            :comment="comment"
        />
    </div>
</template>