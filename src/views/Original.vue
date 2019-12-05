<template>
  <div class="orig">
    <index></index>
    <!-- 两列布局 -->
    <div class="original-max" v-for="(item,index) in rightlist" :key="index">
      <!-- 左侧 -->
      <div class="original-left">
        <div class="original-left-tenant">
          <div class="left-tenant-top">
            <h1>{{item.merName}}</h1>
            <!-- <img :alt="item.merName" src="//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1118/thumb_168_20191118092539_29884.jpg"> -->
          </div>
          <div class="left-tenant-main">
            <div>
              <div class="tenant-main-recommend">荐</div>
              <div class="tenant-main-card">证</div>
              <div class="tenant-main-danger">险</div>
              <strong>{{item.merName}}<img src="//www.zx123.cn/templates/zx123cs/img_new/i_zhuans.gif" alt=""></strong>
            </div>
          </div>

          <p>
            <!-- <img src="http://www.zx123.cn/templates/zx123cs/img_new/iou23.png" alt=""> 
            <strong>装信通1年</strong> -->
            注册时间： {{getTime(item.userDate)}}
          </p>

          <div class="left-tenant-number">
            <!-- <div class="left-tenant-content">文章:<span>22</span>篇</div>  -->
            <!-- <div class="left-tenant-content">案例:<span>41</span>套 工地:<span>9</span>个</div>  -->
            <!-- <div class="left-tenant-content">工地:<span>9</span>个</div>  -->
            <!-- <div class="left-tenant-content">设计师:<span>8</span>位</div> -->
          </div>
          
          <div class="left-tenant-phone">
            <svg t="1575405564361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17132" width="14" height="14"><path d="M912 743.8c0 10.3-1.9 23.6-5.7 40-3.8 16.5-7.8 29.4-11.9 38.9-8 19-31.1 39-69.4 60.2-35.5 19.3-70.7 28.9-105.7 28.9-10.3 0-20.4-0.6-30.1-2.1-9.8-1.3-20.8-3.7-32.6-7.1-11.9-3.4-20.8-6.2-26.7-8.2-5.8-2.1-16.4-6.1-31.6-11.6-15.1-5.7-24.4-9.1-27.8-10.3-37.1-13.3-70.3-28.9-99.4-47.2-48.2-29.8-98.1-70.9-150-122.7-51.8-51.8-92.8-102-122.7-150-18.2-29.1-34-62.3-47.2-99.4-1.2-3.4-4.5-12.7-10.3-27.8s-9.6-25.7-11.6-31.6c-2.1-5.8-4.7-14.8-8.2-26.7-3.4-11.9-5.7-22.8-7.1-32.6s-2.1-19.9-2.1-30.1c0-34.9 9.7-70.1 28.9-105.7 21.2-38.2 41.2-61.4 60.2-69.4 9.5-4.1 22.4-8.1 38.9-11.9 16.5-3.8 29.8-5.7 40-5.7 5.2 0 9.4 0.6 11.9 1.6 6.9 2.3 16.8 16.7 30.1 43.2 4.1 7.2 9.8 17.4 17.1 30.8 7.2 13.3 13.9 25.3 19.9 36.1 6.2 10.8 11.9 20.9 17.5 30.4 1.2 1.5 4.4 6.3 10 14.2 5.5 8 9.6 14.7 12.1 20.3 2.6 5.5 3.9 10.9 3.9 16.3 0 7.6-5.4 17.1-16.3 28.4-10.8 11.3-22.6 21.8-35.3 31.4-12.7 9.5-24.4 19.5-35.3 30.1-10.8 10.6-16.3 19.3-16.3 26.1 0 3.4 0.9 7.7 2.9 12.8 1.9 5.1 3.4 9 4.7 11.6 1.3 2.6 3.9 7.2 8 13.6 3.9 6.5 6.2 10.1 6.6 10.8 28.7 51.9 61.7 96.4 98.8 133.5 37.1 37.1 81.6 70.1 133.5 98.8 0.7 0.3 4.2 2.5 10.8 6.6 6.5 3.9 11 6.6 13.6 8 2.6 1.3 6.6 3 11.6 4.7 5.1 1.9 9.4 2.9 12.8 2.9 6.9 0 15.5-5.4 26.1-16.3 10.6-10.8 20.7-22.6 30.1-35.3 9.5-12.7 19.9-24.4 31.4-35.3 11.5-10.9 20.8-16.3 28.4-16.3 5.2 0 10.8 1.3 16.3 3.9s12.1 6.7 20.3 12.1c8 5.5 12.7 8.8 14.2 10 9.5 5.7 19.7 11.6 30.4 17.5 10.8 6.2 22.8 12.7 36.1 19.9 13.3 7.2 23.6 12.9 30.8 17.1 26.5 13.3 40.9 23.3 43.2 30.1 1.6 3.2 2.2 7.3 2.2 12.5z" p-id="17133" fill="#f94224"></path></svg>
            <strong> {{item.merPhone}} {{item.merName}}</strong>

            <div class="left-tenant-site">
              <svg t="1575405816190" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18127" width="12" height="12"><path d="M512 959.84c-8.77 0-17.17-3.55-23.27-9.85-3.34-3.44-82.64-85.5-163.26-190.93-47.72-62.4-85.85-119.97-113.34-171.09-36.41-67.72-54.11-123.28-54.11-169.85 0-47.77 9.36-94.13 27.83-137.79 17.83-42.15 43.35-80.01 75.85-112.5 32.5-32.5 70.35-58.02 112.5-75.85 43.67-18.46 90.03-27.82 137.8-27.82s94.13 9.36 137.79 27.83c42.16 17.83 80.01 43.35 112.51 75.85 32.5 32.5 58.02 70.35 75.85 112.5 18.47 43.66 27.83 90.02 27.83 137.79 0 46.57-17.7 102.13-54.11 169.85-27.49 51.12-65.62 108.69-113.34 171.09C617.91 864.49 538.61 946.56 535.27 950a32.436 32.436 0 0 1-23.27 9.84z m0-830.87c-159.44 0-289.16 129.72-289.16 289.16 0 35.04 15.56 81.78 46.24 138.9 25.79 48.02 61.96 102.59 107.5 162.18 52.7 68.97 105.96 128.81 135.41 160.84 29.45-32.02 82.71-91.87 135.41-160.84 45.54-59.59 81.71-114.15 107.5-162.18 30.69-57.13 46.24-103.86 46.24-138.9 0.02-159.44-129.7-289.16-289.14-289.16z" p-id="18128" fill="#f94224"></path><path d="M512 570.98c-79.74 0-144.61-64.87-144.61-144.61S432.26 281.75 512 281.75c79.74 0 144.61 64.87 144.61 144.61S591.74 570.98 512 570.98z m0-224.41c-44 0-79.8 35.8-79.8 79.8s35.8 79.8 79.8 79.8 79.8-35.8 79.8-79.8-35.8-79.8-79.8-79.8z" p-id="18129" fill="#f94224"></path></svg>
              <span>{{item.merServeArea}}</span>
            </div>
          </div>
        </div>

        <div class="original-left-main">
          <input type="text" placeholder="您的称呼" v-model="name">
          <input type="text" placeholder="您的电话" v-model="phone">
          <input type="text" placeholder="所在区域-如：武侯区" v-model="site">
          <input type="text" placeholder="您的住房面积 ㎡" v-model="area">
          <button type="submit" @click="addCompanyAppointment()">申请装修服务</button>
        </div>

        <div class="original-left-list">
          <h5>最新预约</h5>
          <ul v-for="(item,index) in order" :key="index">
            <li>{{order[index].name}}</li>
            <li>{{order[index].areaName}}</li>
            <li>{{order[index].decorateArea}}㎡</li>
            <li>面议</li>
          </ul>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="original-right">
        <div class="original-right-top">
          <div class="shuxian"></div> <strong class="list-name-top">{{item.merName}}原创案例</strong>
        </div>
        
        <div class="original-right-bottom" >
          <div class="right-bottom-list" v-for="(item,index) in lists" :key="index">
            <img :src=item.decorationimgs[0].imgPath style="width: 290px;height:217px;">
            <span>{{item.schemeName}}</span><br>
            <span>{{item.roomType}}/{{item.roomStyle}}/{{item.roomArea}} ㎡</span>
          </div>

        <div class="original-right-pages">
          <!-- <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="12"
            layout="prev, pager, next, jumper"
            :total="2"
            class="pag"
          > -->
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="totalPage">
          </el-pagination>
            <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
          <!-- </el-pagination> -->
        </div>

        
        </div>
        <div class="original-right-footer">
          <div class="original-footer-top">
            <div class="shuxian"></div> <strong class="list-name-top">这家装饰公司怎么样？—用户留言</strong>
          </div>
          
          <div class="original-footer-main" v-for="(com,cin) in comment" :key="cin">
            <div class="leftimg">
              <img src="//www.zx123.cn/templates/zx123new/mobile_new/img/compan_eg4.jpg" alt="">
            </div>
            <div class="right-comment">
              <div>{{com.liuYanName}}</div>
              <div>{{getTime(com.liuYanDate)}}</div>
              <div>{{com.liuYanContext}}</div>
            </div>
          </div>

          <!-- 发布留言 -->
          <div class="original-footer-button">
            <div class="shuxian"></div> 
            <strong class="list-name-top">发布留言</strong>
          </div>
          
          <div class="original-footer-comment">
            留言内容： <input type="textarea" v-model="content"> <br>
            手机号码： <input type="text" v-model="phonenumber"> <br>
            您的称呼： <input type="text" v-model="yourname"> <br>
            满 意 度 : <div class="block">
                        <el-rate
                          v-model="grade"
                          :colors="colors"
                          :class="pinfen">
                        </el-rate>
                      </div>

            



             <!-- <select @change="changeSelect" v-model="grade">
                        <option>请选择</option>
                        <option value="5">非常满意</option>
                        <option value="4">满意</option>
                        <option value="3">一般</option>
                        <option value="2">不满意</option>
                        <option value="1">很不满意</option>
                      </select><br> -->
            <button @click="leaveMessage"> 提交留言</button>
          </div>
        </div>


      </div>
    </div>
    <footerr class="footerr"></footerr>
  </div>
