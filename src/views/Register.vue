<template>
  <div class="register">
    <div class="register-img">
      <img src="../../public/img/register.png" />
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
    <div class="register-bg clear">
      <ul>
        <li @click="ind=0 " :class="{'on':ind===0}">商家用户</li>
        <li @click="ind=1" :class="{'on':ind===1}">普通用户</li>
      </ul>
      <div v-show="ind===0" class="user">
        <form v-show="inx===1">
          <div class="form-group">
            <div class="select">
              <select>
                <option>省份</option>
              </select>
              <select>
                <option>城市</option>
              </select>
              <select>
                <option>区/县</option>
              </select>
            </div>
            <i class="el-icon-location-information logo city"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="你的称呼" v-model="userName" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="手机号码" v-model="userTelphone" />
            <i class="el-icon-phone logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userPass" class="password" />
            <button type="button">获取验证码</button>

            <i class="el-icon-key logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>我已同意《装信通服务条款和声明》</span>
          </p>
          <div class="form-group">
            <input type="button" value="立即注册" />
          </div>
          <div class="button">
            <input type="button" value="账号密码注册" @click="inx=0 " />
          </div>
        </form>
        <form v-show="inx===0" class="users">
          <div class="form-group">
            <div class="select">
              <select id="province">
                <option>省份</option>
              </select>
              <select id="city">
                <option>城市</option>
              </select>
              <select id="district">
                <option>区/县</option>
              </select>
            </div>
            <i class="el-icon-location-information logo city"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="登录用户名" v-model="username" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="登录密码" v-model="userpass" />
            <i class="el-icon-lock logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="联系方式" v-model="usertelphone" />
            <i class="el-icon-mobile-phone logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="security" class="password" />
            <button type="button">获取验证码</button>

            <i class="el-icon-key logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>我已同意《装信通服务条款和声明》</span>
          </p>
          <div class="form-group">
            <input type="button" value="立即注册" />
          </div>
          <div class="button">
            <input type="button" value="手机注册" @click="inx=1" />
          </div>
        </form>
      </div>
      <div v-show="ind===1" class="user">
        <form v-show="inx===1">
          <div class="form-group">
            <span>5000000</span>
            <span>已服务的家庭</span>
          </div>
          <div class="form-group">
            <div class="select">
              <select>
                <option>省份</option>
              </select>
              <select>
                <option>城市</option>
              </select>
              <select>
                <option>区/县</option>
              </select>
            </div>
            <i class="el-icon-location-information logo city"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="你的称呼" v-model="usernames" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="手机号码" v-model="usertelphones" />
            <i class="el-icon-phone logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userpasses" class="password" />
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
          <div class="button">
            <input type="button" value="手机注册" @click="inx=0 " />
          </div>
        </form>
        <form v-show="inx===0">
          <div class="form-group">
            <span>5000000</span>
            <span>已服务的家庭</span>
          </div>
          <div class="form-group">
            <div class="select">
              <select>
                <option>省份</option>
              </select>
              <select>
                <option>城市</option>
              </select>
              <select>
                <option>区/县</option>
              </select>
            </div>
            <i class="el-icon-location-information logo city"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="用户名" v-model="userNames" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="密码" v-model="userTelphones" />
            <i class="el-icon-phone logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userPasses" class="password" />
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
          <div class="button">
            <input type="button" value="账号注册" @click="inx=1 " />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data: function() {
    return {
      ind: 0,
      username: "",
      usertelphone: "",
      userpass: "",
      inx: 0,
      security: "",
      userName: "",
      userTelphone: "",
      userPass: "",
      usernames: "",
      usertelphones: "",
      userpasses: "",
      userNames: "",
      userTelphones: "",
      userPasses: "",
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
  height: 700px;
  background-image: url(../../public/img/register_bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .register-img {
    position: absolute;
    top: 120px;
    left: 250px;
    img {
      width: 520px;
      height: 520px;
    }
  }
  .register-bg {
    position: absolute;
    top: 120px;
    right: 100px;
    width: 300px;
    height: 510px;
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
        span {
          color: orangered;
          font-size: 18px;
        }
        span:nth-child(2) {
          color: rgba(0, 0, 0, 0.589);
        }
        .select {
          width: 250px;
          height: 35px;
          line-height: 35px;
          margin-left: 27px;
          margin-top: 30px;
          border: 1px solid rgba(0, 0, 0, 0.274);
          background-color: rgb(247, 241, 241);
          select {
            border: none;
            width: 60px;
            background-color: rgb(247, 241, 241);
          }
        }
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
          background-color: rgb(247, 241, 241);
          outline: none;
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
          background-color: rgba(255, 166, 0, 0.767);
          font-size: 12px;
          color: white;
        }
        .logo {
          position: absolute;
          top: 23px;
          left: 32px;
          color: orangered;
        }
        .city {
          position: absolute;
          top: 14px;
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

    .button {
      input {
        width: 100px;
        height: 30px;
        outline: none;
        border: 1px solid rgb(119, 119, 119);
        border-radius: 5px;
        color: rgb(0, 0, 0);
        background-color: rgb(247, 241, 241);
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