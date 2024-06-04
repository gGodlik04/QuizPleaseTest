<script setup lang="ts">
import type { Props } from '@/interface/UI/UserInfoInterface.ts';

defineProps<Props>()

</script>

<template>
    <div class="flex gap-4">
        <div class="text-0.75 font-bold">{{ comment.name }}</div>
        <div class="text-0.75 mt-auto mb-auto text-gray-600">{{ comment.time }}</div>
    </div>
</template>