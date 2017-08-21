<template>
	<div class="slideNav">
		<el-tree 
		:data="data"
		:props="defaultProps"
		accordion
		class='nav-tree'
		>
		</el-tree>
	</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return{
				data:[{
					label:'一级 1-1',
					children:[{
						label:'二级 1-2',
						children:[{
							label:'三级 1-3'
						}]
					}]
				},{
					label:'一级 1-2',
					children:[{
						label:'二级 2-2',
						children:[{
							label:'三级 2-3'
						}]
					}]
				},{
					label:'一级 3-1',
					children:[{
						label:'二级 3-2',
						children:[{
							label:'三级 3-3'
						}]
					}]
				},{
					label:'一级 4-1',
					children:[{
						label:'二级 4-2',
						children:[{
							label:'三级 4-3'
						}]
					}]
				},{
					label:'一级 5-1',
					children:[{
						label:'二级 5-2',
						children:[{
							label:'三级 5-3'
						}]
					}]
				},{
					label:'一级 6-1',
					children:[{
						label:'二级 6-2',
						children:[{
							label:'三级 6-3'
						}]
					}]
				},{
					label:'一级 7-1',
					children:[{
						label:'二级 7-2',
						children:[{
							label:'三级 7-3'
						}]
					}]
				},{
					label:'一级 8-1',
					children:[{
						label:'二级 8-2',
						children:[{
							label:'三级 8-3'
						}]
					}]
				}],
				defaultProps:{
					children:'children',
					label:'label'
				}
			}
		}
	}
</script>

<style type="text/css">
	.slideNav{
		position: absolute;
		top: 70px;
		height: 100%;
		min-width: 300px;
		background-color: #324157;
	}
	.nav-tree{
		background-color: #324157;
		border: none;
		color: #fff;
	}
</style>