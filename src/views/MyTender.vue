<template>
  <div>
    <div class="noLis">
      <p>暂无招标信息</p>
    </div>
    <div class="lis" v-for="(item, index) in newList" :key="index">
      <h3>{{item.area}}平米装修招标</h3>
      <p>招标编号：{{item.tenderNum}}</p>
      <p>联系电话：{{item.phone}}</p>
      <p>装修面积：{{item.area}}</p>
      <button @click="getTenderId(item.tenderId)" class="btn">查看详情</button>
      <!-- <router-link to="/personalCenter/tenderInfor" @click='getTenderId(item.tenderId)'>查看招标信息</router-link> -->
    </div>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pagesize"
      :total="totalCount"
      class="pagination"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: "",
      tnderId: "",
      totalPage: 0,
      currentPage: 1,
      pagesize: 2,
      totalCount: 0
    };
  },
  created() {
    this.axios
    .post("/showTenderInfo", {
      currentPage: 1,
      pageSize: this.pagesize,
      token: sessionStorage.getItem("token")
    })
    .then(res => {
      console.log("获取用户信息：", res.data.data.tenders);
      this.newList = res.data.data.tenders;
      this.totalPage = res.data.data.page.totalPage;
      this.totalCount = res.data.data.page.totalCount;
      console.log("总条数", res.data.data);
      console.log("总页数：", this.totalPage);
    })
    .catch(err => {
      console.log(err);
    });
  },
  methods: {
    getTenderId(oldTenderId) {
      this.tenderId = sessionStorage.setItem("tenderId", oldTenderId);
      this.$router.push("/personalCenter/tenderInfor");
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.axios
      .post("/showTenderInfo", {
        currentPage: val, //当前页
        pageSize: this.pagesize
      }) // 后台请求地址
      .then(res => {
        console.log("获取用户信息：", res.data.data.tenders);
        this.newList = res.data.data.tenders;
        this.currentPage = val;
        this.totalPage = res.data.data.page.totalPage;
        console.log(res.data.data.page);
      })
      .catch(err => {
        console.log(err);
      });
    },
    handleSizeChange(val) {
      // 分页-每页条数
      this.pagesize = val;
    }
  }
};
</script>

<style lang="less" scoped>
.noLis {
  display: none;
}
.lis {
  text-align: left;
  width: 100%;
  height: 140px;
  position: relative;
  // background: #ddd;
  margin-top: 20px;
  color: #888;
  font-size: 14px;
  p:first-child {
    color: #333;
  }
  .btn {
    font-size: 16px;
    color: #fff;
    background: #47a1fc;
    border-radius: 3px;
    outline: none;
    border: none;
    position: absolute;
    right: 40px;
    bottom: 10px;
  }
}
  .pagination{
    position: absolute;
    bottom: 20px;
    right: 40px;
  }
</style>