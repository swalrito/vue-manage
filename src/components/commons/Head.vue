<template>
	<div class="head">
		<div class="vm_name">
			<span>后台管理系统</span>
		</div>
		<div class="vm_user">
			<el-dropdown trigger="click" @command='handleCommand'>
			<img src="../../../static/img/QQ图片20170608222447.jpg">
			<span>
			{{userName}}
			</span>
			<el-dropdown-menu slot="dropdown">
			<el-dropdown-item command="loginout">退出</el-dropdown-item>
			</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		computed:{
			userName(){
				let userName=localStorage.getItem('login_username');
				return userName;
			}
		},
		methods:{
			handleCommand(command){
				if(command=='loginout'){
					this.$router.push('./login');
				}
			}
		}
	}
</script>

<style type="text/css">
	.head{
		height: 70px;
		width: 100%;
		background-color: #242f42;
	}
	.head .vm_name{
		position: absolute;
		top: 15px;
		left: 40px;
	}
	.head .vm_name span{
		color: #fff;
		font-size: 25px;
		letter-spacing: 5px; 
	}
	.head .vm_user{
		position: absolute;
		right: 80px;
		top: 15px;
		cursor: pointer;
	}
	.head .vm_user img{
		width: 40px;
		height: 40px;
		border-radius: 40px;
		display: inline-block;
		vertical-align: middle;
	}
	.head .vm_user span{
		display: inline-block;
		color: #fff;
		vertical-align: middle;
		font-size: 18px;
		padding: 10px;

	}
</style>