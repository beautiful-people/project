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
      <div class="onLine-main" v-show="inex===0">
        <div class="main" v-for="item in Linelist" :key="item.tenterId">
          <div class="main-left ">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right ">
            <p @click="getDeTailed">{{item.calusename}}</p>
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
      <div class="onLine-main" v-show="inex===2">
         <div class="main" v-for="item in Linelistone" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p>{{item.calusename}}</p>
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
      <div class="onLine-main" v-show="inex===3">
         <div class="main" v-for="item in LinelistTwo" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p>{{item.calusename}}</p>
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
      <div class="onLine-main" v-show="inex===4">
         <div class="main" v-for="item in LinelistThree" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p>{{item.calusename}}</p>
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
      <div class="onLine-main" v-show="inex===5">
         <div class="main" v-for="item in LinelistFour" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p>{{item.calusename}}</p>
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
      <div class="onLine-main" v-show="inex===6">
         <div class="main" v-for="item in LinelistFive" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p>{{item.calusename}}</p>
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
      <div class="onLine-main" v-show="inex===7">
         <div class="main" v-for="item in LinelistSix" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p>{{item.calusename}}</p>
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
      <div class="onLine-main" v-show="inex===8">
         <div class="main" v-for="item in LinelistSeven" :key="item.tenterId">
          <div class="main-left clear">
            <img :src=item.onlinesites.caluseImg alt="" style="width:150px;height:150px;">
          </div>
          <div class="main-right clear">
            <p>{{item.calusename}}</p>
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
    </div>
  </div>
</template>

<script>
import index from "@/components/index";

export default {
  name: "Construction",
  components: {
    index
  },
  data: function() {
    return {
      inex: 0,
      Linelist: {},
      Linelistone:{},
      LinelistTwo:{},
       LinelistThree:{},
       LinelistFour:{},
       LinelistFive:{},
       LinelistSix:{},
       LinelistSeven:{},
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
      tenderId:""
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
    getDeTailed(){
  this.$router.push("/detailed");
  var tenderIds= this.Linelist.onlinesites.tenderId;
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
  //   .onLine-head ul li:hover{
  //   background: rgb(39, 3, 3);
  //   color: #ccc;
  // }
  .onLine-head {
    ul {
      width: 902px;
      height: 50px;
      border: 1px solid rgba(0, 0, 0, 0.562);
      margin-left: 285px;
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
        border: 1px solid rgba(0, 0, 0, 0.5);
        background-color: black;
        color: white;
      }
     
    }
  }

  .onLineHead {
    color: black;
    margin-left: 280px;
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
  }
  .onLine-main {
    width: 900px;
   height: 1380px;
    position: absolute;
    top: 100px;
    left: 280px;
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
  .pag {
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
}
</style>