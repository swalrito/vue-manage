<template>
	<div class="reprotSchart">
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
					]
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
	#RS_bar{
		float:left;
	}
</style>