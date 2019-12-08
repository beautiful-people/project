<template>
  <div class="construction">
    <index></index>
    <div class="onLine">
      <div class="onLine-head clear">
        <ul>
          <li>施工阶段：</li>
          <li @click="inex=0 " :class="{'on':inex===0}">不限</li>
          <li @click="fn" :class="{'on':inex===2}">开工大吉</li>
          <li @click="fnone " :class="{'on':inex===3}">水电改造</li>
          <li @click="fnthree " :class="{'on':inex===4}">泥瓦阶段</li>
          <li @click="fnfour " :class="{'on':inex===5}">木工阶段</li>
          <li @click="fnfive " :class="{'on':inex===6}">油漆阶段</li>
          <li @click="fnsix " :class="{'on':inex===7}">安装阶段</li>
          <li @click="fnseven " :class="{'on':inex===8}">验收完成</li>
        </ul>
      </div>
      <div class="onLineHead">
        <span>在线工地</span>
      </div>
      <div class="onLine-main clear" v-show="inex===0">
        <div class="main" v-for="item in Linelist.onlinesites" :key="item.tenterId">
          <div class="main-left ">
            <img :src="item.caluseImg" alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right ">
            <p @click="getDeTailed(item.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li v-for="(it,index) in Linelist" :key="index">
                区域:
                
                <span>{{it.location}}</span>
              </li>
              <li>
                风格:
                <span>{{it.familyStructure}}</span>
              </li>
              <li>
                面积:
                <span>{{it.area}}</span>
              </li>
            </ul>
            <p>
              装修公司:
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="onLine-main clear" v-show="inex===2">
         <div class="main" v-for="item in Linelistone" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p @click="getDeTailed(item.onlinesites.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li>
                区域：
                <span>{{item.location}}</span>
              </li>
              <li>
                风格：
                <span>{{item.familyStructure}}</span>
              </li>
              <li>
                面积:
                <span>{{item.area}}</span>
              </li>
            </ul>
            <p>
              装修公司:
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.onlinesites.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChanges"
          :current-page.sync="currentPages"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag">
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="onLine-main clear" v-show="inex===3">
         <div class="main" v-for="item in LinelistTwo" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p  @click="getDeTailed(item.onlinesites.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li >
                区域:
                <span>{{item.location}}</span>
              </li>
              <li>
                风格:
                <span>{{item.familyStructure}}</span>
              </li>
              <li>
                面积:
                <span>{{item.area}}</span>
              </li>
            </ul>
            <p>
              装修公司:
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.onlinesites.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangess"
          :current-page.sync="currentPagess"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="onLine-main clear" v-show="inex===4">
         <div class="main" v-for="item in LinelistThree" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p  @click="getDeTailed(item.onlinesites.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li>
                区域:
                <span>{{item.location}}</span>
              </li>
              <li>
                风格:
                <span>{{item.familyStructure}}</span>
              </li>
              <li>
                面积:
                <span>{{item.area}}</span>
              </li>
            </ul>
            <p>
              装修公司:
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.onlinesites.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangesss"
          :current-page.sync="currentPagesss"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="onLine-main clear" v-show="inex===5">
         <div class="main" v-for="item in LinelistFour" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p  @click="getDeTailed(item.onlinesites.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li>
                区域：
                <span>{{item.location}}</span>
              </li>
              <li>
                风格：
                <span>{{item.familyStructure}}</span>
              </li>
              <li>
                面积：
                <span>{{item.area}}</span>
              </li>
            </ul>
            <p>
              装修公司：
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.onlinesites.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangessss"
          :current-page.sync="currentPagessss"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="onLine-main clear" v-show="inex===6">
         <div class="main" v-for="item in LinelistFive" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p  @click="getDeTailed(item.onlinesites.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li>
                区域：
                <span>{{item.location}}</span>
              </li>
              <li>
                风格：
                <span>{{item.familyStructure}}</span>
              </li>
              <li>
                面积：
                <span>{{item.area}}</span>
              </li>
            </ul>
            <p>
              装修公司：
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.onlinesites.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangesssss"
          :current-page.sync="currentPagesssss"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="onLine-main clear" v-show="inex===7">
         <div class="main" v-for="item in LinelistSix" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p  @click="getDeTailed(item.onlinesites.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li>
                区域：
                <span>{{item.location}}</span>
              </li>
              <li>
                风格：
                <span>{{item.familyStructure}}</span>
              </li>
              <li>
                面积：
                <span>{{item.area}}</span>
              </li>
            </ul>
            <p>
              装修公司：
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.onlinesites.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangessssss"
          :current-page.sync="currentPagessssss"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="onLine-main clear" v-show="inex===8">
         <div class="main" v-for="item in LinelistSeven" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p  @click="getDeTailed(item.onlinesites.tenderId)">{{item.calusename}}</p>
            <ul class="clear">
              <li>
                区域：
                <span>{{item.location}}</span>
              </li>
              <li>
                风格：
                <span>{{item.familyStructure}}</span>
              </li>
              <li>
                面积：
                <span>{{item.area}}</span>
              </li>
            </ul>
            <p>
              装修公司：
              <span>{{item.merchant.merName}}</span>
            </p>
            <el-steps
              :space="200"
              :active="Number(item.onlinesites.caluseState)"
              finish-status="success"
              class="el"
            >
              <el-step title="开工大吉"></el-step>
              <el-step title="水电改造"></el-step>
              <el-step title="泥瓦阶段"></el-step>
              <el-step title="木工阶段"></el-step>
              <el-step title="油漆阶段"></el-step>
              <el-step title="安装阶段"></el-step>
              <el-step title="验收完成"></el-step>
            </el-steps>
          </div>
        </div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangesssssss"
          :current-page.sync="currentPagesssssss"
          :page-size="4"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
      </div>
      <div class="left clear">
        <div class="left_one">
          <div class="left-one">

              <span>免费送装修设计保价</span>
          </div>
          <div class="left-input">
            <span>10秒登记，轻松获得</span>
            <input type="text" placeholder="你的称呼">
             <input type="text" placeholder="你的电话">
             <input type="button" value="立即免费申请">
             <div class="">
               <span>了解更多免费服务</span>
             </div>
          </div>
        </div>
        <div class="left_two">
            <img src="../../public/img/meitu.jpg"/>
        </div>
        <div class="left_three">
          <div class="left-three">
            <span>热门小区推荐</span>
          </div>
          <div class="left-ui">
            <ul>
              <li>山海同湾</li>
              <li>中关村公馆</li>
              <li>欧郡香水城</li>
              <li>戛纳35号</li>
            </ul>
          </div>
          <div class="left-more">
            <span>了解更多小区</span>
          </div>
        </div>
        <div class="left_three">
          <div class="left-three">
            <span>热门设计推荐 </span>
          </div>
          <div class="left-ui">
            <ul>
              <li>国瑞城</li>
              <li>新裕家园</li>
              <li>绿景馨园</li>
              <li>世华龙樾</li>
            </ul>
          </div>
          <div class="left-more">
            <span>了解更多设计</span>
          </div>
        </div>
        <div class="left_four">
            <div class="left-four">
                <span>大家都在搜</span>
            </div>
            <div class="four-ui">
              <ul>
                <li>新型装修</li>
                <li>办公楼</li>
                <li>别墅庭院</li>
                <li>庭院大门</li>
                <li>欧式休闲区</li>
                <li>外观别墅设计</li>
                <li>上海写字楼</li>
                <li>别墅庭院装修</li>
                <li>庭院装修</li>
              </ul>
            </div>
        </div>
      </div>
      <footerr class="footers"></footerr>
    </div>
  </div>
