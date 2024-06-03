<script setup lang="ts">

const props = defineProps({
  name: String,
  class: String,
});

</script>

<template>
    <div>
        <svg :class="props.class" xmlns="http://www.w3.org/2000/svg" class="w-0.875 h-0.875" viewBox="0 0 16 16" fill="none" stroke="currentColor">
         <use :href="`/src/assets/svg/icons.svg#${name}`"></use>
       </svg>
    </div>
</template>