<template>
  <div class="sideNav">
    <p>个人中心</p>
    <div v-if="showSin">
      <router-link to="/personalCenter/personaldata">个人资料</router-link>
      <router-link to="/personalCenter/mytender">我的招标</router-link>
      <router-link to="/personalCenter/launchbid">发布竞标</router-link>
      <router-link to="/personalCenter/information">站内信息</router-link>
      <router-link to="/personalCenter/resetpassword">重置密码</router-link>
    </div>
    <div v-if="showShangjia">
      <router-link to="/personalCenter/Merpersonaldata">个人资料</router-link>
      <router-link to="/personalCenter/Mermytender">我的招标</router-link>
      <router-link to="/personalCenter/Merlaunchbid">发布竞标</router-link>
      <router-link to="/personalCenter/Merinformation">站内信息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'Sidenav',
  data() {
    return {
      showSin:true,
      showShangjia:false,
      // power:sessionStorage.getItem("power")
      power: 2
    }
  },
  methods() {
    
  },
  created() {
    if(this.power == 2) {
      this.showShangjia = true;
      this.showSin = false;
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/style/base.less';
  .sideNav{
    width: 198px;
    background: #fff;
    height: 500px;
    border: 1px solid #ccc;
    p{
      height: 50px;
      color: #fff;
      background: #53C380;
      line-height: 50px;
      text-align: center;
    }
    a{
      display: block;
      height: 50px;
      color: #555;
      font-size: 14px;
      line-height: 50px;
      text-align: center;
    }
    .router-link-exact-active,
    .router-link-active {
      color: #53C380;
     }
  }
</style>
