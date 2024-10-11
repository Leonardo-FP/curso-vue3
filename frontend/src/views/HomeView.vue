<template>
  <button @click="openModal = true">Open modal</button>
	<br>
	<template v-if="openModal">
		<Modal>
			<template #header>Header do slot</template>
			<template #default>
				<form action="">
					<input type="text" name="" id="" placeholder="Email">
					<input type="text" name="" id="" placeholder="Senha">

					<button type="submit">Submit</button>
				</form>
			</template>
			<template #footer>Footer do slot</template>
		</Modal>
	</template>
</template>

<script setup>
  import {ref} from 'vue';
	import Modal from '@/components/Modal.vue';

	const openModal = ref(false);
</script>
