<template>
  <div class="design">
  <el-carousel :interval="5000" arrow="always" height='450px'  style="width:700px;" >
    <el-carousel-item v-for="item in 4" :key="item" >
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: "design"
};
</script>

<style lang="less" scoped>
.design {
  width: 1366px;
  height: 1800px;
  margin: 0 auto;
 text-align: center;

  // background: yellow;
  border: 1px solid black;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>