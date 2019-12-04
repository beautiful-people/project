<template>
  <div class="box">
    <el-container>
      <!-- 侧边导航 -->
      <el-aside width="200px">
        <Sidenav></Sidenav>
      </el-aside>
      <!-- 主内容 -->
      <el-main class="wrap">
        <router-view></router-view>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
import Sidenav from '../components/Sidenav'

export default {
  name: 'PersonalCenter',
  props: {
    
  },
  components: {
    Sidenav
  },
  // Vue.http.interceptors.push((request, next) => {
  //   	request.headers.set('lanId', ‘100’);
  //  })
}
</script>

<style scoped lang="less">
.box{
  margin: 0 auto;
  width: 1100px;
  background: #eee;
}
.wrap{
  text-align: left;
  width: 870px;
  margin-left: 30px;
  box-sizing: border-box;
  min-height: 360px;
  background: #fff;
  padding: 10px 50px;
  border: 1px solid #ccc;
  position: relative;
}
</style>