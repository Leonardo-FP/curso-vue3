<template>
  <button @click="increment">Add</button>
  <button @click="decrement">Remove</button>
  {{ count }}

  <hr>

  <template v-if="data.length > 0">
    <button @click="hideUsers">Hide Users</button>
    <ul>
      <li v-for="(user, index) in data">{{ user.firstName }}</li>
    </ul>
  </template>
  <template v-else>
    <button @click="getUsers">Get Users</button>
  </template>
</template>

<script setup>
  import { computed } from 'vue';
  import {useStore} from 'vuex';

  const store = useStore();

  const count = computed(() => store.state.counter.count);
  const data = computed(() => store.state.users.data);

  const totalCount = computed(() => store.getters['counter/getCounter']);

  const increment = () => store.commit('counter/increment');
  const decrement = () => store.commit('counter/decrement');
  const getUsers = () => store.dispatch('users/getUsers');
  const hideUsers = () => store.commit('users/setUsers',[]);

</script>