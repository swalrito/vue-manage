<template>
	<div class="index">
		<vm-head></vm-head>
		<vm-nav></vm-nav>
	</div>
</template>

<script type="text/javascript">
	import vmHead from '../../commons/Head.vue'
	import vmNav from '../../commons/SlideNav.vue'
	export default{
		components:{
			vmHead,
			vmNav
		}
	}
</script>

<style type="text/css">
	.index{
		width: 100%;
		height: 100%;
	}
</style>

