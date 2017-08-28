<template>
	<div class="BFAdress">
		<!--面包屑-->
		<div class="breadCrumb">
		<el-breadcrumb>
			<el-breadcrumb-item><i class="el-icon-menu BR_content"></i><span class="BR_content">主表格</span> </el-breadcrumb-item>
		</el-breadcrumb>
		</div>
		<!--表格-->
		<el-table 
				:data='tableData' 
				border 
				style='width:100%'>
			<el-table-column
				prop='Num' 
				label='梁体编号'
				align='center'>
			</el-table-column>
			<el-table-column
				prop='date' 
				label='上传时间'
				align='center'>
			</el-table-column>
			<el-table-column
				prop='tension' 
				label='张拉力误差'
				align='center'>
			</el-table-column>
			<el-table-column
				prop='elongation' 
				label='伸长率误差'
				align='center'>
			</el-table-column>
			<el-table-column
				label='张拉数据'
				align='center'>
				<template scope="scope">
					<router-link :to="path+scope.row.data.url1">曲线</router-link>
					<router-link :to="path+scope.row.data.url2">报表</router-link>
				</template>
			</el-table-column>
			<el-table-column
				label='曲线报表'
				align='center'>
				<template scope="scope">
					<router-link :to="path+scope.row.report.url">曲线报表</router-link>
				</template>
			</el-table-column>
		</el-table>
		<!--分页-->
		<el-pagination 
			layout="prev, pager, next, jumper" 
			:total="length" 
			:page-size='10' 
			@current-change='changeTable'>
		</el-pagination>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default{
		data(){
			return{
				totalTableData:[],
				tableData:[],
				path:'',
				length:0
			}
		},
		methods:{
			changeTable(page){
				let prev=11*(page-1);
				this.tableData=this.totalTableData.slice(prev,prev+11);
			}
		},
		beforeMount(){
			axios.get('../../../../static/data/table.json').then(
				response=>{
					this.totalTableData=response.data.tableData;
					this.tableData=this.totalTableData.slice(0,11);
					this.length=response.data.tableData.length;
				});

					}
	}
</script>

<style type="text/css">
	a{
		color:#000;
		text-decoration: underline;
	}
	.breadCrumb{
		margin: 20px;
	}
	.breadCrumb .BR_content{
		font-size: 18px;
		margin-right: 10px;
	}
</style>