<template>
  <div>
    <index></index>
    <div class="homedecor">
      <div class="block">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="448px" style="text-align:center;margin:auto;">
          <!-- <el-carousel-item v-for="item in 4" :key="item"> -->
            <el-carousel-item v-for="(item,index) in imgs" :key="index"  style="text-align:center;margin:auto;">
              <img :src=item.imgsCollectionsUrl style="width:800px;height:550px" alt />
            </el-carousel-item>
            <!-- <el-carousel-item v-for="item in 1" :key="item"  style="text-align:center;margin:auto;">
              <img src="img/index-img/thetopby/2.jpg" alt />
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item"  style="text-align:center;margin:auto;">
              <img src="img/index-img/thetopby/3.jpg" alt />
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item"  style="text-align:center;margin:auto;">
              <img src="img/index-img/thetopby/4.jpg" alt />
            </el-carousel-item> -->
          <!-- </el-carousel-item> -->
        </el-carousel>
      </div>
    </div>
    <footerr></footerr>
  </div>
</template>
<script>
 import index from '@/components/index'
 import footerr from '@/components/Footer.vue'


export default {
  components: {
    index,
    footerr
  },
  data(){
    return {
      passed:0,
      imgs:{}
    }
  },
  created(){
    this.passed= location.search.substr(1)
    console.log(this.passed);
    this.axios.post('/showOneOne',{
        imgsId:this.passed
      })
      .then(res => {
        console.log("成功",res.data.data);
          this.imgs= res.data.data.imagsLists[0].imgsCollectionsList;
          // this.totalPage = res.data.data.data.totalCounte;
      // this.findCompanyAppointment();
        // }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
    // homeclick() {
    //   this.axios.post('/findDecscheme',{
        
    //   })
    //   .then(res => {
    //     console.log("分页成功",res.data.data);
    //       this.lists= res.data.data.decschemes;
    //       this.totalPage = res.data.data.data.totalCounte;
    //       console.log(res.data.data.totalCounte)
    //   // this.findCompanyAppointment();
    //     // }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // }
  }
}
</script>
<style lang="less" scopend>
  el-carousel-item{
    text-align: center;
  }
  .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
</style>