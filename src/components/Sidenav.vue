<template>
  <div class="sideNav">
    <p>个人中心</p>
    <router-link to="/">个人资料</router-link>
    <router-link to="/">我的招标</router-link>
    <router-link to="/">发布招标</router-link>
    <router-link to="/">个人资料</router-link>
  </div>
</template>

<script>
export default {
  name:'Sidenav'
}
</script>

<style scoped lang="less">

  .sideNav{
    width: 198px;
    background: #fff;
    height: 600px;
    border: 1px solid #ccc;
    p{
      height: 50px;
      color: #fff;
      background: orangered;
      line-height: 50px;
    }
  }
</style>
