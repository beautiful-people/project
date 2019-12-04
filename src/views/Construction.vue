<template>
  <div class="construction">
    <index></index>
    <div class="onLine">
      <div class="onLine-head clear">
        <ul>
          <li>施工阶段</li>
          <li @click="inex=0 " :class="{'on':inex===0}">不限</li>
          <li @click="inex=2 " :class="{'on':inex===2}">开工大吉</li>
          <li @click="inex=3 " :class="{'on':inex===3}">水电改造</li>
          <li @click="inex=4 " :class="{'on':inex===4}">泥瓦阶段</li>
          <li @click="inex=5 " :class="{'on':inex===5}">木工阶段</li>
          <li @click="inex=6 " :class="{'on':inex===6}">油漆阶段</li>
          <li @click="inex=7 " :class="{'on':inex===7}">安装阶段</li>
          <li @click="inex=8 " :class="{'on':inex===8}">验收完成</li>
        </ul>
      </div>
      <div class="onLineHead">
        <span>在线工地</span>
      </div>
      <div class="onLine-main" v-show="inex===0">
        <div class="main" v-for="item in Linelist" :key="item.tenterId">
          <div class="main-left clear"></div>
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
              :active="Number(item.onlinesites[0].caluseState)"
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
        <p>文字1</p>
      </div>
    </div>
  </div>
</template>

<script>
import index from "@/components/index";
// var list=[
//   {
//   id:0,
//     calusename:"中建国际城9号楼3单元在施工地",
//     familyStructure:"欧式y",
//     area:"80",
//     location:"朝阳区",
//     merName:"北京东易日盛装饰",
//     caluseState:"1"
//     }
//     ,{
//       id:1,
//     calusename:"中建国际城9号楼3单元在施工地",
//     familyStructure:"欧式",
//     area:"90",
//     location:"朝阳区",
//     merName:"北京东易日盛装饰",
//     caluseState:"2"
//     }
// ];
export default {
  name: "Construction",
  components: {
    index
  },
  data: function() {
    return {
      inex: 0,
      Linelist: {},
      currentPage: 1 /* 当前页码 */,
      totalPage: 0,
      pageSize: 7
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
            this.Linelist = res.data.data.tenders;
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
          caluseState: "0"
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.Linelist = res.data.data.tenders;
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
.onLine {
  width: 100%;
  height: 1000px;
  position: relative;
  margin-top: 50px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.24);
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
        border: 1px solid rgba(0, 0, 0, 0.212);
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
    height: 1200px;
    border: 1px solid red;
    position: absolute;
    top: 100px;
    left: 280px;
    .main {
      width: 870px;
      height: 300px;
      margin-left: 30px;
      margin-top: 30px;
      border: 1px solid red;
      .main-left {
        float: left;
        width: 150px;
        height: 150px;
        border: 1px solid red;
        margin-top: 50px;
        img {
          width: 150px;
          height: 150px;
          vertical-align: middle;
        }
      }
      .main-right {
        width: 700px;
        height: 300px;
        float: left;
        border: 1px solid red;
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
            padding-left: 112px;
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