<template>
    <h2 id="app-products">Products</h2>
    <h2>Products my app</h2>

    <h2>Product 1</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, impedit! Unde molestias a doloribus neque aspernatur voluptates ex expedita dolore, assumenda iste sapiente mollitia praesentium illum veniam itaque maxime? Debitis.</p>
    <ProductInfo :likes="product.likes" :comments="product.comments" />
</template>

<script>
    import ProductInfo from '@/components/ProductInfo.vue';
    export default {
        components:{ProductInfo},
        name: "Products.vue",
        data(){
            return {
                product:{
                    likes:20, 
                    comments:30
                }
            }
        }
    }
</script>

<style scoped>
    #app-products {
        color: red;
    }
</style>