<template>
   <Products v-bind:products="products" v-slot="props">
        <li @click="getProduct(props.product.id)">{{ props.product.name }}</li>
   </Products>
</template>

<script setup>
    import Products from '@/components/Products.vue';
    import {reactive} from 'vue';

    function getProduct(id){
        console.log(id)
    }

    const products = reactive([
        {
            id:1,
            name:'Macbook',
        },
        {
            id:2,
            name:'iPhone',
        },
        {
            id:3,
            name:'Mouse',
        },
    ])
</script>

<style scoped>
    #app-products {
        color: red;
    }
</style>