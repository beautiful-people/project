<template>
  <div class="loginHead">
    <div class="login-bg clear">
      <ul>
        <li @click="ind=0 " :class="{'on':ind===0}">密码登录</li>
        <li @click="ind=1" :class="{'on':ind===1}">手机登录</li>
      </ul>
      <div v-show="ind===0" class="pass">
        <form>
          <div class="form-group">
            <input type="text" placeholder="请输入账号" v-model="username"/>
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入密码" v-model="userpass" />
            <i class="el-icon-lock logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>保存密码</span>
            <span class="remove">忘记密码?</span>
          </p>
          <div class="form-group">
            <input type="button" value="立即登录" @click="getLogin"/>
          </div>
          <div class="form-group">
            <p>
              <span>免费注册</span>
            </p>
          </div>
        </form>
      </div>
      <div v-show="ind===1" class="phone">
        <form>
          <div class="form-group">
            <input type="text" placeholder="请输入手机号" v-model="userphone"  />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userpass" class="password"/>
            <button type="button">获取验证码</button>

            <i class="el-icon-lock logo"></i>
          </div>
          <div class="form-group">
            <input type="button" value="立即登录" />
          </div>
          <div class="form-group">
            <p>
              <span>免费注册</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: function() {
    return {
      ind: 0,
      username: "",
      userpass: "",
      userphone:""
    };
  },
    methods:{
      getLogin() {
            // console.log("访问查询参数：", this.$route.query.id);
            // this.$route：保存了当前路由信息
            console.log("登录")
            this.axios.post("/users/login", {
              username: this.username,
              userpass: this.userpass
            })
            .then((res) => {
              console.log(res.data)
              if(res.data.state == "200") {
                // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
                var token = res.data.token;
                sessionStorage.setItem("token", token)
                // 获取参数（未登录时想访问的路由）
                var url = this.$route.query.redirect;
                console.log(url)

                url = url ? url : "/"
                // 切换路由
                this.$router.replace(url)
              } else {
                console.log("登陆失败")
              }
            })
            .catch(err=> {
              console.log(err)
            })
          
          }


          }
      }
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
.loginHead {
  width: 100%;
  height: 400px;
  background-image: url(../../public/img/denlu.png);
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  .login-bg {
    position: absolute;
    top: 50px;
    right: 100px;
    width: 300px;
    height: 320px;
    border: 1px solid rgba(0, 0, 0, 0.075);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.075);

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
  .pass {
    form {
      .form-group {
        height: 60px;
        line-height: 60px;
        position: relative;

        input[type="text"],
        input[type="password"] {
          padding: 5px 5px;
          width: 240px;
          height: 20px;
          margin-left: 23px;
          border: 1px solid rgba(0, 0, 0, 0.274);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.274);
          text-indent: 18px;
        }

        .logo {
          position: absolute;
          top: 23px;
          left: 27px;
        }

        input[type="button"] {
          width: 254px;
          height: 32px;
          color: #fff;
          border: none;
          outline: none;
          background-color: orangered;
          margin-left: 23px;
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
          margin-left: 20px;
          float: left;
        }
        span {
          display: inline-block;
          vertical-align: middle;
          padding-left: 8px;
          font-size: 16px;
        }
        .remove {
          width: 100px;
          display: inline-block;
          float: right;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.26);
          cursor: pointer;
        }
      }
    }
  }
  .phone {
    form {
      .form-group {
        
        height: 60px;
        line-height: 60px;
        position: relative;

        input[type="text"],
        input[type="password"] {
          padding: 5px 5px;
          width: 240px;
          height: 20px;
          margin-left: 23px;
          border: 1px solid rgba(0, 0, 0, 0.274);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.274);
          text-indent: 18px;
        }
        input[type="password"] {
          width: 170px;
        }
        span {
          display: inline-block;
        }
        button {
          margin-left: 10px;
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
          left: 27px;
        }

        input[type="button"] {
          width: 254px;
          height: 32px;
          color: #fff;
          border: none;
          outline: none;
          background-color: orangered;
          margin-left: 23px;
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
     
    }
  }
}
</style>