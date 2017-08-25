<template>
	<div class="report">
	<!--面包屑-->
		<div class="breadCrumb">
			<el-breadcrumb>
				<el-breadcrumb-item :to="{path:path}">
					<i class="el-icon-menu BR_content"></i>
					<span class="BR_content">主表格</span>
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<span class="BR_content">报表</span>
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--报表-->
		<el-table 
			:data='data' 
			border 
			width='100%'>
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
	export default{
		data(){
			return{
				data:[
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					{Num:'12312313',date:'2017/8/24',name:'小明',age:'24',job:'老师'},
					],
					path:''
					}
			},
		beforeMount(){
			let route=this.$route.matched;
			let len=route.length;
			this.path=route[len-2].path;
		}
		}
	
</script>

<style type="text/css">
	.tableHead{
		font-size: 30px;
	}
</style>