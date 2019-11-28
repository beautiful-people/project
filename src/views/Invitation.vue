<template>
  <div class="invitation">
    <div class="nav">
      <div class="clearfix">
        <ul>
          <li>信息类型:q12</li>
          <li
            v-for="item in msgs"
            :key="item.id"
            @click="msgclick(item)"
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
            @click="timeclick(item)"
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

    <div class="msg">今日更新了{{this.tableData.length}}条招标消息</div>

    <div class="content">
      <div style="width:100%;">
        <el-table
          :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)"
          style="width: 100%"
        >
          <el-table-column label="日期" width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="项目类型" width="200">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>标题: {{ scope.row.name }}</p>
                <p>到期时间:{{scope.row.date.substr(0, 8)}}{{ scope.row.date.substr(-2) + 3}}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="招标采购标题">
            <template slot-scope="scope">
              <el-button size="mini" @click="fun">{{scope.row.address}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="page">
        <el-pagination
          style="text-align:center;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currpage"
          :page-size="pagesize"
          :total="tableData.length"
          background
          layout="prev, pager, next"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invitation",
  data() {
    return {
      msgs_id: 1,
      time_id: 4,
      msgs: [
        { id: 1, msg: "全部" },
        { id: 2, msg: "招标" },
        { id: 3, msg: "中标" }
      ],
      time: [
        { id: 4, msg: "不限" },
        { id: 5, msg: "近一周" },
        { id: 6, msg: "近一个月" },
        { id: 7, msg: "近三个月" }
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "招标",
          address: "中共紫金县委办公室办公耗材采购采购计划"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "预发",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-03",
          name: "招标",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "招标",
          address: "	中共紫金县委办公室办公耗材采购采购计划"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "预发",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-03",
          name: "招标",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "招标",
          address: "	中共紫金县委办公室办公耗材采购采购计划"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "预发",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-03",
          name: "招标",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "招标",
          address: "	中共紫金县委办公室办公耗材采购采购计划"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "预发",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-03",
          name: "招标",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "招标",
          address: "	中共紫金县委办公室办公耗材采购采购计划"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "招标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "预发",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-01",
          name: "中标",
          address:
            "耀州区瑶曲镇下石节小学操场硬化及基础设施建设项目中标结果公示"
        },
        {
          date: "2016-05-03",
          name: "招标",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage1: 1,
      pagesize: 10, // 每页显示三条
      currpage: 1 // 默认开始页面
    };
  },
  methods: {
    msgclick(item) {
      this.msgs_id = item.id;
    },
    timeclick(item) {
      this.time_id = item.id;
    },
    handleSizeChange(val) {
      // 分页-每页条数
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      // 当前页
      this.currpage = val;
    },
    fun() {
      console.log("a");
      this.$router.replace('/invitation/detail')
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
.nav {
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
  ul li:hover {
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