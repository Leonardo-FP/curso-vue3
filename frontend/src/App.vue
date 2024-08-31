<template>

  <h2>Lista de Usuários</h2>

  <img :src="imageSrc" alt="" class="my-default-class" :class="{'my-class':showImage, 'my-other-class':!showImage}">

  <ul>
    <li v-for="user in users.users" :key="user.id">{{ user.firstName }}</li>
  </ul>

</template>

<script setup>

  import http from '@/services/http.js';

  import { onMounted, reactive, ref } from 'vue';

  let users = reactive({users:[]})
  const imageSrc = ref('https://picsum.photos/200');
  const showImage = ref(false);

  onMounted(async () => {
    try {
      
      const {data} = await http.get('api/users');
      users.users = data;

    } catch (error) {
      console.log(error)
    }
  })

</script>


<style scoped>
  .my-class {
    border: solid 4px red;
  }

  .my-other-class {
    border: solid 4px blue;
  }
</style>
