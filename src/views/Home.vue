<template>
  <div>
  <index></index>
  <div class="home">
    <div class="home-main">
      <!-- 左边列表 -->
      <div class="home-left">
        <div class="home-list">
          <!-- 列表一 -->
          <div class="list">
            <div class="list-left">
              <span class="left-duank">空间</span>
              <br />
              <span class="left-home">HOME</span>
            </div>
            <div class="list-right">
              <span class="right-duank" v-for="item in msgs" @click="locat(item.id,item.msg)" :key="item.id">{{item.msg}}/</span>
            
            </div>
          </div>
          <!-- 列表一 -->
          <div class="list">
            <div class="list-left">
              <span class="left-duank">局部</span>
              <br />
              <span class="left-home">LAYOUT</span>
            </div>
            <div class="list-right">
              <span class="right-duank" v-for="item in time" :key="item.id" @click="locat(item.id,item.msg)">{{item.msg}}/</span>
              
            </div>
          </div>
          <!-- 列表一 -->
          <div class="list">
            <div class="list-left">
              <span class="left-duank">户型</span>
              <br />
              <span class="left-home">TYPE</span>
            </div>
            <div class="list-right">
                     <span class="right-duank" v-for="item in type" :key="item.id" @click="locat(item.id,item.msg)">{{item.msg}}/</span>

            </div>
          </div>
          <!-- 列表一 -->
          <div class="list">
            <div class="list-left">
              <span class="left-duank">风格</span>
              <br />
              <span class="left-home">STYLE</span>
            </div>
            <div class="list-right">
                          <span class="right-duank" v-for="item in style" :key="item.id" @click="locat(item.id,item.msg)">{{item.msg}}/</span>

            </div>
          </div>
        </div>
      </div>
      <!-- 中间轮播图 -->
      <div class="home-lunbo">
        <div class="block">
          <el-carousel trigger="click" height="448px">
            <el-carousel-item v-for="item in 1" :key="item">
              <img src="img/index-img/thetopby/1.jpg" alt />
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
              <img src="img/index-img/thetopby/2.jpg" alt />
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
              <img src="img/index-img/thetopby/3.jpg" alt />
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
              <img src="img/index-img/thetopby/4.jpg" alt />
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
              <img src="img/index-img/thetopby/5.jpg" alt />
            </el-carousel-item>
            <el-carousel-item v-for="item in 1" :key="item">
              <img src="img/index-img/thetopby/6.jpg" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 右侧广告专区 -->
      <div class="home-right">
        <img src="img/index-img/thetopby/xgtindex1.jpg" alt />
      </div>
    </div>

    <div class="home-superstars">
      <div class="home-supheader">
        <h2>精 <span> / </span>  品 <span> / </span>  主 <span> / </span>  题</h2>
        <div class="home-style">国内外优质、具有创意的家居装修设计案例图片</div>
      </div>
      <div class="super-list">
        <el-carousel :interval="4000" type="card" height="420px" width='380px '>
          <el-carousel-item v-for="item in 1" :key="item">
            <img src="img/index-img/thetopby/three.jpg" alt="" class="carousel_image_type">
            <div class="max"></div>
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <img src="img/index-img/thetopby/one.jpg" alt="" class="carousel_image_type">
          </el-carousel-item>
          <el-carousel-item v-for="item in 1" :key="item">
            <img src="img/index-img/thetopby/two.jpg" alt="" class="carousel_image_type">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 精选美图 -->
    <div class="home-superstars">
      <div class="home-supheader">
        <h2>精 <span> / </span>  选 <span> / </span>  美 <span> / </span> 图 </h2>
        <div class="home-mosthold">家居美图</div>
      </div>
      <div class="home-most">
        <div class="most-list" v-for="(item,index) in mainimg" :key="index">
          <img :src=item.imgsName class="most-list-img" alt="">
          <div class="most-list-span">{{item.imgsContext}}</div>
          <div class="most-list-span">{{item.imgsContext}}</div>
        </div>
      </div>
    </div>

    <!-- 家居风格 -->
    <div class="home-householdstyle">
      <div class="home-household">
        <h2>家 <span> / </span> 居 <span> / </span>  风 <span> / </span>  格</h2>
        <div class="home-style">审美和爱好的不同，营造特有的装饰风格</div>
      </div>
      <div class="household-list">
        <!-- 家居风格左侧 -->
        <div class="household-list-left">
          <img src="img/index-img/thetopby/xxgt_01.jpg" alt="">
          <div class="household-left-div">
            <div class="one"></div>
            <div class="sac">New Well</div>
            <div class="two"></div>
          </div>
        </div>
        <div class="household-list-right">
          <div class="household-right-img" v-for="(item,index) in foterimg" :key="index">
            <img :src=item.imgsName alt="">
            <div class="household-span">{{item.imgsContext}}</div>
          </div>
        </div>
      </div>
    </div>
    
  
    
  </div>
  
    <div class="home-footer"><footerr></footerr></div>
  </div>
  
