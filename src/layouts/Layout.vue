// create layout for navbar and main section

<template>
	<div>
		<nav-bar></nav-bar>
		<main>
			<slot></slot>
		</main>
	</div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue'
export default {
	components: { NavBar },
}
</script>

<style></style>
