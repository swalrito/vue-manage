<template>
	<div class="reprotSchart">
	<!--面包屑-->
		<div class="breadCrumb">
		<el-breadcrumb>
			<el-breadcrumb-item :to="{path:path}">
				<i class="el-icon-menu BR_content"></i>
				<span class="BR_content">主表格</span> 
			</el-breadcrumb-item>
			<el-breadcrumb-item>
				<span class="BR_content">曲线报表</span> 
			</el-breadcrumb-item>
		</el-breadcrumb>
		</div>
		<!--曲线报表-->
		<schart canvasId='RS_bar' 
				:data='data' 
				:options='options' 
				width='700' 
				height='700' 
				type='bar'>
		</schart>
		<el-table 
			:data='reportData' 
			border 
			style='width:50%'>
			<el-table-column 
				label='数据报表' 
				align='center' 
				class-name='tableHead'>
				<el-table-column 
					prop='Num' 
					label='编号'>
				</el-table-column>
				<el-table-column 
					prop='date' 
					label='日期'>
				</el-table-column>
				<el-table-column 
					prop='name'
					label='姓名'>
				</el-table-column>
				<el-table-column 
					prop='age'
					label='年龄'>
				</el-table-column>
				<el-table-column 
					prop='job'
					label='职业'>
				</el-table-column>
			</el-table-column>
		</el-table>
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
				reportData:[
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'}
					],
				path:''
			}
		},
		beforeMount(){
			axios.get('../../../../static/data/barSchart.json').then(
				response=>{
					console.log('1');
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
	#RS_bar{
		float:left;
	}
	.breadCrumb{
		margin: 20px;
	}
	.breadCrumb .BR_content{
		font-size: 18px;
		margin-right: 10px;
	}
</style>