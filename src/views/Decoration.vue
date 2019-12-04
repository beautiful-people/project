<template>
  <div class="decor">
    <index></index>
    <!-- 两列布局 -->
    <div class="decor-max">
      <!-- 左侧 -->
      <div class="decor-left">
        <!-- 顶部分列 -->
        <div class="decor-left-top">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心 <strong>↓</strong></el-menu-item>
            <el-menu-item index="2">满意度 <strong>↓</strong></el-menu-item>
            <el-menu-item index="3">活跃度 <strong>↓</strong></el-menu-item>
          </el-menu>
        </div>

        <!-- 中间内容 -->
        <div class="decor-left-main" v-for="(item,index) in list" :key="index">
          <div class="left-main-left">
            <!-- 左侧顶部 -->
            <div class="main-left-img">
              <!-- 推荐 -->
              <div class="main-recommend">
                <img src="http://www.zx123.cn/templates/zx123cs/img_new/tuij.png" alt="">
              </div>
              <!-- 商家LOGO -->
              <img :src=item.imgs alt="">
            </div>
              
            <p>
              <img src="http://www.zx123.cn/templates/zx123cs/img_new/iou23.png" alt="">
              <span>数据通信 {{item.year}} 年</span>
            </p>
            <div class="satisfaction">
              <svg t="1575378517179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5846" width="12" height="12"><path d="M512 85.9l110.8 318.7 337.2 6.8-268.8 203.8 97.7 322.9L512 745.4 235.1 938.1l97.7-322.9L64 411.4l337.2-6.8z" p-id="5847" fill="#ffab00"></path></svg>
              <svg t="1575378517179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5846" width="12" height="12"><path d="M512 85.9l110.8 318.7 337.2 6.8-268.8 203.8 97.7 322.9L512 745.4 235.1 938.1l97.7-322.9L64 411.4l337.2-6.8z" p-id="5847" fill="#ffab00"></path></svg>
              <svg t="1575378517179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5846" width="12" height="12"><path d="M512 85.9l110.8 318.7 337.2 6.8-268.8 203.8 97.7 322.9L512 745.4 235.1 938.1l97.7-322.9L64 411.4l337.2-6.8z" p-id="5847" fill="#ffab00"></path></svg>
              <svg t="1575378517179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5846" width="12" height="12"><path d="M512 85.9l110.8 318.7 337.2 6.8-268.8 203.8 97.7 322.9L512 745.4 235.1 938.1l97.7-322.9L64 411.4l337.2-6.8z" p-id="5847" fill="#ffab00"></path></svg>
              <svg t="1575378726679" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7230" width="12" height="12"><path d="M957.85 408.72c-4.51-13.87-17.4-23.27-31.98-23.31l-291.08-0.91-90.66-276.55c-4.54-13.85-17.47-23.22-32.04-23.22h-0.01c-0.03 0-0.07 0.01-0.1 0.01-0.13 0-0.25 0.03-0.37 0.03-1.68 0.02-3.35 0.14-4.98 0.41-0.17 0.03-0.33 0.09-0.5 0.12-1.58 0.28-3.13 0.64-4.63 1.14-0.21 0.07-0.41 0.18-0.62 0.26-1.43 0.51-2.85 1.06-4.19 1.75-0.58 0.3-1.1 0.69-1.66 1.02-0.93 0.55-1.89 1.06-2.76 1.69-1.12 0.81-2.16 1.75-3.17 2.69-0.25 0.23-0.54 0.42-0.78 0.66a33.656 33.656 0 0 0-8.3 13.42l-90.84 276.54-291.04 0.78a33.738 33.738 0 0 0-33.24 28.54c-0.27 1.76-0.41 3.52-0.4 5.28 0.03 10.52 4.99 20.68 13.82 27.13l234.93 171.83-89.18 277.09c-4.47 13.87 0.49 29.05 12.27 37.62 5.9 4.29 12.84 6.44 19.78 6.45a33.75 33.75 0 0 0 19.8-6.38l236-170.35 0.06 0.04L747.9 932.87a33.659 33.659 0 0 0 19.75 6.39c6.96 0 13.92-2.15 19.82-6.44 11.79-8.56 16.75-23.74 12.29-37.61l-89.07-277.08 234.99-171.76c11.76-8.6 16.67-23.79 12.17-37.65zM651.21 578.04c-11.74 8.58-16.65 23.71-12.21 37.55l65.07 202.44-172.4-124.5a33.661 33.661 0 0 0-19.7-6.38V226.86l0.07-0.21 66.23 202.03c4.53 13.82 17.41 23.18 31.95 23.22l212.67 0.66-171.68 125.48z" p-id="7231" fill="#ffab00"></path></svg>
               <span>{{item.score}} 分</span>
            </div>
            
          </div>



          
          <div class="left-main-right">
            <div class="right-main-top">
              <div class="right-top-left">
                <h3>{{item.name}} <img src="//www.zx123.cn/templates/zx123cs/img_new/i_zhuans.gif" alt=""></h3>
                <div class="compaskbd">
                  <div class="compaskbd-attestation" :v-if="item.auth=true">
                    <svg t="1575386003590" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6195" width="12" height="12"><path d="M976.571429 296q-5.714286 134.857143-189.714286 372-190.285714 246.285714-321.142857 246.285714-81.142857 0-137.142857-150.285714-25.142857-91.428571-75.428572-275.428571-41.142857-149.714286-89.714286-149.714286-10.285714 0-72.571428 43.428571l-44-56q13.714286-12 61.714286-55.142857T182.857143 205.142857q89.142857-78.857143 137.714286-83.428571 54.285714-5.142857 87.428571 31.714285T454.285714 269.714286q25.142857 164 37.714286 213.142857 31.428571 142.285714 68.571429 142.285714 29.142857 0 88-92 57.714286-92 62.285714-140.571428 7.428571-79.428571-62.285714-79.428572-32.571429 0-69.142858 14.857143 68.571429-224.571429 262.285715-218.285714 143.428571 4.571429 134.857143 186.285714z" p-id="6196" fill="#ffffff"></path></svg>
                    <div class="compaskbd-attestation-span">认证</div>
                  </div>
                  <div class="compaskbd-recommend">
                    <svg t="1575387245729" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8538" width="14" height="14"><path d="M512 733.6l-237.28 124.8L320 594.08 128 407.04l265.28-38.56L512 128l118.72 240.48L896 407.04 704 594.08l45.28 264.32L512 733.6z" fill="#ffffff" p-id="8539"></path></svg>
                    <div class="compaskbd-attestation-span">推荐</div>
                  </div>
                  <div class="compaskbd-safety">
                    <svg t="1575387896115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14916" width="12" height="12"><path d="M957.217391 86.372174C957.217391 86.372174 957.217391 608.211478 957.217391 608.211478 957.217391 639.510261 949.782261 670.630957 934.956522 701.573565 920.086261 732.605217 900.674783 762.568348 876.633043 791.685565 852.591304 820.758261 825.121391 848.317217 794.267826 874.273391 763.369739 900.274087 732.070957 923.425391 700.326957 943.727304 668.538435 964.073739 637.68487 980.992 607.721739 994.437565 577.758609 1007.88313 551.490783 1017.09913 528.918261 1022.130087 528.918261 1022.130087 518.233043 1024 518.233043 1024 518.233043 1024 508.438261 1022.130087 508.438261 1022.130087 485.286957 1017.09913 458.440348 1007.88313 427.853913 994.437565 397.267478 980.992 365.523478 964.073739 332.577391 943.727304 299.631304 923.425391 267.308522 900.274087 235.52 874.273391 203.776 848.317217 175.415652 820.758261 150.483478 791.685565 125.551304 762.568348 105.382957 732.605217 89.978435 701.573565 74.48487 670.630957 66.782609 639.510261 66.782609 608.211478 66.782609 608.211478 66.782609 86.372174 66.782609 86.372174 66.782609 86.372174 103.290435 80.717913 103.290435 80.717913 103.290435 80.717913 512.890435 0 512.890435 0 512.890435 0 930.504348 80.717913 930.504348 80.717913 930.504348 80.717913 957.217391 86.372174 957.217391 86.372174 957.217391 86.372174 957.217391 86.372174 957.217391 86.372174ZM513.024 75.553391C513.024 75.553391 508.082087 74.529391 508.082087 74.529391 508.082087 74.529391 156.538435 137.527652 156.538435 137.527652 156.538435 137.527652 156.538435 466.765913 156.538435 466.765913 156.538435 466.765913 513.024 466.765913 513.024 466.765913 513.024 466.765913 513.024 75.553391 513.024 75.553391 513.024 75.553391 513.024 75.553391 513.024 75.553391ZM867.461565 466.765913C867.461565 466.765913 513.024 466.765913 513.024 466.765913 513.024 466.765913 513.024 935.401739 513.024 935.401739 535.81913 929.881043 560.617739 921.466435 587.419826 910.113391 614.177391 898.760348 640.623304 885.359304 666.713043 869.865739 692.847304 854.372174 717.957565 837.186783 742.13287 818.265043 766.308174 799.343304 787.634087 778.99687 806.288696 757.314783 824.898783 735.677217 839.724522 713.149217 850.810435 689.730783 861.94087 666.35687 867.461565 642.582261 867.461565 618.496 867.461565 618.496 867.461565 466.765913 867.461565 466.765913 867.461565 466.765913 867.461565 466.765913 867.461565 466.765913Z" p-id="14917" fill="#ffffff"></path></svg>
                    <div class="compaskbd-attestation-span">装修保险</div>
                  </div>
                </div>

                <div class="subscribe">
                  <div class="subscribe-sc">
                    预约:<span>{{item.subsc}}</span>个 &nbsp;
                  </div>
                  
                  <div class="subscribe-sc">
                  案例:<span>{{item.works}}</span>套 &nbsp;
                  </div>
                  <div class="subscribe-sc">
                  文章:<span>{{item.article}}</span>篇 &nbsp;
                  </div>
                  <div class="subscribe-sc">
                  工地:<span>{{item.consite}}</span>个 &nbsp;
                  </div>
                  <div class="subscribe-sc">
                  设计师:<span>{{item.docter}}</span>位 &nbsp;
                  </div>
                  <div class="subscribe-sc">
                  访问:<span>{{item.visit}}</span>次 &nbsp;
                  </div>
                </div>
                <div class="site-top-left">
                  <svg t="1575389032687" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16007" width="14" height="14"><path d="M716.816 593.728C759.576 544.636 783.5 481.974 783.5 415.5 783.5 265.555 661.945 144 512 144S240.5 265.555 240.5 415.5c0 66.474 23.924 129.136 66.684 178.228a42.751 42.751 0 0 1 2.198 2.742L512 854.269l202.618-257.8a42.751 42.751 0 0 1 2.198-2.741zM160.5 415.5C160.5 221.372 317.872 64 512 64s351.5 157.372 351.5 351.5c0 85.5-30.687 166.35-85.441 229.714l-234.61 298.504c-16.015 20.376-46.883 20.376-62.898 0L245.94 645.214C191.187 581.85 160.5 501 160.5 415.5zM512 563c-81.462 0-147.5-66.038-147.5-147.5S430.538 268 512 268s147.5 66.038 147.5 147.5S593.462 563 512 563z m0-80c37.28 0 67.5-30.22 67.5-67.5S549.28 348 512 348s-67.5 30.22-67.5 67.5S474.72 483 512 483z" p-id="16008" fill="#6d6d6d"></path></svg>
                  <span>{{item.location}}</span>
                </div>

                <div class="national-top-left">
                  <span>全国连锁</span>
                  <span>上市公司</span>
                  <span>老品牌</span>
                  <span>11年老店</span>
                </div>
              </div>

              <div class="right-top-right">
                <div class="right-top-offer">
                  免费装修报价
                </div>
                <div class="right-top-design">
                  免费装修设计
                </div>
                
              </div>
            </div>
            <div class="right-main-bottom" >
              <img v-for="(isc,uid) in item.children" :key="uid" :src=isc.imgs alt="">
            </div>
          </div>
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>



      <!-- 右侧 -->
      <div class="decor-right">
        <div class="decor-right-top">
          <div class="right-top-subscribe">
            今天有<span>2000</span>位用户预约成功
            <form action="">
              <input type="text" name="" id="" placeholder="您的称呼">
              <input type="text" name="" id="" placeholder="联系电话"> 
              <select>
                <option value ="chengdu">成都</option>
                <option value ="beijing">北京</option>
                <option value="shenzhen">深圳</option>
                <option value="shanghai">上海</option>
              </select>
              <input type="text" name="" id="" placeholder="装修面积 ㎡"> 
              <button>立即预约</button>
            </form>
          </div>
          
          <!-- 送送送 -->
          <div class="right-top-present">
            <img src="//www.zx123.cn/templates/zx123cs/img_new/compantu2.jpg" width="240px" height="auto" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import index from "@/components/index";
