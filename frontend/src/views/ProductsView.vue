<template>
    <h2 id="app-products">Products</h2>
    <h2>Products my app</h2>

    <h2>Product 1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis tempore repellendus optio totam expedita itaque voluptatibus ipsum voluptas beatae dignissimos, cumque excepturi. Facilis placeat minus adipisci est ullam eveniet.</p>
    <ProductInfo :likes="product.likes" :comments="product.comments" />
</template>

<script setup>
    import ProductInfo from '@/components/ProductInfo.vue';
    import {reactive} from 'vue';

    const product = reactive({
        likes:20,
        comments:30,
    })
</script>

<style scoped>
    #app-products {
        color: red;
    }
</style>