</template>

<script>
import index from "@/components/index";
import footerr from "@/components/Footer.vue";
export default {
  name: "Construction",
  components: {
    index,
    footerr
  },
  data: function() {
    return {
      inex: 0,
      Linelist: [],
      Linelistone:[],
      LinelistTwo:[],
       LinelistThree:[],
       LinelistFour:[],
      
       LinelistFive:[],
       LinelistSix:[],
       LinelistSeven:[],
      currentPage: 1 /* 当前页码 */,
      currentPages:1,
       currentPagess:1,
        currentPagesss:1,
        currentPagessss:1,
        currentPagesssss:1,
        currentPagessssss:1,
        currentPagesssssss:1,
      totalPage: 0,
      pageSize: 4,
      tenderId:"",
       tenderIdss:""
    };
  },
  created() {
    this.getLine();
  },
  methods: {
    getLine() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPage, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:0,
            state:0
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data.data.Tender[0]);
          console.log(res.data.data.Tender[0].onlinesites.tenderId);
          if (res.data.code == 200) {
            this.Linelist = res.data.data.Tender[0];
          
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    fn(){
      this.inex=2;
      this.getbegin();
    },
    fnone(){
      this.inex=3;
      this.getTwo();
    },
    fnthree(){
      this.inex=4;
      this.getThree();
    },
     fnfour(){
      this.inex=5;
      this.getFour();
    },
      fnfive(){
      this.inex=6;
      this.getFive();
    },
      fnsix(){
      this.inex=7;
      this.getSix();
    },
    fnseven(){
      this.inex=8;
      this.getSeven();
    },
    getDeTailed(id){
  this.$router.push("/detailed");
  var tenderIds= id;
  sessionStorage.setItem("tenderIds",tenderIds)
    },
    getbegin() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPages, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:1,
            state:1
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.Linelistone = res.data.data.Tender;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getTwo() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPagess, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:2,
            state:2
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistTwo = res.data.data.Tender;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getThree() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPagesss, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:3,
            state:3
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistThree = res.data.data.Tender;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getFour() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPagessss, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:4,
            state:4
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistFour = res.data.data.Tender;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     getFive() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPagesssss, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:5,
            state:5
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistFive = res.data.data.Tender;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSix() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPagessssss, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:6,
            state:6
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistSix = res.data.data.Tender;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSeven() {
      this.axios
        .post(
          "/selectOnlineWorkerspage",
          {
            currentPage: this.currentPagesssssss, //当前页
            pageSize: this.pageSize, //每页显示的条数
            caluseState:7,
            state:7
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistSeven = res.data.data.Tender;
            this.totalPage = res.data.data.totalCount;
          }
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
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPage, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 0
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.Linelist = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChanges() {
      /* 获取当前页码 */
      this.axios
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPages, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 1
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.Linelistone = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     handleCurrentChangess() {
      /* 获取当前页码 */
      this.axios
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPagess, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 2
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistTwo = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChangesss() {
      /* 获取当前页码 */
      this.axios
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPagesss, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 2
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistThree = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChangessss() {
      /* 获取当前页码 */
      this.axios
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPagessss, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 4
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistFour = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     handleCurrentChangesssss() {
      /* 获取当前页码 */
      this.axios
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPagessss, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 5
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistFive = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     handleCurrentChangessssss() {
      /* 获取当前页码 */
      this.axios
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPagessssss, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 6
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistSix = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     handleCurrentChangesssssss() {
      /* 获取当前页码 */
      this.axios
        .post("/selectOnlineWorkerspage", {
          currentPage: this.currentPagesssssss, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 7
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.LinelistSeven = res.data.data.Tender;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.clear::before,
.clear::after {
  display: table;
  content: "";
}
.clear::after {
  clear: both;
}
.construction {
  margin: 0 auto;
}
.onLine {
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 50px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.582);
  .onLine-head {
    ul {
      width: 902px;
      height: 50px;
      border: 1px solid rgba(0, 0, 0, 0.253);
      margin-left: 185px;
      li {
        text-align: center;
        width: 100px;
        height: 50px;
        line-height: 50px;
        float: left;
        list-style-type: none;
        cursor: pointer;
      }
   
      .on {
        background-color: rgba(0, 0, 0, 0.295);
        color: white;
      }
     
    }
  }

  .onLineHead {
    color: black;
    margin-left: 185px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
  }
  .onLine-main {
    width: 900px;
   height: 1380px;
   float: left;
   margin-left: 180px;
   position: relative;
    .main {
      width: 870px;
      height: 300px;
      margin-left: 30px;
      margin-top: 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.151);
      .main-left {
        float: left;
        width: 150px;
        height: 150px;
        margin-top: 50px;
       
      }
      .main-right {
        width: 700px;
        height: 300px;
        float: left;
        p {
          margin-top: 30px;
          margin-left: 20px;
        }

        ul {
          width: 755px;
          margin-top: 20px;
          li {
            float: left;
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            margin-right: 50px;
            list-style-type: none;
            span {
              display: inline-block;
              margin-left: 10px;
            }
            li:nth-child(1) {
              padding-left: 0;
            }
          }
        }
        .el {
          margin-top: 30px;
          margin-left: 20px;
        }
      }
    }
  }
  .left{
    float: left;
    width: 240px;
    height: 800px;
   
    margin-left: 30px;
    .left_one {
      width: 240px;
      height: 250px;
      border: 1px solid rgba(0, 0, 0, 0.11);
      margin-top: 5px;
      .left-one {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #27BC9C;
        color:white;
        font-size: 14px;
      }
      .left-input {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        span {
          font-size: 14px;
        }
        input {
          width: 200px;
          height: 30px;
          text-indent: 10px;
        }
        input[type="button"]{
          background-color: #F39943;
          outline: none;
          border: none;
          width: 200px;
          color: white;
          font-size: 14px;
        }
      }
    }
    .left_two {
      margin-top: 30px;
    }
    .left_three {
       width: 240px;
      height: 250px;
      border: 1px solid rgba(0, 0, 0, 0.11);
      margin-top:30px;
      .left-three {
         width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.185);
        background-color: #F39943;
      }
      .left-ui {
        width: 100%;
        ul {
          margin-left: 10%;
          width: 80%;
          text-align: center;
          li {
             border-bottom: 1px solid rgba(0, 0, 0, 0.185);
            height: 40px;
            line-height: 40px;
            list-style-type: none;
            cursor: pointer;
          }
          li:nth-child(4) {
            border:none;
          }
          li:hover {
            background-color: rgba(0, 0, 0, 0.356);
          }
        }
      }
      .left-more{
        border-top: 1px solid  rgba(0, 0, 0, 0.185);
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    }
    .left_four {
      width: 240px;
      height: 250px;
      border: 1px solid rgba(0, 0, 0, 0.11);
      margin-top:30px;
      .left-four {
         width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.185);
        background-color: #27BC9C;
      }
      .four-ui{
        margin-top: 30px;
        width: 90%;
        li{
          float: left;
          list-style-type: none;
          padding-left: 20px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
 .footers{
   position: absolute;
   bottom: -1500px;
   left: 0;
 }
  .pag {
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
}
</style>