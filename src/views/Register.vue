<template>
  <div class="register">
      <div class="register-img">
          <img src="../../public/img/register.png"/>
      </div>
      <div class="register-bg clear">
      <ul>
        <li @click="ind=0 " :class="{'on':ind===0}">商家用户</li>
        <li @click="ind=1" :class="{'on':ind===1}">普通用户</li>
      </ul>
      <div v-show="ind===0" class="user">
        <form>
          <div class="form-group">
            <input type="text" placeholder="你的称呼" v-model="username"/>
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="手机号码" v-model="usertelphone" />
            <i class="el-icon-phone logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userpass" class="password"/>
            <button type="button">获取验证码</button>

            <i class="el-icon-lock logo"></i>
          </div>
           <p class="clear">
            <input type="radio" />
            <span>我已同意《装信通服务条款和声明》</span>
            
          </p>
          <div class="form-group">
            <input type="button" value="立即注册" />
          </div>
        </form>
      </div>
      <div v-show="ind===1" class="noralUser">
      
      </div>
    </div>
 </div>
</template>
<script>
export default {
  name: "register",
  data: function() {
    return {
        ind:0,
        username:"",
        usertelphone:"",
        userpass:""
    };
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.clear::before,
.clear::after {
  display: table;
  content: "";
}
.clear::after {
  clear: both;
}
.register {
  width: 100%;
  height: 600px;
  background-image: url(../../public/img/register_bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .register-img {
       position: absolute;
    top: 50px;
    left: 250px;
img {
    width: 520px;
    height: 520px;
}
  }
  .register-bg {
    position: absolute;
    top: 50px;
    right: 100px;
    width: 300px;
    height: 320px;
    border: 1px solid rgba(0, 0, 0, 0.075);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.075);
    background-color: white;
    ul {
      width: 100%;
      height: 60px;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.075);
      li {
        font-size: 18px;
        height: 60px;
        float: left;
        list-style-type: none;
        padding-left: 50px;
        line-height: 60px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.432);
      }
      .on {
        color: black;
      }
    }
  }
   .user {
    form {
      .form-group {
        height: 60px;
        line-height: 60px;
        position: relative;

        input[type="text"],
        input[type="password"],
        input[type="telephone"] {
          padding: 5px 5px;
          width: 240px;
          height: 20px;
          margin-left: 10px;
          border: 1px solid rgba(0, 0, 0, 0.274);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.274);
          text-indent: 18px;
        }
         input[type="password"] {
          width: 155px;
        }
        span {
          display: inline-block;
        }
         button {
          margin-left: 5px;
          width: 80px;
          height: 32px;
          outline: none;
          border: none;
          background-color: orange;
          font-size: 12px;
          color: white;
        }
        .logo {
          position: absolute;
          top: 23px;
          left: 32px;
          color: orangered;
        }

        input[type="button"] {
          width: 254px;
          height: 32px;
          color: #fff;
          border: none;
          outline: none;
          background-color: orangered;
          margin-left: 16px;
          &:active {
            box-shadow: 1px 1px 3px #10412b;
          }
        }
        p {
          float: right;
          margin-right: 10px;
          span {
            font-size: 14px;
            cursor: pointer;
            color: rgba(0, 0, 0, 0.26);
          }
        }
      }
      p {
        input {
          display: inline-block;
          margin-top: 5px;
          margin-left: 28px;
          float: left;
        }
        span {
          float: left;
          display: inline-block;
          vertical-align: middle;
          padding-left: 8px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>