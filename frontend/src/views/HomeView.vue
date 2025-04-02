<template>

  <span ref="span">Conteúdo do span</span>

  <input type="text" v-model="user.firstName">
  
  <ul>
    <li v-for="item in items">
      {{ item.name }}
      <input type="text" v-model="item.name">
    </li>
  </ul>
</template>

<script setup>
  import { ref, computed, onMounted, watch, watchEffect, reactive } from 'vue';
 
  const firstName = ref('');
  const lastName = ref('');
  const span = ref(null);
  const user = reactive({
    firstName:'',
    lastName:''
  })

  const items = reactive([
    {
      id: 1, 
      name: 'Leonardo'
    },
    {
      id: 2, 
      name: 'Paulelli'
    }
  ])

  onMounted(() => {
    console.log(span.value.textContent);
  })

  // Chamado depois do component ser montado
  // Usado para ter controle das propriedades reativas
  // Permite obter o valor anterior 
  // Só é chamado quando a propriedade reativa é alterada
  watch(
    () => user.firstName, 
    (value, oldValue) => {
      console.log(value, oldValue)
    }
  )

  // Chamado antes do component ser montado
  // Observa tudo
  // Não permite obter o valor anterior
  watchEffect(() => {
    // console.log(span.value.textContent)
  })

</script>