</template>

<script>
 import index from '@/components/index'
 import footerr from '@/components/Footer.vue'

export default {
  name: "home",
  components: {
    index,
    footerr
  },
  data:function(){
    return {
     
      msg:sessionStorage.getItem("name"),
      list:{},
      mainimg:{},
      foterimg:{},
       msgs: [
        { id: 1, msg: "客厅" },
        { id: 2, msg: "餐厅" },
        { id: 3, msg: "卧室" },
        { id: 4, msg: "厨房" },
        { id: 5, msg: "阳台" },
        { id: 6, msg: "卫生间" }
      ],
      time: [
        { id: 7, msg: "隔断" },
        { id: 8, msg: "吊顶" },
        { id: 9, msg: "窗帘" },
        { id: 10, msg: "门框" },
        { id: 11, msg: "酒柜" },
        { id: 12, msg: "背景墙" }
      ],
      type: [
        { id: 13, msg: "二居" },
        { id: 14, msg: "三居" },
        { id: 15, msg: "四居" },
        { id: 16, msg: "跃层" },
        { id: 17, msg: "复式" },
        { id: 18, msg: "小户型" }
      ],
      style: [
        { id: 19, msg: "中式" },
        { id: 20, msg: "欧式" },
        { id: 21, msg: "地中海" },
        { id: 22, msg: "简约" },
        { id: 23, msg: "田园" },
        { id: 24, msg: "东南亚" }
      ],

    }
  },
  created() {
    // this.qinqiu();
    
      this.axios.post("/findUser")//在括号中，需要请求数据需要在("/",{})括号中需要的请求。
      .then(res=>{
        console.log("请求成功",res);
      this.list= res.data.data.imags;
      this.mainimg= res.data.data.imags1;
      this.foterimg= res.data.data.imags2;

      })
      .cath(err=>{
        console.log("请求失败",err);
      })

  },
  methods:{
    locat(id,msg) {
      console.log(msg)

        this.$router.push("/effectpicture?" + id);

   
    }

    // qinqiu1(){
    //   this.axios.post("/findUser")//在括号中，需要请求数据需要在("/",{})括号中需要的请求。
    //   .then(res=>{
    //     console.log("请求成功",res);
    //   this.list= res.data.data.list[0];

    //   })
    //   .cath(err=>{
    //     console.log("请求失败",err);
    //   })
    // },
    // qinqiu2(){
    //   this.axios.post("/")//在括号中，需要请求数据需要在("/",{})括号中需要的请求。
    //   .then(res=>{
    //     console.log("请求成功",res);
    //   this.list= res.data.data.list[0];

    //   })
    //   .cath(err=>{
    //     console.log("请求失败",err);
    //   })
    // }
  }
};
</script>

<style lang="less" scoped>
// 家居风格

.home{
  text-align: center;
  // overflow: hidden;
}

