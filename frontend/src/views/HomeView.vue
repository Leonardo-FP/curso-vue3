<template>
  <button @click="openModal = true">Open modal</button>
	<br>
	<Modal v-if="openModal" @close="openModal = false">
		<template #header>Header do modal</template>
		<template #default>
			<form action="">
				<input type="text" name="" id="" placeholder="Email">
				<input type="text" name="" id="" placeholder="Senha">

				<button type="submit">Submit</button>
			</form>
		</template>
		<template #footer>Footer do modal</template>
	</Modal>
</template>

<script setup>
	import {ref} from 'vue';
	import Modal from '@/components/Modal.vue';

	const openModal = ref(false);
</script>
