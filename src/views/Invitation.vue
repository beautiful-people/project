<template>
  <div class="invitation">
    <div class="nav">
      <div class="clearfix">
        <ul>
          <li>信息类型:</li>
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

    <div class="content">
      <div>
        <template>
          <el-table 
          :data="tableData.slice((currpage-1)*pagesize,currpage*pagesize)" 
          style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="项目类型" width="180"></el-table-column>
            <el-table-column prop="address" label="招标采购标题"></el-table-column>
          </el-table>
        </template>
      </div>

      <el-pagination 
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currpage"
      :page-size="pagesize"
      :total="tableData.length"
      background layout="prev, pager, next"></el-pagination>
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
          name: "沥青",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "压缩",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "瑞文",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "蛮王",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "刀妹",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "虚空",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "剑圣",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "沥青",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "压缩",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "瑞文",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "蛮王",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "刀妹",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "虚空",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "剑圣",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "沥青",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "压缩",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "瑞文",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "蛮王",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "刀妹",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "虚空",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "剑圣",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "沥青",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "压缩",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "瑞文",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "蛮王",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "刀妹",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "虚空",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "剑圣",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "沥青",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "压缩",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "瑞文",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "蛮王",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "刀妹",
          address: "上海市普陀区金沙江路 1519 弄"
        },
         {
          date: "2016-05-01",
          name: "虚空",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "剑圣",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],currentPage1:1,
      pagesize:10, // 每页显示三条
      currpage:1 // 默认开始页面
    };
  },
  methods: {
    msgclick(item) {
      this.msgs_id = item.id;
    },
    timeclick(item) {
      this.time_id = item.id;
    },
    handleSizeChange(val) { // 分页-每页条数
      this.pagesize=val
    },
    handleCurrentChange(val) {// 当前页
      this.currpage=val
    }
  }
};
</script>
<style lang="less" scoped>
@import "../assets/style/base.less";

.nav {
  width: 90%;
  max-width: 1200px;
  height: 60px;
  border: 1px solid #272822;
  margin: 0 auto;
  padding: 10px;

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

.content {
  width: 90%;
  height: 400px;
  margin: 0 auto;

 el-table {
   width: 50%;
 }
}
</style>