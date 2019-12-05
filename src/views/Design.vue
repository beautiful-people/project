<template>
  <div class="design">
    <index></index>
  <el-carousel :interval="5000" arrow="always" height='450px'  style="width:700px;margin:0 auto" >
    <el-carousel-item v-for="(item,index) in imglist" :key="index" >
      <img :src="item.imgPath" alt="" style="width:700px;height:450px;">
    
    </el-carousel-item>
  </el-carousel>
  <footerr class="footer"></footerr>
  </div>
</template>

<script>

 import index from '@/components/index'
import footerr from '@/components/Footer'

export default {
  name: "design",
  components:{
    index,
    footerr
  },
  data(){
     return {
        tenderId: location.search.substr(1),
        imglist:[]
     }

  },
  created(){
      this.axios
        .post("/selectdemoImg", {
          schemeId:this.tenderId
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data.decorationimgs);
            this.imglist = res.data.data.decorationimgs;
            console.log(this.imglist)
           
          }
        })
        .catch(err => {
          console.log(err);
        });
  }
};
</script>


<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.footer {
  position: absolute;
  bottom: -80px;
}
.design {
  // width: 1366px;
  height: 700px;
  margin: 0 auto;
 text-align: center;
 position: relative;

  // background: yellow;
  // border: 1px solid black;
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
}

</style>