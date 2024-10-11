<template>
    Likes:{{ likes }}
    Comments:{{ comments }}
</template>

<script setup>
    defineProps(['likes','comments'])
</script>