<template>
  <div class="box">
    <el-container>
      <!-- 侧边导航 -->
      <el-aside width="200px">
        <Sidenav></Sidenav>
      </el-aside>
      <!-- 主内容 -->
      <el-main>
        <!-- <router-view>

        </router-view> -->
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
  }
}
</script>

<style scoped lang="less">
.box{
  margin: 0 auto;
  width: 1100px;
  height: 500px;
  background: #eee;
}
</style>