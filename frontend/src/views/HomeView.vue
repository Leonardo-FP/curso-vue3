<template>
  <input type="text" v-model="user.firstName" placeholder="First Name">
  <input type="text" v-model="user.lastName" placeholder="Last Name">

  <hr>

  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
      <input type="text" v-model="item.name">
    </li>
  </ul>
</template>

<script setup>
  import {ref, watch, reactive} from 'vue';

  const firstName = ref('');
  const lastName = ref('');

  const user = reactive({
    firstName:'',
    lastName:'',
  })

  const items = reactive([
    {
      id:1,
      name:'Leonardo'
    },
    {
      id:2,
      name:'Paulelli'
    }
  ])

  watch(
    items, (value) => {
      value.forEach((item) => {
        if(!Number.isInteger(Number(item.name))){
          console.log('Not a number'+item.name);
        }
      })
    }
  )

</script>
