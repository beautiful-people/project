<template>
  <div>
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" @click="f">全部</el-menu-item>
  <el-menu-item index="2" @click="fn">中标</el-menu-item>
  <el-menu-item index="3" @click="fnn">未中标</el-menu-item>
</el-menu>
   <div v-show="ind===0">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="开始时间"
        prop="startTime"  width="90px">
        </el-table-column>
        <el-table-column
          label="结束时间"
          prop="tenderEndTime" width="90px">
        </el-table-column>
        
         <el-table-column
          label="项目名称"
          prop="calusename" row-style="height: 57px; overflow: hidden">
        </el-table-column>
        <el-table-column
          label="项目面积"
          prop="area"  width="90px">
        </el-table-column>
        <el-table-column
          label="招标状态"
          prop="state" width="120px">
        </el-table-column>
      </el-table>
       <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChanges"
          :current-page.sync="currentPages"
          :page-size="2"
          layout="prev, pager, next, jumper"
          :total="totalPage"

          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
  </div>
  <div v-show="ind===1">
      <el-table
        :data="tableDatas"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="开始时间"
        prop="startTime"  width="90px">
        </el-table-column>
        <el-table-column
          label="结束时间"
          prop="tenderEndTime" width="90px">
        </el-table-column>
        
         <el-table-column
          label="项目名称"
          prop="calusename" row-style="height: 57px; overflow: hidden">
        </el-table-column>
        <el-table-column
          label="项目面积"
          prop="area"  width="90px">
        </el-table-column>
        <el-table-column
          label="招标状态"
          prop="state" width="120px" >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="getDeail( scope.row.tenderId)"
              type="text"
              size="small"
              :id="tenterId">
              修改
            </el-button>
          </template>
        </el-table-column>
      </el-table>
       <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangess"
          :current-page.sync="currentPagess"
          :page-size="2"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
  </div>
 <div v-show="ind===2">
      <el-table
        :data="tableDatass"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="开始时间"
        prop="startTime"  width="90px">
        </el-table-column>
        <el-table-column
          label="结束时间"
          prop="tenderEndTime" width="90px">
        </el-table-column>
        
         <el-table-column
          label="项目名称"
          prop="calusename" row-style="height: 57px; overflow: hidden">
        </el-table-column>
        <el-table-column
          label="项目面积"
          prop="area"  width="90px">
        </el-table-column>
        <el-table-column
          label="招标状态"
          prop="state" width="120px">
        </el-table-column>
        <!-- <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column> -->
      </el-table>
       <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChangesss"
          :current-page.sync="currentPagesss"
          :page-size="2"
          layout="prev, pager, next, jumper"
          :total="totalPage"
          class="pag"
        >
          <!-- total:总共数据  page-size:每页显示条目个数    :current-page.sync="currentPage"当前所在的页码-->
        </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name:"transcript",
  created() {
   this.getline();
  },
  methods: {
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
    getline() {
      this.axios
        .post(
          "/tender/selectMyTender",
          {
            currentPage: this.currentPages, //当前页
            pageSize: this.pageSize, //每页显示的条数
           state: 0,
          },

          {
            headers: {
              "content-type": "application/json",
              "token": sessionStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
             for (var i = 0; i <res.data.data.tenders.length;i++) {
              res.data.data.tenders[i].startTime = this.getTime(res.data.data.tenders[i].startTime)
              res.data.data.tenders[i].tenderEndTime = this.getTime(res.data.data.tenders[i].tenderEndTime)
              // console.log(res.data.data.tenders[i].messageDate)
            }
            console.log(res.data.data)
            this.tableData = res.data.data.tenders;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
     f(){
      this.ind=0,
      this.getline()
    },
    fn(){
      this.ind=1,
      this.getline1()
    },
    fnn(){
      this.ind=2,
      this.getline2()
    },
    getDeail(id){          

        this.$router.replace("/details?"+id);
    },
    getline1() {
      this.axios
        .post(
          "/tender/selectMyTender",
          {
            currentPage: this.currentPagess, //当前页
            pageSize: this.pageSize, //每页显示的条数
           state: 1,
          },{
          headers: {
            "content-type": "application/json",
            "token": sessionStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
             for (var i = 0; i <res.data.data.tenders.length;i++) {
              res.data.data.tenders[i].startTime = this.getTime(res.data.data.tenders[i].startTime)
              res.data.data.tenders[i].tenderEndTime = this.getTime(res.data.data.tenders[i].tenderEndTime)
              // console.log(res.data.data.tenders[i].messageDate)
            }
            this.tableDatas = res.data.data.tenders;
            this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getline2() {
      this.axios
        .post(
          "/tender/selectMyTender",
          {
            currentPage: this.currentPagesss, //当前页
            pageSize: this.pageSize, //每页显示的条数
           state: 2,
          },{
          headers: {
            "content-type": "application/json",
            "token": sessionStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
             for (var i = 0; i <res.data.data.tenders.length;i++) {
              res.data.data.tenders[i].startTime = this.getTime(res.data.data.tenders[i].startTime)
              res.data.data.tenders[i].tenderEndTime = this.getTime(res.data.data.tenders[i].tenderEndTime)
              // console.log(res.data.data.tenders[i].messageDate)
            }            
            this.tableDatass = res.data.data.tenders;
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
    handleCurrentChanges(val) {
      /* 获取当前页码 */
      this.axios
        .post("/tender/selectMyTender", {
          currentPage: val, //当前页
          pageSize: this.pageSize, //每页显示的条数
        },{
        headers: {
          "content-type": "application/json",
          "token": sessionStorage.getItem("token")
        }
      })
        .then(res => {
          console.log(res.data.data.tenders);
          if (res.data.code == 200) {
            this.tableData = res.data.data.tenders;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChangess(val) {
      /* 获取当前页码 */
      this.axios
        .post("/tender/selectMyTender", {
          currentPage: val, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 0
        },{
        headers: {
          "content-type": "application/json",
          "token": sessionStorage.getItem("token")
        }
      })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.tableDatas = res.data.data.tenders;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCurrentChangesss(val) {
      /* 获取当前页码 */
      this.axios
        .post("/tender/selectMyTender", {
          currentPage: val, //当前页
          pageSize: this.pageSize, //每页显示的条数
          caluseState: 0
        },{
        headers: {
          "content-type": "application/json",
          "token": sessionStorage.getItem("token")
        }
      })
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.tableDatass = res.data.data.tenders;
           this.totalPage = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      ind:0,
      currentPagesss:1,
      currentPagess:1,
      currentPages:1,
      totalPage: 0,
      pageSize: 2,
      tableData: [],
       tableDatas: [],
       tableDatass: []
    }
  }
}
</script>

<style lang="less" scoped>
    .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 80%;
  }
</style>