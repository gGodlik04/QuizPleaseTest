<script setup lang="ts">
import type { Props } from '@/interface/UI/AvatarUIInterface';

const props = defineProps<Props>()

</script>

<template>
    <div class="h-8 rounded-full flex items-center justify-center flex">
        <img :src="props.url" class="w-8 h-8" alt="">
     </div>  
</template>