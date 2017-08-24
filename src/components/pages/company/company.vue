<template>
	<div class="company">
		<schart canvasId="ringCanvas" :data="ringData.data" :options="ringData.options" width="700" height="600" type="ring" class='vm_canvas'>
		</schart>
		<schart canvasId="barCanvas" :data="barData.data" :options="barData.options" width="700" height="600" type="bar" class='vm_canvas'>
		</schart>
	</div>
</template>

<script type="text/javascript">
import Schart from 'vue-schart'
import axios from 'axios'
	export default{
		data(){
			return{
			ringData:{
					data:[],
					options:{}
					},
			barData:{
				data:[],
				options:{}
			}
			}
		},
		beforeMount(){
			axios.get('../../../../static/data/ringSchart.json').then(
				response=>{
					this.ringData=response.data;
				});
			axios.get('../../../../static/data/barSchart.json').then(
				response=>{
					this.barData=response.data
				})
		},
		components:{
			Schart
		}
	}
</script>

<style type="text/css">
	.vm_canvas{
		float: left;
	}
</style>