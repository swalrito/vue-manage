<template>
	<div class="login">
		<div class="login-title">后台管理系统</div>
		<div class="login-form">
			<el-form>
				<el-form-item>
					<el-input type='text' placeholder='username'>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-input type='password' placeholder='password'>
					</el-input>
				</el-form-item>
				<div class="login-button">
					<el-button type="primary">登陆</el-button>
				</div>
				<div class="tips">
					<p>Tips : 用户名和密码随便填。</p>
				</div>
			</el-form>
		</div>
	</div>
</template>

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

<script type="text/javascript">
	
</script>