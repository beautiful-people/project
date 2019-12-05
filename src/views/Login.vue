<template>
  <div class="loginHead">
    <div class="login-img">
      <img src="../../public/img/denlu.png" />
    </div>
    <!-- 顶部搜索框 -->
    <div class="main-top-header">
      <div class="main-top-center">
        <div class="main-top-header-logo">
          <!-- LOGO图片 -->
          <img src="img/index-img/logo.png" class="main-top-img" alt />
          <!-- 切换定位 -->
          <div class="main-top-location">
            <!-- 定位 -->
            <img src="img/index-img/land_01.png" width="19px" style="float:left;" height="23px" alt />
            <div class="main-top-city">
              <span>成都</span>
              <div class="main-top-pulldown"></div>
            </div>
          </div>
          <!-- 买得起的高端楼 -->
          <img src="img/index-img/slogan.png" alt />
        </div>
        <!-- 搜索 -->
        <div class="main-search">
          <form action>
            <input type="text" placeholder="搜索设计师、楼盘等信息" />
            <!-- <el-input v-model="input" placeholder="搜索设计师、楼盘等信息"></el-input> -->
            <input class="subsearch" type="image" src="img/index-img/search.jpg" />
          </form>
        </div>
        <!-- 右侧联系 -->
        <div class="main-top-call">
          <img src="img/index-img/tel.png" alt />
          <div class="main-top-phone">
            <span style="font-size:18px;">24</span>小时咨询热线:
            <br />
            <span style="font-size:18px;">028-86618553</span>
          </div>
        </div>
      </div>
    </div>
    <div class="login-bg clear">
      <ul>
        <li @click="ind=0 " :class="{'on':ind===0}">密码登录</li>
        <li @click="ind=1" :class="{'on':ind===1}">手机登录</li>
      </ul>
      <div v-show="ind===0" class="pass">
        <form>
          <div class="form-group">
            <input type="text" placeholder="请输入账号" v-model="username" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入密码" v-model="userpass" @blur="pan"/>
            <i class="el-icon-lock logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>保存密码</span>
            <span class="remove" @click="getfpw">忘记密码?</span>
          </p>
          <div class="form-group">
            <el-button type="success" :plain="true" @click=" getLogin" class="loginbtn">立即登录</el-button>
          </div>
          <div class="form-group">
            <p>
              <span @click="getResiter">免费注册</span>
            </p>
          </div>
        </form>
      </div>
      <div v-show="ind===1" class="phone">
        <form>
          <div class="form-group">
            <input
              type="telephone"
              placeholder="请输入手机号"
              v-model="userphone"
              @change="phone(userphone)"
            />
            <i class="el-icon-mobile logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="code" class="password" />
            <button type="button" @click="getCode" v-if="isfs">获取验证码</button>
            <button type="button" v-else>{{miao}}s重新发送</button>
            <i class="el-icon-key logo"></i>
          </div>
          <div class="form-group">
            <el-button type="success" :plain="true" @click=" getPhone" class="loginbtn">立即登录</el-button>
          </div>
          <div class="form-group">
            <p>
              <span @click="getResiter">免费注册哦</span>
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
      index:false,
      ind: 0,
      username: "",
      userpass: "",
      userphone: "",
      tokens: sessionStorage.getItem("token"),
      token:"",
      texts: "",
      code: "",
      userphones: false,
      accid:sessionStorage.getItem("accId"),
      isfs:true,
      miao:60
    };
  },
  methods: {
    sub() {
      this.isfs = false;
      var time = setInterval(() => {
        if (this.miao > 1) {
          this.miao--;
        } else {
          clearInterval(time);
          this.miao = 60;
          this.isfs = true;
        }
      }, 1000);
    },
    getResiter() {
      this.$router.replace("/register");
    },
    getfpw() {
      this.$router.replace("/fpw");
    },
    getLogin() {
      console.log("登录");

      this.axios
        .post(
          "/login/loginAcc",
          {
            accName: this.username,
            accPwd: this.userpass
          },
          {
            headers: {
              "content-type": "application/json",
              "token": this.tokens,
              "accountId":this.accid
            }
          },
          {
            xhrFields: {
                withCredentials: true
                }
          },
          {
            crossDomain: true
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
            this.token=res.data.data.token;
            this.accid=res.data.data.accountId;
            var token = res.data.data.token;
            var name = res.data.data.accountName;
            var power = res.data.data.power;
            var accId = res.data.data.accountId;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("power", power);
            sessionStorage.setItem("accId", accId);
            // 获取参数（未登录时想访问的路由）
            var url = this.$route.query.redirect;
            this.open2();
            url = url ? url : "/home?"+this.index;

            // 切换路由
            this.$router.replace(url);
            // this.axios.post("/test")
          } else if (res.data.code == "404") {
            this.open6();
          } else {
            this.open3();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCode() {
      if (this.userphone == "") {
        this.open8();
      } else {
        this.sub();
        setTimeout(() => {
          this.axios
            .post(
              "/login/phoneCode",
              {
                phone: this.userphone
              },
              {
                headers: {
                  "content-type": "application/json"
                }
              }
            )
            .then(res => {
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        }, 6000);
      }
    },
    getPhone() {
      
      this.axios
        .post(
          "/login/loginPhone",
          {
            phone: this.userphone,
            code: this.code
          },
          {
            headers: {
              "content-type": "application/json",
               "token": this.tokens,
              "accountId":this.accid
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            // var token = "njaksxbxkjasbkjcxasbjk" // 模拟后台返回的token
             var token = res.data.data.token;
            var name = res.data.data.accountName;
            var power = res.data.data.power;
            var accId = res.data.data.accountId;
            sessionStorage.setItem("token", token);
             sessionStorage.setItem("name", name);
            sessionStorage.setItem("power", power);
            sessionStorage.setItem("accId", accId);
            // 获取参数（未登录时想访问的路由）
            var url = this.$route.query.redirect;
            this.open2();
            url = url ? url : "/home?"+this.index;
            // 切换路由
            this.$router.replace(url);
            // this.axios.post("/test")
          } else if (res.data.code == "404") {
            this.open5();
          } else {
            this.open4();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    phone: function(value) {
      var pat = /^1[3456789]\d{9}$/;
      console.log(pat.test(value));
      if (pat.test(value)) {
        this.userphones = true;
        console.log("正确的手机格式");
      } else {
        this.open7();
      }
    },
    pan(){
      if(this.userpass==""){
           this.$message.error("请先输入账号");
      }
    },
    open2() {
      this.$message({
        message: "恭喜你，登陆成功",
        type: "success"
      });
    },
    open3() {
      this.$message.error("账号或者密码错误");
      this.username = "";
      this.userpass = "";
    },
    open4() {
      this.$message.error("验证码错误");
      this.username = "";
      this.userpass = "";
    },
    open5() {
      this.$message.error("手机号码不存在");
      (this.userphone = ""), (this.code = "");
    },
    open6() {
      this.$message.error("密码错误");
      this.userpass = "";
    },
    open7() {
      this.$message.error("请输入正确的手机格式");
      this.userpass = "";
    },
    open8() {
      this.$message.error("请先输入手机号");
    }
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
.loginHead {
  width: 100%;
  height: 700px;
  background-image: url(../../public/img/denglu-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  .login-img {
    position: absolute;
    top: 120px;
    left: 250px;
    img {
      width: 520px;
      height: 520px;
    }
  }
  .login-bg {
    position: absolute;
    top: 200px;
    right: 180px;
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
          margin-left: 10px;
          border: 1px solid rgba(0, 0, 0, 0.274);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.274);
          text-indent: 18px;
        }

        .logo {
          position: absolute;
          top: 23px;
          left: 32px;
        }
        canvas {
          margin-right: 10px;
        }
        .loginbtn {
          width: 254px;
          height: 32px;
          color: #fff;
          border: none;
          outline: none;
          background-color: orangered;
          margin-left: 17px;
        }
        input[type="button"] {
          width: 254px;
          height: 32px;
          color: #fff;
          border: none;
          outline: none;
          background-color: orangered;
          margin-left: 17px;
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
          float: left;
          margin-left: 27px;
        }
        span {
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          float: left;
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
        height: 65px;
        line-height: 65px;
        position: relative;

        input[type="telephone"],
        input[type="password"] {
          padding: 5px 5px;
          width: 240px;
          height: 20px;
          margin-left: 10px;
          border: 1px solid rgba(0, 0, 0, 0.274);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.274);
          text-indent: 18px;
          margin-top: 5px;
        }
        input[type="password"] {
          width: 155px;
        }
        .loginbtn {
          width: 254px;
          height: 32px;
          color: #fff;
          border: none;
          outline: none;
          background-color: orangered;
          margin-left: 17px;
        }
        canvas {
          margin-left: 10px;
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
          cursor: pointer;
        }
        .logo {
          position: absolute;
          top: 23px;
          left: 32px;
        }

        input[type="button"] {
          width: 254px;
          height: 32px;
          color: #fff;
          border: none;
          outline: none;
          background-color: orangered;
          margin-left: 18px;
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
      .text {
        color: red;
        font-size: 12px;
        width: 150px;
        display: inline-block;
        padding-left: 40px;
        height: 10px;
        padding-top: -100px;
      }
    }
  }
}
.main-top-header {
  width: 100%;
  height: 103px;
  background: #494949;
  border-top: solid 1px rgb(206, 206, 206);
}
.main-top-center {
  width: 1211px;
  height: 100px;
  // background: red;
  margin: auto;
  overflow: hidden;
}
.main-top-header-logo {
  width: 500px;
  height: 50px;
  // background: aqua;
  margin-top: 30px;
  text-align: left;
  float: left;
}
.main-top-img {
  float: left;
}
.main-top-location {
  width: 90px;
  height: 40px;
  margin-left: 30px;
  margin-top: 10px;
  margin-right: 38px;
  float: left;
  line-height: 20px;
  overflow: hidden;
}
.main-top-city {
  margin-left: 10px;
  margin-top: 0px;
  float: left;
  overflow: hidden;
  color: white;
}
.main-top-city .main-top-pulldown {
  margin-top: 5px;
  margin-left: 5px;
}
.main-top-pulldown {
  width: 0px;
  height: 0px;
  float: right;
  line-height: 50px;
  border-top: 7px solid white;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid transparent;
}
.main-search {
  width: 435px;
  height: 38px;
  float: left;
  margin-top: 35px;
  margin-left: 40px;
}
.main-search input:nth-child(1) {
  width: 415px;
  height: 14px;
  border-radius: 5px;
  border: 0;
  padding: 10px;
  float: left;
}
.subsearch {
  margin-right: 9px;
  float: right;
  margin-top: -27px;
}
.main-top-call {
  width: 180px;
  height: 46px;
  margin-left: 30px;
  float: right;
  // background: red;
  margin-top: 33px;
  text-align: left;
  float: left;
}
.main-top-phone {
  float: right;
  margin-right: 12px;
  font-size: 16px;
  color: white;
}
</style>