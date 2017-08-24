<template>
	<div class="schart">
		<schart canvasId='bar' 
				:data='data' 
				:options='options' 
				width='1400' 
				height='900' 
				type='bar'>
		</schart>
	</div>
</template>

<script type="text/javascript">
	import Schart from 'vue-schart'
	import axios from 'axios'
	export default{
		data(){
			return{
				data:[],
				options:{}
			}
		},
		beforeMount(){
			axios.get('../../../../static/data/barSchart.json').then(
				response=>{
					this.data=response.data.data;
					this.options=response.data.options;
				}
				)
		},
		components:{
			Schart
		}
	}
</script>

<style type="text/css">
	
</style>