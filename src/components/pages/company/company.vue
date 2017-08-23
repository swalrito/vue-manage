<template>
	<div class="company">
		<schart 
			:canvasId='barData.canvasId' 
			:type="barData.type" 
			:width='barData.width' 
			:height='barData.height' 
			:data='barData.data'
			:options='barData.options'
			class='schart'>
		</schart><schart 
			:canvasId='ringData.canvasId'  
			:type="ringData.type"  
			:width='ringData.width'  
			:height='ringData.height'  
			:data='ringData.data' 
			:options='ringData.options' 
			class='schart'>
		</schart>
		
	</div>
</template>

<script type="text/javascript">
import Schart from 'vue-schart';
import axios from 'axios'
export default{
		data(){
			return{
				barData:{
					canvasId:'',
					width:'',
					height:'',
					type:'',
					data:[],
					options:{}
				},
				ringData:{
					canvasId:'',
					width:'',
					height:'',
					type:'',
					data:[],
					options:{}
				}
			}
		},
	components:{
		Schart
	},
	beforeMount(){
		axios.get('../../../../static/data/barSchart.json').then(
			response=>{
				this.barData.canvasId=response.data.canvasId;
				this.barData.width=response.data.width;
				this.barData.height=response.data.height;
				this.barData.type=response.data.type;
				this.barData.data=response.data.data;
				this.barData.options=response.data.options;
		});
		axios.get('../../../../static/data/ringSchart.json').then(
			res=>{
				this.ringData.canvasId=response.data.canvasId;
				this.ringData.width=response.data.width;
				this.ringData.height=response.data.height;
				this.ringData.type=response.data.type;
				this.ringData.data=response.data.data;
				this.ringData.options=response.data.options;
			}
			)
	}
	}
</script>

<style type="text/css">

</style>