<template>
  <div class="home">
    <p>这是首页</p>
    <!-- 文本包含个人信息 -->
    <div class="main-Stick">
      <ul class="main-Stick-leftul">
        <li>欢迎 {{msg}} 的到来！</li>
        <li class="main-leftul-text">9年来打造专业装修平台，已为4,208,329位用户提供了优质装修服务！</li>
      </ul>
      <ul class="main-Stick-rightul">
        <li><img src="img/index-img/qq.png" class="main-Stick-img" alt=""> 在线咨询</li>
        <li><img src="img/index-img/tel.png" class="main-Stick-img" alt=""> <span>400-123-169</span></li>
        <li><img src="img/index-img/geren.png" class="main-Stick-img" alt=""> 进入会员中心</li>
        <li><img src="img/index-img/login.png" class="main-Stick-img" > 登录</li>
        <li><img src="img/index-img/regist.png" class="main-Stick-img" > 注册</li>
        <li><img src="img/index-img/quit.png" class="main-Stick-img" > 退出</li>
      </ul>
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
    <!-- 导航 -->
    <div class="main-top">
      <ul class="main-top-max">
        <router-link to="/">首页</router-link>
        <router-link to="/construction">在线工地</router-link>
        <router-link to="/decoration">装修公司</router-link>
        <router-link to="/decorationDesign">装修设计</router-link>
        <router-link to="/design">设计报价</router-link>
        <router-link to="/invitation">项目招标</router-link>
        <router-link to="/login">登录</router-link>
        <router-link to="/personalCenter">个人中心</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
ul a {
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  color: #333;
}

.main-Stick {
  width: 1211px;
  height: 30px;
  background: white;
  border: solid 1px rgb(223, 223, 223);
  text-align: left;
  margin: auto;
  font-size: 12px;
}
.main-Stick ul li {
  margin-right: 20px;
  margin-left: 20px;
  line-height: 30px;
  display: inline;
  cursor: pointer;
}
.main-Stick-leftul{
  float: left;
  overflow: hidden;
}
.main-Stick-rightul{
  float: right;
  overflow: hidden;
}
.main-Stick-img{
  vertical-align: middle; margin-top:-3px;
  width: 12px;
}
.main-leftul-text{
  color: #c2c2c2;
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

.main-top-max {
  line-height: 40px;
  font-size: 13px;
}
.main-top {
  width: 100%;
  height: 40px;
  background: rgb(255, 192, 203,0.5);
  float: left;
}
</style>