<template>
  <div class="invitation">
    <!-- <index></index> -->

    <div class="inv-nav">
      <div class="clearfix">
        <ul>
          <li>信息类型:</li>
          <li
            v-for="item in msgs"
            :key="item.id"
            @click="msgclick(item.id)"
            :class="{on:msgs_id === item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="msgs" :id="item.id" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>

      <div class="clearfix">
        <ul>
          <li>选择时间:</li>
          <li
            v-for="item in time"
            :key="item.id"
            @click="timeclick(item.id)"
            :class="{on:time_id === item.id}"
          >
            <label :for="item.id">
              <input type="radio" name="time" :id="item.id" />
              {{item.msg}}
            </label>
          </li>
        </ul>
      </div>
    </div>

    <div class="msg">当前更新了 <span style="color:red;">{{this.tables.length}}</span> 条招标消息</div>

    <div class="content">
      <div style="width:100%;">
        <el-table :data="tables" style="width: 100%">
          <el-table-column label="日期" width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ getTime(scope.row.startTime) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="项目状态" width="200">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>发布人: {{ scope.row.linkMan }}</p>
                <p>联系方式: {{ scope.row.phone }}</p>

                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium" v-if="scope.row.state == 2">招标</el-tag>
                  <el-tag size="medium" v-else-if="scope.row.state == 3">中标</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="招标采购标题">
            <template slot-scope="scope">
              <el-button size="mini" @click="fun(scope.row.tenderId)">{{scope.row.calusename}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="page">
        <el-pagination
          style="text-align:center;"
          @size-change="handleSizeChanghandleCurrentChangee"
          @current-change="handleCurrentChange"
          :current-page="currpage"
          :page-size="pagesize"
          :total="totalCount"
          background
          layout="prev, pager, next"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
//  import index from '@/components/index'

export default {
  name: "invitation",
  data() {
    return {
      msgs_id: 1,
      time_id: 0,
      msgs: [
        { id: 1, msg: "全部" },
        { id: 2, msg: "招标" },
        { id: 3, msg: "中标" }
      ],
      time: [
        { id: 0, msg: "不限" },
        { id: 7, msg: "近一周" },
        { id: 30, msg: "近一个月" },
        { id: 90, msg: "近三个月" }
      ],
      tables: [],

      pagesize: 10, // 每页显示三条
      currpage: 1, // 默认开始页面
      totalCount: 0
    };
  },
  created() {
    this.axios
      .post("/tender/findAll", {
        state: this.msgs_id,
        chooseTime: this.time_id,
        currentPage: this.currpage,
        pageSize: this.pagesize
      })
      .then(res => {
        if (res.data.code == 200) {
          console.log(res.data);
          this.tables = res.data.data.tenders;
          this.totalCount = res.data.data.totalCount;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  // computed: {
  //   inv_tableData() {
  //     return this.$store.state.invitation.inv_tableData;
  //   }
  // },
  components: {
    // index
  },
  methods: {
    msgclick(item) {
      this.msgs_id = item;
      this.axios
        .post("/tender/findAll", {
          state: this.msgs_id,
          chooseTime: this.time_id,
          currentPage: this.currpage,
          pageSize: this.pagesize
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data.tenders);
            this.tables = res.data.data.tenders;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    timeclick(item) {
      this.time_id = item;

      this.axios
        .post("/tender/findAll", {
          state: this.msgs_id,
          chooseTime: this.time_id,
          currentPage: this.currpage,
          pageSize: this.pagesize
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data.tenders);
            this.tables = res.data.data.tenders;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      // 分页-每页条数
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      // 当前页
      this.currpage = val;

      this.axios
        .post("/tender/findAll", {
          currentPage: this.currpage,
          pageSize: this.pagesize,
          state: this.msgs_id,
          chooseTime: this.time_id
        })
        .then(res => {
          if (res.data.code == 200) {
            console.log(res.data.data.tenders);
            this.tables = res.data.data.tenders;
            console.log(this.tables);
            this.totalCount = res.data.data.totalCount;
          }
        })
        .catch(err => {
          console.log(err);
        });
      console.log(val);
    },
    fun(id) {
      // 请求数据

      console.log(id);

      this.$router.push("/invitation/invdetail?" + id);
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
    }
  }
};
</script>




<style lang="less" scoped>
@import "../assets/style/base.less";

.invitation {
  width: 1366px;
  margin: 0 auto;
}
.inv-nav {
  width: 90%;
  max-width: 1200px;
  height: 60px;
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
  ul li:not(:first-child):hover {
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
</style>