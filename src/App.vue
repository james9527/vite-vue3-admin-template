<script setup lang="ts">
import { message } from 'ant-design-vue'; //非组件模块，需手动引入后可用
 
const info = () => {
	message.info('This is a normal message');
};
</script>
 
<template>
	<router-view/>
</template>
 
<style lang="less">
@import '/@/assets/global.less';
</style>
