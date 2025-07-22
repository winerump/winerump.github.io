<template>
 <div class="bg-white">
	 <img :src="src" :alt="alt" />
 </div>
</template>
<script setup>
	defineProps({
	  src: String,
	  alt: String
	})
</script>
