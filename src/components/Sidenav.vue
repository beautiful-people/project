<template>
  <div class="sideNav">
    <p>个人中心</p>
    <router-link to="/personalCenter/personaldata">个人资料</router-link>
    <router-link to="/personalCenter/mytender">我的招标</router-link>
    <router-link to="/personalCenter/launchbid">发布竞标</router-link>
    <router-link to="/personalCenter/information">站内信息</router-link>
    <router-link to="/personalCenter/resetpassword">重置密码</router-link>
  </div>
</template>

<script>
export default {
  name:'Sidenav'
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
