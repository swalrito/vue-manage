<template>
	<div class="schart">
		<!--面包屑-->
		<div class="breadCrumb">
			<el-breadcrumb>
				<el-breadcrumb-item :to="{path:path}">
					<i class="el-icon-menu BR_content"></i>
					<span class="BR_content">主表格</span>
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<span class="BR_content">图表</span>
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--图表-->
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
				options:{},
				path:''
			}
		},
		beforeMount(){
			axios.get('../../../../static/data/barSchart.json').then(
				response=>{
					this.data=response.data.data;
					this.options=response.data.options;
				}
				);
			let route=this.$route.fullPath;
			let index=route.lastIndexOf('/');
			this.path='/'+route.slice(1,index);
		},
		components:{
			Schart
		}
	}
</script>

<style type="text/css">
	.breadCrumb{
		margin: 20px;
	}
	.breadCrumb .BR_content{
		font-size: 18px;
		margin-right: 10px;
	}
</style>