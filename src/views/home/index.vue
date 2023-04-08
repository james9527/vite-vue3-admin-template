<template>
	<div class="w-full h-full flex justify-center items-center font-bold text-3xl">
		<HelloWorld :msg="'我是首页'" />
	</div>
</template>
 
<script setup lang="ts">
import HelloWorld from '../../components/HelloWorld.vue'
</script>
 
<style lang="less" scoped></style>
