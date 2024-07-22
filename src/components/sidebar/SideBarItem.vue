<template>
	<li class="nav-item">
		<a
			class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
			href="#pablo"
		>
			<i
				class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
			/>
			<span class="ml-2">Pin</span>
		</a>
	</li>
</template>

<script setup lang="ts">
defineProps<{
	title?: string
	rout?: string
}>()
</script>

<style></style>
