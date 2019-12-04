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
              <select v-model="selected" @change="getCity">
                <option
                  v-for="item in provience"
                  :key="item.id"
                  :value="item.proId" :labal="item.proName"
                >{{item.proName}}</option>
              </select>
              <select v-model="selecteds" @change="getCountry">
                <option v-for="item in city" :key="item.id" :value="item.cityId">{{item.cityName}}</option>
              </select>
              <select v-model="selectedse">
                <option v-for="item in country" :key="item.id" :value="item.disId">{{item.disName}}</option>
              </select>
            </div>
            <i class="el-icon-location-information logo city"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="你的称呼" v-model="userName" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="手机号码" v-model="userTelphone" @change="phones(userTelphone)"/>
            <i class="el-icon-phone logo"></i>
          </div>
           
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userPass" class="password" id="ttes"/>
            <button type="button" @click="getcode">获取验证码</button>

            <i class="el-icon-key logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>我已同意《装信通服务条款和声明》</span>
          </p>
          <div class="form-group">
            <el-button type="success" :plain="true" @click=" getBus" class="loginbtn">立即注册</el-button>
          </div>
          <div class="button">
            <input type="button" value="账号密码注册" @click="inx=0 " />
          </div>
        </form>
        <form v-show="inx===0" class="users">
          <div class="form-group">
            <div class="select">
              <select v-model="selected" @change="getCity">
                <option
                  v-for="item in provience"
                  :key="item.id"
                  :value="item.proId"
                >{{item.proName}}</option>
              </select>
              <select v-model="selecteds" @change="getCountry">
                <option v-for="item in city" :key="item.id" :value="item.cityId">{{item.cityName}}</option>
              </select>
              <select v-model="selectedse">
                <option v-for="item in country" :key="item.id" :value="item.disId">{{item.disName}}</option>
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
            <input type="telephone" placeholder="联系方式" v-model="usertelphone" @change="phones(usertelphone)"/>
            <i class="el-icon-mobile-phone logo"></i>
          </div>
          <div>
            <input type="text" v-model="textss" style="border:none; display:none" ref="textes" class="text"></div> 
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="security" id="password" />
            <div @click="refreshCode" class="btn">
              <SIdentify  :identifyCode="identifyCode" ></SIdentify>
            </div>

            <i class="el-icon-key logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>我已同意《装信通服务条款和声明》</span>
          </p>
          <div class="form-group">
             <el-button type="success" :plain="true" @click=" getBusiness" class="loginbtn">立即注册</el-button>
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
              <select v-model="selected" @change="getCity">
                <option
                  v-for="item in provience"
                  :key="item.id"
                  :value="item.proId"
                >{{item.proName}}</option>
              </select>
              <select v-model="selecteds" @change="getCountry">
                <option v-for="item in city" :key="item.id" :value="item.cityId">{{item.cityName}}</option>
              </select>
              <select v-model="selectedse">
                <option v-for="item in country" :key="item.id" :value="item.disId">{{item.disName}}</option>
              </select>
            </div>
            <i class="el-icon-location-information logo city"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="你的称呼" v-model="usernames" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="telephone" placeholder="手机号码" v-model="usertelphones" @change="phones(usertelphones)"/>
            <i class="el-icon-phone logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userpasses" class="password" id="tts"/>
            <button type="button" @click="getCodes">获取验证码</button>

            <i class="el-icon-lock logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>我已同意《装信通服务条款和声明》</span>
          </p>
          <div class="form-group">
            <input type="button" value="立即注册" @click="getuser" />
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
              <select v-model="selected" @change="getCity">
                <option
                  v-for="item in provience"
                  :key="item.id"
                  :value="item.proId"
                >{{item.proName}}</option>
              </select>
              <select v-model="selecteds" @change="getCountry">
                <option v-for="item in city" :key="item.id" :value="item.cityId">{{item.cityName}}</option>
              </select>
              <select v-model="selectedse">
                <option v-for="item in country" :key="item.id" :value="item.disId">{{item.disName}}</option>
              </select>
            </div>
            <i class="el-icon-location-information logo city"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="账号名" v-model="userNames" />
            <i class="el-icon-user logo"></i>
          </div>
          <div class="form-group">
            <input type="text" placeholder="密码" v-model="userTelphones" />
            <i class="el-icon-lock logo"></i>
          </div>
          <div class="form-group">
            <input type="password" placeholder="请输入验证码" v-model="userPasses" class="password" id="tt"/>
            <span @click="getcodes" class="code"> {{this.code}}</span>

            <i class="el-icon-lock logo"></i>
          </div>
          <p class="clear">
            <input type="radio" />
            <span>我已同意《装信通服务条款和声明》</span>
          </p>
          <div class="form-group">
             <el-button type="success" :plain="true" @click="  getUser" class="loginbtn">立即注册</el-button>
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
import SIdentify from "@/components/SIdentify.vue";
export default {
  name: "register",
   components: {
    SIdentify
  },
  data: function() {
    return {
      ind: 0,
      username: "",
      code:"获取验证码",
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
      provience: {},
      city: {},
      country: {},
      selected: "",
      selecteds: "",
      selectedse: "",
      power:1,
      texts:"",
      textss:"",
      textsss:"",
      proId:"",
      identifyCodes: "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", // 验证码字符的集合
      identifyCode: "",
      userphones:false
    };
  },
  created() {
    this.getProvience();
    
  },
  mounted(){
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
   
  },
  methods: {
    getBusiness() {
      if(this.selected==""||this.username==""||this.userpass==""||this.usertelphone==""||this.selecteds==""||this.selectedse==""){
         this.$message.error('不能为空');
      }else {
         this.axios
        .post(
          "/register/regAccount",
          {
            account:{
              accName:this.username,
              accPwd:this.userpass,
              
            },
           phone:this.usertelphone,
             proId:this.selected,
            cityId:this.selecteds,
            disId:this.selectedse,
            power:3
           
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
           this.$router.push("/membership");
            
          } else if (res.data.code == "404"){
              this.open4();
          } else if(res.data.code == "400"){
            this.open5();
          }
        })
        .catch(err => {
          console.log(err);
        });
      }
     
    },
    getBus(){
      this.axios
        .post(
          "/register/regPhone",
          {
           code:this.userPass,
           phone:this.userTelphone,
             proId:this.selected,
            cityId:this.selecteds,
            disId:this.selectedse,
            power:3
           
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
           this.$router.push("/membership");
            
          } else if (res.data.code == "404"){
              this.open4();
          } 
        })
        .catch(err => {
          console.log(err);
        });
    },
    getuser(){
      this.axios
        .post(
          "/register/regPhone",
          {
           code:this.userpasses,
           phone:this.usertelphones,
             proId:this.selected,
            cityId:this.selecteds,
            disId:this.selectedse,
            power:2
           
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
            
          } else if (res.data.code == "404"){
              this.open4();
          } 
        })
        .catch(err => {
          console.log(err);
        });
    },
    getProvience() {
      this.axios
        .post(
          "/datas/proData",
          {},
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data.data.provinceList);
          if (res.data.code == "200") {
            this.provience = res.data.data.provinceList;
           
            console.log(typeof this.provience.proId);
            this.selected = this.provience[0].proId;
            
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCity() {
      this.axios
        .post(
          "/datas/cityData",
          {
            proId: this.selected
          },
          {
            headers: {
              "content-type": "application/json",
              proId: this.selected
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            this.city = res.data.data.cityList;
         
            this.selecteds = Number(this.city[0].cityId);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getCountry() {
      this.axios
        .post(
          "/datas/disData",
          {
            cityId: this.selecteds
          },
          {
            headers: {
              "content-type": "application/json",
              cityId: this.selecteds
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
              var countrys =this.selecteds;
           sessionStorage.setItem("countrys",countrys)
            this.country = res.data.data.disList;
            this.selectedse = this.country.disName;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUser(){
      this.axios
        .post(
          "/register/regAccount",
          {
            account:{
              accName:this.userNames,
              accPwd:this.userTelphones,
              
            },
             proId:this.selected,
            cityId:this.selecteds,
            disId:this.selectedse,
            power:2
           
          },
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if(res.data.code==200){

                this.open1();
                this.$router.push("/login");
          }  else if(res.data.code==400){
              this.open5();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getcode(){
      // if(this.userTelphone==""){

      // }
      this.axios
        .post(
          "/register/regphoneCode",
          {
            phone:this.userTelphone
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
    },
    getCodes(){
      // if(this.userTelphone==""){

      // }
      this.axios
        .post(
          "/register/regphoneCode",
          {
            phone:this.usertelphones
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
    },
    getcodes(){
      this.axios
        .post(
          "/register/regCode",
          {
          },
          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.code=res.data.data.vcode

        })
        .catch(err => {
          console.log(err);
        });
    },
    phones: function (value) {
          var pat = /^1[3456789]\d{9}$/;
      console.log(pat.test(value));
      if (pat.test(value)) {
        this.userphones=true;
        console.log("正确的手机格式");
      } else {

      this.open7()
        
      }
    },
     open() {
        this.$message({
          message: '恭喜你，注册成功 ! 请继续完善资料',
          type: 'success'
        });
    },
     open1() {
        this.$message({
          message: '恭喜你，注册成功 ! ',
          type: 'success'
        });
    },
    open2() {
         this.$message.error('账户已存在');
        this.userNameS=""
    },
    open4() {
         this.$message.error('手机号已存在');
        this.usertelphone=""
    },
    open5() {
         this.$message.error('用户名已存在');
       this.userNames="",
      this.userTelphones=""
    },
     open7() {
         this.$message.error('请输入正确的手机格式');
         this.userpass="";
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      console.log("当前验证码==", this.identifyCode);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
  },
 
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
  text-align: center;
  
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
    height: 540px;
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
        height: 65px;
        line-height: 65px;
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
          background-color: rgba(247, 241, 241, 0.37);
          outline: none;
        }
        input[type="password"] {
          width: 125px;
          display: inline-block;
          
          
        }
        #password {
          width: 135px;
          height: 28px;
          margin-right:100px;
          position: relative;
        }
        #tt {
          width: 135px;
          height: 28px;
          margin-right:100px;
          position: relative;
          
        }
        #tts {
          width: 155px;
          margin-right:0px;
          margin-left: 10px;
          
        }
         #ttes {
          width: 155px;
          margin-right:0px;
          margin-left: 10px;
          
        }
        span {
          display: inline-block;
        }
         button {
          display: inline-block;
          margin-left: 5px;
          width: 75px;
          height: 32px;
          outline: none;
          border: none;
          background-color: rgba(255, 166, 0, 0.767);
          font-size: 12px;
          color: white;
          cursor: pointer;
        }
        .code {
          display: inline-block;
          width: 90px;
          height: 38px;
          position: absolute;
          top:13px;
          right: 20px;
         line-height: 38px;
         font-size: 16px;
         background-color: rgba(255, 166, 0, 0.767);
         color: white;
          cursor: pointer;
        }
        .btn {
          display: inline-block;
          width: 75px;
          height: 32px;
          outline: none;
          border: none;
          background-color: rgba(255, 166, 0, 0.767);
          font-size: 12px;
          color: white;
          position: absolute;
          top:14px;
          right:40px;
          cursor: pointer;
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
        .logo {
          position: absolute;
          top: 25px;
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
        .text {
          color: red;
          font-size: 12px;
          width: 150px;
          display: inline-block;
          padding-left:40px;
          height: 12px;
          padding-top: -80px;
         
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