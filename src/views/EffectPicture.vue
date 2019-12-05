<template>
  <div class="invitation">
    <index></index>

    <div class="inv-nav">
      <div class="clearfix">
        <ul>
          <li>空间:</li>
          <li
            v-for="item in msgs"
            :key="item.id"
            @click="msgclick(item.msg,item.id)"
            :kj='item.msg'
            :class="{on:msgs_id == item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="msgs" :id="item.msg" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>局部:</li>
          <li
            v-for="item in time"
            :key="item.id"
            @click="timeclick(item.msg,item.id)"
            :hx="item.msg"
            :class="{on:msgs_id == item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="time" :id="item.msg" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>户型:</li>
          <li
            v-for="item in type"
            :key="item.id"
            :jb="item.msg"
            @click="jbclick(item.msg,item.id)"
            :class="{on:msgs_id == item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="time" :id="item.msg" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>风格:</li>
          <li
            v-for="item in style"
            :key="item.id"
            :fg="item.msg"
            @click="fgclick(item.msg,item.id)"
            :class="{on:msgs_id == item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="time" :id="item.msg" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="Dec-list">
      <!-- <div class="Dec-list-img">
        <div class="Dec-img-top">
          <div class="top-list-frame">
            <h1>灯装效果图</h1>
            <span>每日推荐 >></span>
          </div>
          <div class="top-img-right">
          <div class="top-img-list"  v-for="(item,index) in botletop" :key="index">
            <img :src=item.imgsrc width="100%" alt/>
            <div class="Dec-buttom-collect">
              <div class="Dec-collect-left">免费申请报价</div>
              <div class="Dec-collect-right">
                <img src="img/index-img/thetopby/wujiaoxin.png" alt />
                <span class="collect-right-img">收藏</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div> -->


      <!-- 瀑布模型 -->
      <div class="Dec-buttom-list">
         
        
          <!-- <waterfall-slot v-for="(item,index) in imags" :key="index"> -->
           

        <!-- <waterfall :line-gap="277" :watch="items">
          <waterfall-slot
            v-for="(item, index) in imags"
            :width="320"
            :height="277"
            :order="index"
            :key="index"
          > -->
          <div class="Dec-buttom-img" v-for="(item, index) in imags" :key="index">
          <!-- <div class="Dec-buttom-img"> -->

            <!-- <img :src=item.imgsName alt=""> -->
            <img :src=item.imgsName style="width:288px;height:240px;" alt="">
            <div class="Dec-buttom-collect">
              <div class="Dec-collect-left">免费申请报价</div>
              <div class="Dec-collect-right">
                <img src="img/index-img/thetopby/wujiaoxin.png" alt />
                <span class="collect-right-img">收藏</span>
              </div>
            </div>
            <div class="but-img-span">
              <span>别墅367平欧式风格餐厅吊顶设计图</span>
              <!-- <div class="but-img-like">
                <svg
                  t="1575341943175"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1978"
                  width="22"
                >
                  <path
                    d="M719.5 126C634 126 565 173.3 513.3 234.7 463.2 171.1 394.4 126 308.8 126c-120.5 0-205.4 103.6-205.4 216.6 0 60.6 24.8 104.3 52 145.3l319.1 382.6c35.8 33.6 42.6 33.6 78.4 0l319.9-382.6c32-41 52-84.7 52-145.3 0.1-113-84.8-216.6-205.3-216.6z"
                    p-id="1979"
                    fill="#999999"
                  />
                </svg>
                <span class="icon-span">{{index}}</span>
              </div> -->
            </div>

          </div> 

          <!-- </waterfall-slot>Dec-buttom-img -->
            
      </div>
      <!-- 底部分页 -->
      <div class="home-paging">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="totalPage"
          class="pagination">
        </el-pagination>
      </div>

    </div>

  <footerr class="footerr"></footerr>
  </div>
</template>

