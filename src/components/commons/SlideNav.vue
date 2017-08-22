<template>
	<div class="slideNav">
	<el-menu theme="dark">
		<el-submenu index='1'>
			<template slot='title'><i class="el-icon-menu"></i> 公路项目</template>
			<el-tree :props='defaultProps' :data='data' class='vm_tree'>
			</el-tree>
		</el-submenu>
		<el-submenu index='2'>
			<template slot='title'><i class="el-icon-menu"></i>铁路项目</template>
			<el-tree :props='defaultProps' :data='data' class='vm_tree'>
			</el-tree>
		</el-submenu>
	</el-menu>
	</div>
</template>

<script type="text/javascript">
import axios from 'axios'
	export default{
		data(){
			return {
				data:[],
				defaultProps:{
					label:'',
					children:''
				}
			}
		},
		beforeMount(){
			axios.get('../../../static/data/slideNav.json').then(response =>{
				this.data=response.data.data;
				let value=Object.values(response.data.defaultProps);
				this.defaultProps.label=value[0];
				this.defaultProps.children=value[1];
			})
		}
	}

</script>

<style type="text/css">
	.slideNav{
		position: absolute;
		top: 70px;
		height: 100%;
		width: 300px;
		background-color: #324157;
	}
	.vm_tree{
		background-color: #324157;
		border: none;
		color:#fff;
	}
</style>