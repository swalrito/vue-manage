<template>
	<div class="index">
		<vm-head></vm-head>
		<vm-nav></vm-nav>
		<div class="content">
			<transition name='leave' mode='out-in'>
				<router-view></router-view>
			</transition>
		</div>
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
	.content{
		position: absolute;
		width: auto;
		left: 300px;
		top: 70px;
		right: 0px;
		bottom: 0px;
		padding: 10px;
		overflow-y: scroll;
	}
</style>