<script>
import index from "@/components/index";
import footerr from '@/components/Footer.vue'
// import Waterfall from 'vue-waterfall/lib/waterfall'
// import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'


export default {
  name: "invitation",
  components: {
    index,
    footerr
    // Waterfall,
    // WaterfallSlot
  },
  data() {
    return {
      currentPage: 1,/* 当前页码 */
      totalPage:0,//总页数
      pageSize:12,//一页三条
      msgs_id: 0,
      time_id: 0,
      jb_id:0,
      fg_id:0,
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
      text:'',
      botletop: [
        {
          imgsrc:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0329/thumb_288_280_20190329114516_39411.jpg'
        },
        {
          imgsrc:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0421/thumb_288_280_20190421165422_53098.jpg'
        },
        {
          imgsrc:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0416/thumb_288_280_20190416173734_78521.jpg'
        }
      ],

      items: [
        {
          width:"288",
          height:"240",
          img:'sss',
          id:1,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1115/thumb_288_20191115150650_59651.jpg'
        },
        { 
          width:"320",
          height:"280",
          img:'sss',
          id:2,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0416/thumb_288_20190416155255_75819.jpg'
        },
        { 
          width:"288",
          height:"405",
          img:'sss',
          id:3,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0420/thumb_288_20190420144737_62925.jpg'
        },{
          width:"288",
          height:"240",
          img:'sss',
          id:1,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1115/thumb_288_20191115150650_59651.jpg'
        },
        { 
          width:"320",
          height:"280",
          img:'sss',
          id:2,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0416/thumb_288_20190416155255_75819.jpg'
        },
        { 
          width:"288",
          height:"405",
          img:'sss',
          id:3,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0420/thumb_288_20190420144737_62925.jpg'
        },{
          width:"288",
          height:"240",
          img:'sss',
          id:1,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1115/thumb_288_20191115150650_59651.jpg'
        },
        { 
          width:"320",
          height:"280",
          img:'sss',
          id:2,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0416/thumb_288_20190416155255_75819.jpg'
        },
        { 
          width:"288",
          height:"405",
          img:'sss',
          id:3,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0420/thumb_288_20190420144737_62925.jpg'
        },{
          width:"288",
          height:"240",
          img:'sss',
          id:1,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1115/thumb_288_20191115150650_59651.jpg'
        },
        { 
          width:"320",
          height:"280",
          img:'sss',
          id:2,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0416/thumb_288_20190416155255_75819.jpg'
        },
        { 
          width:"288",
          height:"405",
          img:'sss',
          id:3,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0420/thumb_288_20190420144737_62925.jpg'
        },{
          width:"288",
          height:"240",
          img:'sss',
          id:1,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1115/thumb_288_20191115150650_59651.jpg'
        },
        { 
          width:"320",
          height:"280",
          img:'sss',
          id:2,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0416/thumb_288_20190416155255_75819.jpg'
        },
        { 
          width:"288",
          height:"405",
          img:'sss',
          id:3,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0420/thumb_288_20190420144737_62925.jpg'
        },{
          width:"288",
          height:"240",
          img:'sss',
          id:1,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1115/thumb_288_20191115150650_59651.jpg'
        },
        { 
          width:"320",
          height:"280",
          img:'sss',
          id:2,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0416/thumb_288_20190416155255_75819.jpg'
        },
        { 
          width:"288",
          height:"405",
          img:'sss',
          id:3,
          site:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/0420/thumb_288_20190420144737_62925.jpg'
        }
        
      ],

      imags:[],
      jb:'',
      fg:'',
      kj:'',
      hx:'',
      tables: [],
  
    };
  },

  // create 打开即运行
  created() {

    this.msgs_id = location.search.substr(1)
  if (location.search.substr(1) >= 1 && location.search.substr(1) <=6) {
      this.msgs_id = location.search.substr(1)
      if (location.search.substr(1) == 1) {
        this.kj = "客厅"
      } else if (location.search.substr(1) == 2) {
        this.kj = '餐厅'
      } else if (location.search.substr(1) == 3) {
        this.kj = '卧室'
      } else if (location.search.substr(1) == 4) {
        this.kj = '厨房'
      } else if (location.search.substr(1) == 5) {
        this.kj = '阳台'
      } else if (location.search.substr(1) == 6) {
        this.kj = '卫生间'
      }

      this.text = this.kj

    } else if (location.search.substr(1) >=7 && location.search.substr(1) <= 12) {
      this.time_id = location.search.substr(1)

  if (location.search.substr(1) == 7) {
        this.hx = "隔断"
      } else if (location.search.substr(1) == 8) {
        this.hx = '吊顶'
      } else if (location.search.substr(1) == 9) {
        this.hx = '窗帘'
      } else if (location.search.substr(1) == 10) {
        this.hx = '门框'
      } else if (location.search.substr(1) == 11) {
        this.hx = '酒柜'
      } else if (location.search.substr(1) == 12) {
        this.hx = '背景墙'
      }

      this.text = this.hx

    } else if (location.search.substr(1) >= 13 && location.search.substr(1) <= 18) {
      this.jb_id = location.search.substr(1)

       if (location.search.substr(1) == 13) {
        this.jb = "二居"
      } else if (location.search.substr(1) == 14) {
        this.jb = '三居'
      } else if (location.search.substr(1) == 15) {
        this.jb = '四居'
      } else if (location.search.substr(1) == 16) {
        this.jb = '跃层'
      } else if (location.search.substr(1) == 17) {
        this.jb = '复式'
      } else if (location.search.substr(1) == 18) {
        this.jb = '小户型'
      }

      this.text = this.jb
    } else if (location.search.substr(1) >=19 && location.search.substr(1) <= 24) {
      this.fg_id = location.search.substr(1)


       if (location.search.substr(1) == 19) {
        this.fg = "中式"
      } else if (location.search.substr(1) == 20) {
        this.fg = '欧式'
      } else if (location.search.substr(1) == 21) {
        this.fg = '地中海'
      } else if (location.search.substr(1) == 22) {
        this.fg = '简约'
      } else if (location.search.substr(1) == 23) {
        this.fg = '田园'
      } else if (location.search.substr(1) == 24) {
        this.fg = '东南亚'
      }

      this.text = this.fg
    }   // this.handleCurrentChange();
 


 
  console.log(location.search.substr(1))

        this.axios
      .post("/showOne", {
      styleType:this.text,
      currentPage:1,
      pageSize:12

      })
      .then(res => {
        // if (res.data.code == 200) {
          console.log(res.data.data);
       this.imags = res.data.data.imagsList;
          this.totalPage = res.data.data.totalCount;

        // }
      })
      .catch(err => {
        console.log(err);
      });
    
    console.log(typeof location.search.substr(1))
  
  },
  methods: {
    // find(){
    //   this.axios.post("/showOne",{
    //     styleType:"客厅",
    //     currentPage: this.currentPage, //当前页
    //     pageSize: this.pageSize, //每页显示的条数
    //   })//在括号中111，需要请求数据需要在("/",{})括号中需要的请求。
    //   .then(res=>{
    //     console.log("请求成功",res);
    //     // this.sc= res.data.data.imags;
    //     this.imags= res.data.data.imagesList;
    //     // this.foterimg= res.data.data.imags2;
    //   })
    //   .cath(err=>{
    //     console.log("请求失败",err);
    //   })
    // },

    handleSizeChange(val) {
      /* 每页多少条数据 */
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.axios.post("/showOne", {
        styleType:this.text,
        currentPage: val, //当前页
        pageSize: this.pageSize, //每页显示的条数
        // caluseState: 0
      })
      .then(res => {
        console.log("分页成功",res.data);
        console.log(val)

          // this.imags= res.data.data.decschemes;
       this.imags = res.data.data.imagsList;  

          this.totalPage = res.data.data.totalCount;
          // this.find();

      })
      .catch(err => {
        console.log(err);
      });
    },




    msgclick(item,id) { // 空间点击事件
      this.msgs_id = id;
      this.text = item;
      this.axios
        .post("/showOne", {
           styleType:item,
      currentPage:this.currentPage,
      pageSize:this.pageSize
        })
        .then(res => {
          
       this.imags = res.data.data.imagsList;
       this.totalPage = res.data.data.totalCount;

          
        })
        .catch(err => {
          console.log(err);
        });
    },
    timeclick(item,id) { // 户型的点击事件
      this.msgs_id = id;
      this.text = item;
      this.axios
        .post("/showOne", {
           styleType:item,
      currentPage:this.currentPage,
      pageSize:this.pageSize
        })
        .then(res => {
       this.imags = res.data.data.imagsList;
       this.totalPage = res.data.data.totalCount;

          
        })
        .catch(err => {
          console.log(err);
        });

    },
    // handleCurrentChange(val) {
    //   // 当前页
    //   this.currpage = val;
    // },
    jbclick(item,id){// 局部的点击事件
    this.msgs_id = id
    this.text = item;
  this.axios
        .post("/showOne", {
           styleType:item,
       currentPage:this.currentPage,
      pageSize:this.pageSize
        })
        .then(res => {
       this.imags = res.data.data.imagsList;
       this.totalPage = res.data.data.totalCount;

          
        })
        .catch(err => {
          console.log(err);
        });
    },
    fgclick(item,id){// 风格的点击事件
    this.msgs_id = id
    this.text = item;
      this.axios
        .post("/showOne", {
           styleType:item,
    currentPage:this.currentPage,
      pageSize:this.pageSize
        })
        .then(res => {
       this.imags = res.data.data.imagsList;
       this.totalPage = res.data.data.totalCount;

          
        })
        .catch(err => {
          console.log(err);
        });
    },

    fun(id) {
      console.log(id);
      this.axios
        .post("/tender/findBidCount", {
          tenderId: id
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data.tender);
          }
        })
        .catch(err => {
          console.log(err);
        });
      this.$router.replace("/invitation/invdetail"+id);
    }
  }
};
</script>