</template>
<script>
import index from "@/components/index";
 import footerr from '@/components/Footer.vue'

export default {
  name:"Original",
  components: {
    index,
    footerr
  },
  data(){
    return{
      merId:'',
      datatime:'',
      content:'',
      phonenumber:'',
      yourname:'',
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'] , // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      
      grade:'',
      currentPage: 1,/* 当前页码 */
      totalPage:0,//总页数
      pageSize:12,//一页三条
      lists:{},
      order:{},
      comment:{},//评论区
      name: '',
      phone:'',
      site:'',
      area:'',
      rightlist:''
    }
  },
  
  created() {
    
    this.merId= location.search.substr(1)
    // this.findCompanyAppointment();
    // this.findDecsheme();
    this.axios
      .post("/findDecscheme", {
        merId:this.merId,
        currentPage: this.currentPage, //当前页
        pageSize: this.pageSize, //每页显示的条数
        // caluseState: 0
      })
      .then(res => {
        console.log("分页成功",res.data);
          this.lists= res.data.data.decschemes;
          this.totalPage = res.data.data.totalCount;
      this.findCompanyAppointment();
      
        // }
      })
      .catch(err => {
        console.log(err);
      });

    this.axios.post("/findMerchants",{
      merId:this.merId,
    })
    .then(res => {
      console.log("右侧列表",res.data.data.merchants1);
      this.rightlist = res.data.data.merchants1;
    })
    .catch(err => {
      console.log(err);
    });
  },

  methods:{
    // 改变select的值
    changeSelect(){
      // this.grade=event;
      console.log(this.grade);
    },
     getTime(time) {
      /**
       * 时间对象的格式化;
       */
      Date.prototype.format = function(format) {
        /*
         * eg:format="YYYY-MM-dd hh:mm:ss";
         */
        var o = {
          "M+": this.getMonth() + 1, // month
          "d+": this.getDate(), // day
          "h+": this.getHours(), // hour
          "m+": this.getMinutes(), // minute
          "s+": this.getSeconds(), // second
          "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
          S: this.getMilliseconds() // millisecond
        };
        if (/(y+)/.test(format)) {
          format = format.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        }
        for (var k in o) {
          if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
          }
        }
        return format;
      };

      var jsDate = new Date(time).toLocaleDateString();
      var date = jsDate.split("/");
      var times = date.join("-");
      return times;
    },
    // 请求图片
    findDecsheme() {
      this.axios.post("/findDecscheme",{
        merId:1,
        currentPage: this.currentPage, //当前页
        pageSize: this.pageSize, //每页显示的条数
      })//在括号中111，需要请求数据需要在("/",{})括号中需要的请求。
      .then(res=>{
        console.log("请求成功",res);
        this.lists= res.data.data.decschemes;
        this.findCompanyAppointment();
      })
      .cath(err=>{
        console.log("请求失败",err);
      })
    },
    // 预约
     addCompanyAppointment() {
      console.log(this.name)
       this.axios.post("/addCompanyAppointment",{
        name: this.name,
        number:this.phone,
        areaName:this.site,
        decorateArea:this.area,
      })
      .then(res=>{
        console.log("请求成功",res);
        this.findCompanyAppointment();
      })
      .cath(err=>{
        console.log("请求失败",err);
      })
    },
    // 加载
    findCompanyAppointment() {
       this.axios.post("/findCompanyAppointment")//在括号中111，需要请求数据需要在("/",{})括号中需要的请求。
      .then(res=>{
        console.log("加载成功",res);
        this.order= res.data.data.companyAppointments;
        this.commentDesc();
      })
      .cath(err=>{
        console.log("加载失败",err);
      })
    },
    // 发布留言
    leaveMessage() {
      // this.datatime=;
      this.axios
        .post("/addLiuYan", {
          liuYanNumber:this.phonenumber, // 用户电话
          liuYanName:this.yourname,//用户姓名
          liuYanDate:new Date(),
          liuYanContext:this.content, //用户留言内容
          liuYanScore:this.grade, //用户评分
          merId:this.merId
        })
        .then(res => {
          console.log("留言成功",res);
            this.commentDesc();
            // this.comment= res.data.data.liuyans;
            // this.totalPage = res.data.data.data.totalCounte;
            // console.log(res.data.data.totalCounte)
        // this.findCompanyAppointment();
          // }
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 加载留言
    commentDesc() {
      this.axios
        .post("/findLiuYan", {
          merId:this.merId, // merId需要动态传参商家ID
        })
        .then(res => {
          console.log("分saadssss",res);
            this.comment= res.data.data.liuyans;
            // this.totalPage = res.data.data.data.totalCounte;
            // console.log(res.data.data.totalCounte)
        })
        .catch(err => {
          console.log(err);
        });
    },

    handleSizeChange(val) {
      /* 每页多少条数据 */
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      /* 获取当前页码 */
      this.axios
        .post("/findDecscheme", {
          merId:this.merId,
          currentPage: this.currentPage, //当前页
          pageSize: this.pageSize, //每页显示的条数
          // caluseState: 0
        })
        .then(res => {
          console.log("分页成功",res.data.data);
            this.lists= res.data.data.decschemes;
            this.totalPage = res.data.data.data.totalCounte;
            console.log(res.data.data.totalCounte)
        // this.findCompanyAppointment();
          // }
        })
        .catch(err => {
          console.log(err);
        });
    },

  }
}
</script>

<style lang="less">
  *{
    margin: 0;
    padding:0;
  }
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.block{
  margin-left: 90px;
  margin-top: -16px;
  width: 240px;
  height: 30px;
}
.pinfen{
  margin-left: 50px;
  width: 240px;
  height: 30px;
}
.orig{
  position: relative;
  .footerr{
    position: absolute;
    // bottom: -160px;
    bottom: 0;
  }
}
  .original-max{
    width: 1280px;
    // height: 500px;
    // background: rebeccapurple;
    overflow: hidden;
    margin: auto;
    .original-left{
      width: 320px;
      // height: 500px;
      // background: skyblue;
      float: left;
      .original-left-list{
        margin-top: 10px;
        width: 288px;
        height: 230px;
        padding: 15px;
        border: solid 1px slategrey;
        border-radius: 3px;
        background: rgb(255, 255, 255);
        h5{
        margin-bottom: 10px;
        }
        ul{
          font-size: 12px;
          line-height: 35px;
          li{
            width: 50px;
          }
        }
      }

      .original-left-main{
        width: 280px;
        height: 310px;
        background: springgreen;
        margin-top: 15px;
        border-radius: 3px;
        padding: 20px;
        background: #ffe99e url(//www.zx123.cn/templates/zx123cs/yp/img/yp_bidd.jpg) no-repeat;
        background-size: 100% auto;
        input:nth-child(1){
          margin-top: 62px;
          // margin-top: 10px;
          margin-left: 7px;
          width: 256px;
          height: 20px;
          padding: 10px;
        }
        input{
          margin-top: 10px;
          width: 256px;
          height: 20px;
          padding: 10px;
        }
        button{
          margin-top: 10px;
          width: 280px;
          height: 40px;
          padding: 10px;
          background: #949391;
          color: #ffffff;
          background: #dd6e24;
          border-radius: 5px;
          border: 0;
        }
        select{
          margin-top: 10px;
          width: 280px;
          height: 50px;
          padding: 10px;
        }
      }
      .original-left-tenant{
        width: 288px;
        height: 255px;
        padding: 15px;
        border: solid 1px slategrey;
        border-radius: 3px;
        background: rgb(255, 255, 255);
        .left-tenant-phone{
          width: 100%;
          height: 62px;
          margin-top: 10px;
          margin-bottom: 10px;
          // background: #52e2ef;
          text-align: center;
          .left-tenant-site{
            margin-top: 10px;
            font-size: 12px;
            vertical-align: middle;
          }
          strong{
            width: 100%;
            text-align: center;
            // vertical-align: middle;
          }
        }
        p{
          color: #ff8c48;
          font-size: 16px;
          padding-top: 10px;
          padding-bottom: 10px;
          text-align: center;
          margin: auto;
          position: relative;
          // padding-right: 25px;
          strong{
            position: absolute;
            top:16px;
            left: 116px;
            color: #ff8c48;
            font-size: 10px;
          }
        }
        .left-tenant-number{
          width: 100%;
          margin: auto;
          height: 20px;
          // background: #5fcfa1;
          line-height: 40px;
          font-size: 12px;
          text-align: center;
          border-bottom:1px dashed rgb(110, 110, 110);
          .left-tenant-content{
            width: 100%;
            text-align: center;
            // margin-left: 50px;
            // margin-right:7px;
            text-align: center;
            float: left;
            span{
              color: #ff8c48;
            }
          }
        }
        .left-tenant-main{
          // width: 288px;
          height: 42px;
          // background: aquamarine;
          text-align: center;
          margin: auto;
          line-height: 42px;
          font-size: 14px;
          vertical-align: middle;
          position: relative;
          div{
            // background: red;
            height: 42px;
            .tenant-main-danger{
              color: rgb(255, 255, 255);
              background: #52e2ef;
              float: left;
              margin-left: 5px;
              width: 20px;
              height: 20px;
              line-height: 20px;
              margin-top: 11px;
              font-size: 12px;
          }
          }
          .tenant-main-card{
            color: rgb(255, 255, 255);
            background: #fda355;
              float: left;
              margin-left: 5px;
              width: 20px;
              height: 20px;
              line-height: 20px;
              margin-top: 11px;
              font-size: 12px;
          }
          .tenant-main-recommend{
            color: #ffffff;
              background: #5fcfa1;
              float: left;
              margin-left: 62px;
              width: 20px;
              height: 20px;
              line-height: 20px;
              margin-top: 11px;
              font-size: 12px;
          }
          strong{
            margin-left: 10px;
            float: left;
            img{
              position: absolute;
              top: 10px;
              margin-left: 4px;
              float: left;
            }
          }
          
        }
        .left-tenant-top{
          width: 288px;
          height: 85px;
          background: #fcfcfc;
          border-radius: 5px;
          line-height: 85px;
          text-align: center;
          img{
            margin: 7.5px 60px;
          }
        }
      }
    }
    .original-right{
      width: 948px;
      // height: 900px;
      float: left;
      border-radius: 5px;
      margin-left: 12px;
      // background: palegreen;
      .original-right-footer{
        padding: 18px 20px 0 20px;
        width: 908px;
        // height: 100px;
        // background: red;
        float: left;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 120px;
        .original-footer-comment{
          
          background: #f7f7f7;
          height: 275px;
          width: 845px;
          padding: 30px;
          
          border-radius: 5px;
          button:hover{
            color: #ffffff;
          }
          button{
            width: 120px;
            height: 40px;
            margin-top: 14px;
            margin-left: 92px;
            background: #ff5722;
            cursor: pointer;
            border: 0;
          }
          input:nth-child(1){
            width: 480px;
            height: 20px;
            padding: 10px;
            margin-top: 7px;
            margin-left: 10px;
            margin-bottom: 7px;
            border: solid 1px rgb(224, 224, 224);
          }
          select{
            width: 240px;
            height: 40px;
            // padding: 10px;
            margin: 7px;
            border: solid 1px rgb(224, 224, 224);
          }
          input{
            width: 240px;
            height: 20px;
            padding: 10px;
            margin: 7px;
            border: solid 1px rgb(224, 224, 224);
          }
        }
        .original-footer-main{
          // background: #52e2ef;
          height: 85px;
          width: 865px;
          padding: 20px;
          border-bottom: solid 1px rgb(209, 209, 209);
          .right-comment{
            float: left;
            // background: #fcfcfc;
            width: 90%;
            height: 85px;
            div{
              height: 20px;
              padding-top: 10px;
              // background:red;
            }
          }
          .leftimg{
            width: 65px;
            height: 65px;
            margin-right: 15px;
            float: left;
            img{
              width: 65px;
              height: 65px;
            }
          }
        }
        .original-footer-button,
        .original-footer-top{
            height: 20px;
            padding: 18px;
            // border-radius: 5px;
            // border-bottom: solid 1px rgb(204, 204, 204);
            .shuxian{
              width: 5px;
              height: 16px;
              margin-top: 2px;
              border-radius: 5px;
              background: #333333;
              float: left;
            }
            .list-name-top{
              float: left;
              margin-left: 5px;
              font-size: 14px;
              color: #52e2ef;
            }
          }
        }
        
      .original-right-bottom{
        width: 905px;
        background: #5fcfa1;
        margin-top: 10px;
        margin-left: 24px;
        .original-right-pages{
          // 分页
          width: 100%;
          margin: 30px auto;
          text-align: center;
          height: 40px;
          line-height: 40px;
          float: left;
        }
        .right-bottom-list{
          width: 290px;
          height: 260px;
          border-radius: 6px;
          margin-right: 0px;
          // background:red;
          margin-bottom: 6px;
          float: left;
          font-size: 12px;
          margin-right: 11px;
          img{
            width: 290px;
            border-radius: 6px;
          }
        }
      }

      .original-right-top{
        height: 20px;
        padding: 18px;
        border-bottom: solid 1px rgb(204, 204, 204);
        .shuxian{
          width: 5px;
          height: 16px;
          margin-top: 2px;
          border-radius: 5px;
          background: #333333;
          float: left;
        }
        .list-name-top{
          float: left;
          margin-left: 5px;
          font-size: 14px;
        }
      }
    }
  }
</style>