.home-householdstyle{
    width: 1200px;
    height: 600px;
    padding-top: 230px;
    
    margin: auto;
    
    .household-list{
      width: 1200px;
      height: 506px;
      // background: rebeccapurple;
      margin-bottom: 20px;
      .household-list-left{
        width:320px;
        height: 506px;
        float: left;
        // background: pink;
        .household-left-div:hover .one{
            border: 93px solid transparent; 
            border-bottom: 93px solid rgba(250, 71, 30,0.8);
        }
        .household-left-div:hover .two{
            border: 93px solid transparent;
            border-top: 93px solid rgba(250, 71, 30,0.8);
        }
        .household-left-div{
          float: left;
          margin-left: 67px;
          margin-top: -440px;
          z-index: 5;
          position: relative;
          .sac{
            width: 186px;
            // position: relative;
            float: left;
            font-size: 30px;
            margin-top: -15px;
            color: white;
          }
          .one {
            border: 93px solid transparent;
            width: 0;
            border-bottom: 93px solid rgba(250, 71, 30,0.6);
            }
          .two {
            border: 93px solid transparent;
            width: 0;
            border-top: 93px solid rgba(250, 71, 30,0.6);
          }
        }
        
      }
      .household-list-right{
        width: 880px;
        height: 506px;
        float: left;
        // background: rgb(151, 4, 28);
        .household-right-img:hover{
          box-shadow: 1px 1px 5px rgb(126, 126, 126);
        }
        
        .household-right-img:hover .household-span{
            font-size: 18px;
          }
        .household-right-img{
          width: 273px;
          height: 243px;
          margin-left: 20px;
          background: skyblue;
          margin-bottom: 20px;
          position: relative;
          float: left;
          img{
            width: 273px;
            height: 243px;
          }
          .household-span{
            width: 100%;
            height: 40px;
            color: white;
            background: rgba(52,52,52,.6);
            z-index: 10;
            margin-top: -44px;
            line-height: 40px;
            position: absolute;
            font-size: 12px;
          }
        }
      }
    }
    .home-household{
      height: 100px;
      width: 100%;
      padding: 45px 0 35px 0;
      .home-style{
      width: 360px;
      background: #e9e9e9;
      margin:20px auto;
      padding: 4px;
      font-size: 12px;
      }
      .home-mosthold{
        width: 120px;
        background: #e9e9e9;
        margin:20px auto;
        padding: 4px;
        font-size: 12px;
      }
    }
}

// 风格设计：
.home-superstars{
  width: 1200px;
  height: 600px;
  margin: auto;
  .home-supheader{
    height: 100px;
    width: 100%;
    padding: 45px 0 35px 0;
    .h2{
      span{
        font-size: 12px;
      }
    }
    .home-style{
      width: 360px;
      background: #e9e9e9;
      margin:20px auto;
      padding: 4px;
      font-size: 12px;
    }
    .home-mosthold{
      width: 120px;
      background: #e9e9e9;
      margin:20px auto;
      padding: 4px;
      font-size: 12px;

    }
    
  }
  .super-list{
    .el-carousel__item{
      .carousel_image_type{
        width: 380px;
      }
      .max{
        width: 100%;
        // background: red;
        height: 30px;
      }
      h3 {
        font-size: 14px;
        opacity: 1;
        line-height: 200px;
        margin: 0;
      }
    }

  }
  .home-most{
    width: 100%;
    height: 660px;
    .most-list:hover{
      box-shadow: 1px 1px 5px #888;
    }
    .most-list{
      width: 284px;
      height: 318px;
        cursor: pointer;
      margin: 0px 5px 10px 5px;
      background: #f9f9f9;
      float: left;
      .most-list-img{
        width: 284px;
        height: 230px;
      }
      .most-list-span{
        height: 20px;
        line-height: 20px;
        text-align: center;
        width: 240px;
        margin: auto;
        font-size: 12px;
        margin-top: 10px;
        }
    }
  }
}






//最顶部
.home-footer{
    // position: fixed;
    position: absolute;
    left: 0;
    width: 100%;
    // height: 100px;
    bottom: -1942px;
  }
.home {
  width: 100%;
  height: 448px;
  margin-top: -10px;
  background: #e3dfe0;
  position: relative;
  // overflow: hidden;
  
  .home-main {
    width: 1200px;
    height: 448px;
    margin: auto;
    .home-left {
      float: left;
      background: #ff552e;
      width: 250px;
      height: 448px;
      text-align: center;
      .home-list {
        height: 430px;
        margin-top: 10px;
        // background: skyblue;
        overflow: hidden;
        .list {
          height: 60px;
          width: 190px;
          margin-top: 21px;
          padding-bottom: 21px;
          margin-left: 30px;
          color: white;
          // background: springgreen;
          border-bottom: solid 1px #fa7253;
          .list-left {
            width: 50px;
            height: 50px;
            // background: yellow;
            padding-top: 5px;
            padding-right: 10px;
            float: left;
            border-right: solid 1px #fa7253;
            .left-duank {
              font-size: 18px;
              cursor: pointer;
            }
            .left-home {
              font-size: 13px;
              cursor: pointer;
            }
          }
          .list-right {
            width: 129px;
            height: 48px;
            margin-top: 8px;
            // background: palegreen;
            float: left;
            .right-duank {
              width: 36px;
              margin-top: 5px;
              margin-bottom: 5px;
              margin: 5px;
              font-size: 12px;
              text-align: left;
              line-height: 20px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .home-lunbo {
      width: 760px;
      height: 448px;
      background: pink;
      float: left;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
    .home-right {
      width: 190px;
      height: 448px;
      float: right;
      background: darkmagenta;
      cursor: pointer;
    }
  }
}
</style>