<style lang="less" scoped>
@import "../assets/style/base.less";

* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.list li {
  float: left;
  min-height: 10px;
  margin: 0 0 0 20px;
}
.list .item {
  margin: 0 0 10px;
}
.list img {
  display: block;
  width: 100%;
}

.invitation {
  // width: 1366px;
  margin: 0 auto;
  position: relative;

  .footerr{
    position: absolute;
    bottom: 0px;
  }
}
.Dec-list {
  margin: auto;
  width: 1211px;
  padding-bottom: 90px;
  // background: red;
  // height: 1300px;
  padding-top: 10px;
  overflow: hidden;
  .home-paging{
    width: 100%;
    height: 40px;
    margin-top: 20px;
    float: left;
    // margin: auto;
    // background: red;
    position: relative;
    .el-pagination{
      margin: auto;
    }
  }
  .Dec-list-img {
    width: 100%;
    position: relative;
    .Dec-buttom-collect:hover .Dec-collect-left {
      display: block;
    }
    .Dec-buttom-collect:hover .Dec-collect-right {
      display: block;
    }
    .Dec-buttom-collect {
      width: 288px;
      height: 100%;
      position: absolute;
      bottom: 0px;
      text-align: center;
      font-size: 12px;
      color: white;

      .Dec-collect-left {
        width: 178px;
        float: left;
        height: 28px;
        border-radius: 1px;
        position: absolute;
        background: #f76d4e;
        line-height: 28px;
        cursor: pointer;
        display: none;
        bottom: 0;
      }
      .Dec-collect-right {
        float: right;
        width: 100px;
        height: 28px;
        bottom: 0;
        right: 0;
        position: absolute;
        border-radius: 1px;
        background: #f76d4e;
        line-height: 28px;
        cursor: pointer;
        display: none;
        img {
          width: 23px;
        }
        .collect-right-img {
          vertical-align: middle;
        }
      }
    }
    .Dec-img-top {
      height: 280px;
      width: 100%;
      // background: orange;
      .top-list-frame {
        width: 282px;
        height: 278px;
        border: solid 1px #f76d4e;
        margin-left: 7px;
        margin-right: 7px;
        // background: violet;
        float: left;
        h1 {
          line-height: 30px;
          font-size: 24px;
          color: #333;
          margin-top: 90px;
          text-align: center;
        }
        span {
          line-height: 50px;
          font-size: 14px;
          color: #f76d4e;
          text-align: center;
          margin-left: 105px;
        }
      }
      .top-img-list {
        width: 288px;
        height: 280px;
        margin-left: 7px;
        margin-right: 7px;
        background: violet;
        float: left;
      }
    }
  }

  .Dec-buttom-list {
    width: 100%;
    // height: 600px;
    margin-top: 10px;
    // background: silver;
    position: relative;
    .Dec-buttom-img:hover .Dec-buttom-collect {
      display: block;
    }
    .Dec-buttom-img {
      width: 288px;
      height: 277px;
      float: left;
      margin-left: 7px;
      margin-right: 7px;
      margin-top: 7px;
      margin-bottom: 7px;
      position: relative;
      .Dec-buttom-collect {
        width: 288px;
        height: 28px;
        position: absolute;
        bottom: 37px;
        text-align: center;
        font-size: 12px;
        color: white;
        display: none;
        .Dec-collect-left {
          width: 178px;
          float: left;
          height: 28px;
          border-radius: 1px;
          background: #f76d4e;
          line-height: 28px;
          cursor: pointer;
        }
        .Dec-collect-right {
          float: right;
          width: 100px;
          height: 28px;
          border-radius: 1px;
          background: #f76d4e;
          line-height: 28px;
          cursor: pointer;
          img {
            width: 23px;
          }
          .collect-right-img {
            vertical-align: middle;
          }
        }
      }
      .but-img-span {
        height: 37px;
        border: solid 1px #eaeaea;
        // background: palegreen;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 12px;
        line-height: 37px;
        text-align: left;
        .but-img-like {
          width: 60px;
          height: 27px;
          float: right;
          // background: skyblue;
          line-height: 37px;
          margin-top: 10px;
          position: relative;
          .icon-span {
            vertical-align: middle;
            line-height: 12px;
            position: absolute;
            top: 6px;
            margin-left: 3px;
            color: #999999;
          }
        }
      }
    }
  }
}

.inv-nav {
  width: 90%;
  max-width: 1200px;
  height: 120px;
  border: 1px solid #dddddd;
  margin: 0 auto;
  padding: 10px;
  color: #5291d7;

  ul,
  li {
    list-style: none;
  }
  ul li {
    float: left;
    margin: 3px 5px;
    padding: 2px 4px;
    font-size: 14px;
    cursor: pointer;
  }
  ul li:not(1):hover {
    background: #4f94cd;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  label {
    cursor: pointer;
  }
  input[type="radio"] {
    display: none;
  }
  .on {
    background: #4f94cd;
    color: white;
    font-weight: bold;
  }
}

.msg {
  width: 90%;
  max-width: 1200px;
  text-align: center;
  height: 20px;
  line-height: 20px;
  background: #fff8e5;
  margin: 10px auto;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #dddddd;
}
.content {
  width: 90%;
  height: 640px;
  margin: 0 auto;
  border: 1px solid #dddddd;
  padding: 10px;
  max-width: 1200px;
  position: relative;

  el-table {
    width: 50%;
  }

  .page {
    position: absolute;
    bottom: 20px;
    width: 100%;
  }
}
.pagination{
  text-align: center;
  margin:40px auto;
}
</style>