<template>
  <button @click="openModal=true">Abrir Modal</button>

  <template v-if="openModal">
    <Modal>
      <template #header>
        <h2>Header do modal</h2>
      </template>

			<template #default>Valor default</template>

      <template #footer>
        <h2>Footer do modal</h2>
      </template>
    </Modal>
  </template>
</template>

<script>
	import Modal from '@/components/Modal.vue';

  export default {
		components:{Modal},
    data(){
      return {
        openModal:false
      }
    }
  }
</script>