export default {
  name:"Decoration",
  components: {
    index
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      list:[
        {
          imgs:'http://img.zx123.cn/Resources/zx123cn/uploadfile/2019/1118/thumb_168_20191118092539_29884.jpg',
          year:5,
          score:4.5,
          name:"北京东易日盛装饰集团",
          auth:true,
          recommend:true,
          insurance:true,
          subsc:98,
          works:41,
          article:22,
          consite:9,
          docter:8,
          visit:59632,
          location:"北京市朝阳区酒仙桥北路10号院电子城IT产业园东易大厦",
          national:true,
          listed:true,
          old:true,
          oldstore:true,
          children:[
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1203/thumb_285_210_20191203171001_90673.jpg'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1202/thumb_285_210_20191202095029_58939.jpg'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1129/thumb_285_210_20191129091414_65877.png'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1126/thumb_285_210_20191126115350_19103.png'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1125/thumb_285_210_20191125151443_36655.jpg'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1122/thumb_285_210_20191122164101_36520.jpg'}
          ]
        },{
          imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2018/0928/thumb_168_20180928110440_50689.jpg',
          year:1,
          score:4.1,
          name:"北京东易日盛装饰集团",
          auth:false,
          recommend:true,
          insurance:true,
          subsc:98,
          works:41,
          article:22,
          consite:9,
          docter:8,
          visit:59632,
          location:"四川省成都市武侯区高新青年公寓",
          national:true,
          listed:true,
          old:true,
          oldstore:true,
          children:[
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1203/thumb_285_210_20191203171001_90673.jpg'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1202/thumb_285_210_20191202095029_58939.jpg'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1129/thumb_285_210_20191129091414_65877.png'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1126/thumb_285_210_20191126115350_19103.png'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1125/thumb_285_210_20191125151443_36655.jpg'},
            {imgs:'//img.zx123.cn/Resources/zx123cn/uploadfile/2019/1122/thumb_285_210_20191122164101_36520.jpg'}
          ]
        }
      ], 
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      imgs:{
        
      }
    };
  },created() {
    this.axios.post("/showOne",{
      styleType:"客厅",
      pageSize:20,
      currentPage:1
    })//在括号中111，需要请求数据需要在("/",{})括号中需要的请求。
      .then(res=>{
        console.log("请求成功",res);
        // this.sc= res.data.data.imags;
        this.imags= res.data.data.imagesList;
        // this.foterimg= res.data.data.imags2;
      })
      .cath(err=>{
        console.log("请求失败",err);
      })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    format(percentage) {
        return percentage === 100 ? '满' : `${percentage}`;
    },
    onSubmit() {
      console.log('submit!');
    }
  }
  
}
</script>
<style lang="less" scoped>
*{
  margin: 0;
  padding:0;
}
  .decor-max{
    width: 1200px;
    height: 500px;
    // background: rebeccapurple;
    // margin-top:60px; 
    // padding-top: 60px;
    margin-top: 60px;
    margin:60px auto;
    
    .decor-right{
      width: 240px;
      height: 800px;
      float: right;
      // background: silver;
      .decor-right-top{
        width: 240px;
        // height: 390px;
        background: url(//www.zx123.cn/templates/zx123cs/img_new/companbgteble.jpg) 0 0 no-repeat;
        // margin: 20px;
        overflow: hidden;

        .right-top-present{
          width: 240px;
          height: auto;
          padding-top: 15px;
          padding-bottom: 15px;
          // background: red;
        }

        .right-top-subscribe{
          padding-top: 70px;
          font-size: 12px;
          color: white;
          width: 200px;
          margin: 20px;
          text-align: center;
          button{
            width: 168px;
            height: 38px;
            padding: 5px;
            font-size: 12px;
            color: #ffffff;
            background: #dd6e24;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
            border: 0;
          }
          input{
            height: 24px;
            padding: 5px;
            font-size: 12px;
            color: #6d6d6d;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
          }
          select{
            width: 167px;
            height: 38px;
            padding: 5px;
            font-size: 12px;
            color: #6d6d6d;
            margin-top: 10px;
            margin-left: 10px;
            margin-right: 10px;
          }
          span{
            text-align: center;
            width: 200px;
            color: #ff4848;
          }
        }
        
      }
    }
    .decor-left{
      width: 945px;
      height:900px;
      // background: pink;
      float: left;
      .decor-left-top{
        width: 943px;
        height: 61px;
        border: solid 1px rebeccapurple;
        .el-menu-item{
          width: 120px;
          text-align: center;
        }
      }
      .decor-left-main:hover{
        box-shadow: 1px 1px 5px rgb(155, 155, 155);
      }
      .decor-left-main{
        margin-top: 2px;
        width: 100%;
        height: 234px;
        padding-top: 27px;
        padding-bottom: 27px;
        // background: palegreen;
        border-bottom: solid 1px rgb(224, 224, 224);
        .left-main-left{
          width: 215px;
          height: 160px;
          float: left;
          // background: springgreen;
          // border-left: solid 1px red;
          .satisfaction{
            width: 120px;
            margin: auto;
            span{
              vertical-align: middle;
              font-size: 12px;
              color: #ff8c48;
              line-height: 11.5px;
            }
          }
          p{
            padding-top: 10px;
            padding-bottom: 10px;
            text-align: center;
            margin: auto;
            position: relative;
            padding-right: 25px;
            span{
              position: absolute;
              top:14px;
              left: 74px;
              color: #ff8c48;
              font-size: 10px;
            }
          }
          .main-left-img{
            width: 190px;height: 89px;
            background: #fafafa;
            border: solid 1px skyblue;
            position: relative;
            img{
              width: 168px;
              height: 67px;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
            }
            .main-recommend{
              position: absolute;
              top: 15px;
              left: 0px;
              z-index: 3;
              img{
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        .left-main-right{
          width: 705px;
          height: 235px;
          float: left;
          // background: greenyellow;
          float: left;
          margin-left: 24px;
          .right-main-top{
            width: 100%;
            height: 138px;
            background: rgb(255, 255, 255);
            .right-top-left{
              width: 545px;
              height: 100%;
              float: left;
              .national-top-left{
                width: 100%;
                height: 18px;
                margin-top: 7px;
                // background: #3cdec1;
                span{
                  height: 18px;
                  border: solid 1px #d7e2e9;
                  color: #d7e2e9;
                  font-size: 10px;
                  background: #f8fcff;
                  text-align: center;
                  border-radius: 2px;
                  padding: 3px;
                  margin-right: 8px;
                }
              }


              .site-top-left{
                width: 100%;
                height: 18px;
                // background: #ff8c48;
                position: relative;
                color: #6d6d6d;
                svg{
                  margin-top: 2px;
                  margin-left: 2px;
                }
                span{
                  font-size: 10px;
                  vertical-align: middle;
                  position: absolute;
                  top:3px;
                }
              }
              .subscribe{
                width: 100%;
                height: 18px;
                margin-top: 7px;
                // background: #ff8c48;
                font-size: 10px;
                .subscribe-sc{
                  margin-right:10px;
                  float: left;
                  span{
                    color: #ff4848;
                  }
                }
              }


              h3{
                vertical-align: middle;
                overflow: hidden;
                line-height: 30px;
                position: relative;
                img{
                  width: 20px;
                  height: 20px;
                  position: absolute;
                  top: 2px;
                  margin-left: 5px;
                }
              }
              .compaskbd{
                width: 100%;
                height:18px;
                margin-top: 10px;
                // background: rosybrown;
                
                .compaskbd-safety{width:76px;
                  height: 18px;
                  margin-right: 5px;
                  background: #7abdf6;
                  border-radius: 2px;
                  overflow: hidden;
                  float: left;
                  svg{
                    margin-left: 3px;
                    float: left;
                    margin-top: 3px;
                  }
                  .compaskbd-attestation-span{
                    // height: 100%;
                    width: 56px;
                    height: 16px;
                    margin-top: 1px;
                    background: white;
                    font-size: 12px;
                    margin-right: 1px;
                    border-radius: 1px;
                    float: right;
                    color: #7abdf6;
                    text-align: center;
                  }
                }
                .compaskbd-recommend{width: 52px;
                  height: 18px;
                  margin-right: 5px;
                  background: #ff4848;
                  border-radius: 2px;
                  overflow: hidden;
                  float: left;
                  svg{
                    margin-left: 2px;
                    float: left;
                    margin-top: 2px;
                  }
                  .compaskbd-attestation-span{
                    // height: 100%;
                    width: 33px;
                    height: 16px;
                    margin-top: 1px;
                    background: white;
                    font-size: 12px;
                    margin-right: 1px;
                    border-radius: 1px;
                    float: right;
                    color: #ff4848;
                    text-align: center;
                  }
                }
                .compaskbd-attestation{
                  width: 52px;
                  height: 18px;
                  margin-right: 5px;
                  background: #3cdec1;
                  border-radius: 2px;
                  overflow: hidden;
                  float: left;
                  svg{
                    margin-left: 3px;
                    float: left;
                    margin-top: 3px;
                  }
                  .compaskbd-attestation-span{
                    // height: 100%;
                    width: 33px;
                    height: 16px;
                    margin-top: 1px;
                    background: white;
                    font-size: 12px;
                    margin-right: 1px;
                    border-radius: 1px;
                    float: right;
                    color: #3cdec1;
                    text-align: center;
                  }
                }
              }
            }
            .right-top-right{
              width: 160px;
              height: 100%;
              float: left;
              // background: red;
              .right-top-design{
                width: 130px;
                height: 35px;
                background: #ffffff;
                border: solid 1px #ff552e;
                margin:20px auto;
                text-align: center;
                line-height: 35px;
                font-size: 12px;
                color: #ff552e;
              }
              .right-top-offer{
                width: 130px;
                height: 35px;
                background: #ff552e;
                margin:20px auto;
                text-align: center;
                line-height: 35px;
                font-size: 12px;
                color: white;
                // padding-top: 20px;
                
              }
            }
          }
          .right-main-bottom{
            width: 100%;
            height: 98px;
            // background: skyblue;
            // float: left;
            img{
              line-height: 98px;
              padding: 1px;
              border: solid 1px #eaeaea;
              margin-top: 12px;
              margin-right: 8px;
              margin-left: 1px;
              width: 99px;
              height: 74px;
            }
          }
        }
      }
    }
  }
</style>