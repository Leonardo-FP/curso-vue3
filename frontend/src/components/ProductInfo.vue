<template>
    Likes: {{ likes }}
    Comments: {{ comments }}
</template>

<script>
    export default {
        props:['likes', 'comments']
    }
</script>