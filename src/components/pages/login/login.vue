<template>
	<div class="login">
		<div class="login-title">后台管理系统</div>
		<div class="login-form">
			<el-form :model='form' :rules='rules' ref='form'>
				<el-form-item prop="username">
					<el-input type='text' placeholder='username' v-model='form.username'>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type='password' placeholder='password' v-model='form.password'>
					</el-input>
				</el-form-item>
				<div class="login-button">
					 <el-button type="primary" @click="submitForm('form')">登录</el-button>
				</div>
				<div class="tips">
					<p>Tips : 用户名和密码随便填。</p>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return{
				form:{		//表单数据
					username:'',//登录名
					password:'',//登陆密码
				},
				rules:{
					username:[{
						required:true,message:'请输入用户名',trigger:'blur'
					}],
					password:[{
						required:true,message:'请输入密码',trigger:'blur'
					}]
					}
		}
	},
	methods:{
		submitForm(formName){
			console.log(formName);
			this.$refs[formName].validate((valid)=>{
				if(valid){
					localStorage.setItem('login_username', this.form.username);
					localStorage.setItem('login-password', this.form.password);
					this.$router.push('/index');
				}
				else{
					console.log('error submit!!');
					return false;
				}
			});
		}
	}
}
</script>

<style type="text/css">
	.login{
		width: 100%;
		height: 100%;
		background-color: #324157;
	}
	.login .login-title{
		    position: absolute;
		    top: 50%;
		    width: 100%;
		    margin-top: -230px;
		    text-align: center;
		    font-size: 30px;
		    color: #fff;
	}
	.login .login-form{
		position: absolute;
		padding: 30px;
		background-color: #fff;
		top: 50%;
		margin-top: -170px;
		width: 350px;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 6px;
	}
	.login .login-form .login-button button{
		display: inline-block;
		width: 100%;
	}
	.login .login-form .tips p{
		font-size: 12px;
	    line-height: 30px;
	    color: rgb(153, 153, 153);
	}
</style>

