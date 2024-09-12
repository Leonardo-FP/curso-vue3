<template>
    <form action="" @submit.prevent="create">
        <input type="text" placeholder="FirstName" v-model="user.firstName">
        <span class="error" v-if="errorsForm['errors'].firstName">{{ errorsForm['errors'].firstName[0] }}</span>
        <input type="text" placeholder="LastName" v-model="user.lastName">
        <span class="error" v-if="errorsForm['errors'].lastName">{{ errorsForm['errors'].lastName[0] }}</span>
        <input type="text" placeholder="Email" v-model="user.email">
        <span class="error" v-if="errorsForm['errors'].email">{{ errorsForm['errors'].email[0] }}</span>
        <input type="text" placeholder="Password" v-model="user.password">
        <span class="error" v-if="errorsForm['errors'].password">{{ errorsForm['errors'].password[0] }}</span>
        <button type="submit">Create</button>
    </form>
</template>

<script setup>
    import http from '@/services/http.js'
    import {reactive} from 'vue';

    const user = reactive({});
    const errorsForm = reactive({errors:{}})

    async function create(){
        try{
            const {data} = await http.post('api/user', user);
            console.log(data)
        }catch(errors){
            if(errors.response?.data){
                errorsForm['errors'] = errors.response.data['errors'];
            }
            console.log(errors.response.data);
        }
    }
</script>

<style>
    .error {
        color: red;
    }
</style>