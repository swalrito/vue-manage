<template>
	<div class="BFAdress">
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
					<a :href="scope.row.data.url1">曲线</a>
					<a :href="scope.row.data.url2">报表</a>
				</template>
			</el-table-column>
			<el-table-column
				label='曲线报表'
				align='center'>
				<template scope="scope">
					<a :href="scope.row.report.url">曲线报表</a>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default{
		data(){
			return{
				tableData:[]
			}
		},
		beforeMount(){
			axios.get('../../../../static/data/table.json').then(
				response=>{
					this.tableData=(response.data.tableData);
				})
		}
	}
</script>

<style type="text/css">
	a{
		color:#000;
		text-decoration: underline;
	}
</style>