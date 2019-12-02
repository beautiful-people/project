<template>
  <div class="forget">
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
        <li>找回密码</li>
      </ul>
      <div class="phones">
        <form>
          <div class="form-group">
            <input type="text" placeholder="请输入用户名" v-model="username" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="请输入手机号码" v-model="phone" x />
            <i class="el-icon-mobile logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="code" class="password" />
            <button type="button" @click="getcodes">获取验证码</button>
            <i class="el-icon-key logo"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="请输入新密码" v-model="userpass" />
            <i class="el-icon-lock logo"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="再次输入密码" v-model="userpass" />
            <i class="el-icon-lock logo"></i>
          </div>

          <div class="form-group">
            <el-button type="success" :plain="true" @click=" getLogins" class="loginbtn">立即修改</el-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Fpass",
  data: function() {
    return {
      userpass: "",
      phone: "",
      code: "",
      username: ""
    };
  },
  methods: {
    getcodes() {
      setTimeout(() => {
        this.axios
          .post(
            "http://172.16.6.58:8080/login/phoneCode",
            {
              phone: this.phone
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
    },
    getLogins() {
      this.axios
        .post(
          "http://172.16.6.58:8080/login/forgetPwd",
          {
            code: this.code,
            phone:this.phone,
            account: {

              accName: this.username,
              accPwd: this.userpass
            }
          },
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.open2();
            this.$router.replace("/login");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    open2() {
      this.$message({
        message: "恭喜你，修改密码成功",
        type: "success"
      });
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
.forget {
  width: 100%;
  height: 700px;
  background-image: url(../../public/img/denglu-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
    height: 450px;
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
        padding-left: 100px;
        line-height: 60px;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.884);
      }
      .on {
        color: black;
      }
    }
  }
  .phones {
    form {
      .form-group {
        height: 65px;
        line-height: 65px;
        position: relative;
        input[type="password"],
        input[type="telephone"],
        input[type="text"] {
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
}
</style>