<template>
  <div class="decorationdesign">
    <p>这是装修设计页面</p>

    <div class="left_top">
      <p>当前位置：
        <a href="javascript:;"><span class="adr">成都<span>装修网</span></span>></a>
        <span class="adr">成都</span>装修设计
      </p>
    </div>

    <div class="why">
      <h1>为什么选择FTT</h1>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <span>600</span><span>个</span>
            <p>全城已开通分站城市</p>
          </div>
          </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
          </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
          </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
          </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
a{
  text-decoration: none;
}
.decorationdesign{
  width: 80%;
  margin: 0 auto;
  height: auto;
 /*  background: #999; */
  

  .left_top{
    color: #666;
    font-size: 14px;
    a{
      color: #666;
      &:hover{
        color: #E6A23C
      }
    }
  }









  .why{
    text-align: center;
    h1{
      
      font-weight: 500;
    }
  }
}
.grid-content{
  span{
    color: orangered
  }
}
</style>