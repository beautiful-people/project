<template>
  <div class="userdetails">
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
     <div class="qwer">
      <img src="../../public/img/denlu.png" />
    </div>
    <div class="tails">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="真实姓名:">
              <el-input v-model="relName" placeholder="请输入姓名"></el-input>
              <span class="in">*必填</span>
            </el-form-item>
            <el-form-item label="手机号码:">
              <el-input v-model="userPhone" placeholder="请输入手机号码" @blur="phone(userphone)"></el-input>
              <span class="in">*必填</span>
            </el-form-item>
            <el-form-item label="性别:">
              <el-input v-model="userSex" placeholder="请输入性别"></el-input>
              <span class="in">*必填</span>
            </el-form-item>
            <el-form-item label="电子邮件:">
              <el-input v-model="userEmail" placeholder="电子邮件"></el-input>
              <span class="in">*必填</span>
            </el-form-item>
            <el-form-item>
              <button type="button" @click="getdeng" class="deng">提交</button>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="出生年月:">
              <el-input v-model="userBirthday" placeholder="请输入出生年月"></el-input>
              <span class="in">*必填</span>
            </el-form-item>
            <el-form-item label="座机号码:">
              <el-input v-model="userTelephone" placeholder="请输入座机号码"></el-input>
              <span class="in">*必填</span>
            </el-form-item>
            <el-form-item label="QQ号码:">
              <el-input v-model="userAddress" placeholder="请输入QQ号码"></el-input>
              <span class="in">*必填</span>
            </el-form-item>
            <el-form-item label="详细地址:">
              <el-input v-model="userQQ" placeholder="请输入地址"></el-input>
            </el-form-item>
            <el-form-item>
              <button type="button" @click="getdengs" class="dengs">重置</button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "userdetails",
  data: function() {
    return {
      relName: "",
      userPhone: "",
      userSex: "",
      userEmail: "",
      userBirthday: "",
      userTelephone: "",
      userAddress: "",
      userQQ: ""
    };
  },
  methods: {
    getdeng() {
      this.axios
        .post(
          "/register/regUser",
          {
            user: {
              realName: this.relName,
              userPhone: this.userPhone,
              userSex: this.userSex,
              userEmail: this.userEmail,
              userBirthday: this.userBirthday,
              userTelephone: this.userTelephone,
              userQQ: this.userAddress
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
          if (res.data.code == "200") {
            this.open();
            this.$router.push("/login");
          } else if (res.data.code == "404") {
            this.open4();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getdengs() {
      this.relName="",
        this.userPhone="",
        this.userSex="",
        this.userEmail="",
        this.userBirthday="",
        this.userTelephone="",
        this.userAddress="";
        this.userQQ="";
    },
    open() {
      this.$message({
        message: "恭喜你，注册成功",
        type: "success"
      });
    },
    open4() {
      this.$message.error("手机号已存在");
      this.usertelphone = "";
    },
    phone: function(value) {
      var pat = /^1[3456789]\d{9}$/;
      console.log(pat.test(value));
      if (pat.test(value)) {
        this.userBirthday = true;
        console.log("正确的手机格式");
      } else {
        this.$message.error("请输入正确的格式");
      }
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
.qwer {
  width: 500px;
  height: auto;
  float: left;
  margin-left: 100px;
  margin-top: 60px;
  img {
    width: 500px;
    height: 500px;
  }
}
.userdetails {
  width: 100%;
  height: 700px;
  background-image: url(../../public/img/denglu-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  .tails {
    width: 800px;
    height: 400px;
    display: flex;

    /* justify-content: space-between;
     align-items:space-around; */
   
    background: white;

    position: absolute;
    top: 120px;
    left: 550px;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(100px);
    .deng {
      width: 100px;
      height: 30px;
      margin-left: 8px;
      margin-top: 13px;
      outline: none;
      border: none;
      background-color: orange;
      border-radius: 5px;
    }
    .dengs {
      width: 100px;
      height: 30px;
      margin-left: 8px;
      margin-top: 13px;
      outline: none;
      border: none;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
    }
    .in {
     position: absolute;
     top:0;
     right: -34px; 
     font-size: 15px;
     color: rgba(255, 0, 0, 0.692);  
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