<template>
	<div class="slideNav">
	<el-menu theme="dark">
		<el-submenu index='1'>
			<template slot='title'><i class="el-icon-menu"></i> 公路项目</template>
			<el-tree :props='defaultProps' ref='tree' :data='data' @node-click="handleNodeClick" :expand-on-click-node='false' node-key='id' class='vm_tree'>
			</el-tree>
		</el-submenu>
		<el-submenu index='2'>
			<template slot='title'><i class="el-icon-menu"></i>铁路项目</template>
			<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :expand-on-click-node='false' class='vm_tree'></el-tree>
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
		methods:{
	      handleNodeClick(data,node,tree) {
	      	let level=node.level;
	      	let id=data.id;
	      	if(node.level==2){
	      		this.$router.push('/index/company_'+id);
	      	}
	      	else if(node.level==3){
	      		this.$router.push('/index/address_'+id);
	      	}
	      	else if(node.level==4){
	      		this.$router.push('/index/beamField_'+id);
	      	}
	      	else if(node.level==5){
	      		this.$router.push('/index/BFAdress_'+id);
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
		float: left;
		height: 100%;
		width: 300px;
		background-color: #324157;
		overflow-y: scroll;
	}
	.vm_tree{
		background-color: #324157;
		border: none;
		color:#fff;
	}
</style>