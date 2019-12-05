<template>
  <div>
    <h3>招标详情</h3>
    <div class="lis">
      <p>招标编号：{{newList.tenderNum}}</p>
      <p>联系方式：{{newList.phone}}</p>
      <p>动工时间：{{getTime(newList.startTime)}}</p>
      <p>工期：{{newList.timeForProject + "个月"}}</p>
      <p>装修面积：{{newList.area + "㎡"}}</p>
      <p>项目名称：{{newList.calusename}}</p>
      <p>地点：{{newList.location}}</p>
      <p>招标开始时间：{{getTime(newList.tenderStartTime)}}</p>
      <p>招标结束时间：{{getTime(newList.tenderEndTime)}}</p>
      <p>户型结构：{{newList.familyStructure}}</p>
      <p>房屋状态：{{newList.housingSituation}}</p>
      <p>装修预算：{{newList.decorationBudget + "万元"}}</p>
      <p>装修要求：{{newList.fitmentRequest}}</p>
      <p>此标状态：{{getStatus(newList.state)}}</p>
    </div>
    <!-- 商家表格 -->
    <template>
      <el-table :data="bidList" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商家名称">
                <span>{{ props.row.merchant.merName }}</span>
              </el-form-item>
              <el-form-item label="免费上门做预算">
                <span>{{ props.row.freeBudget }}</span>
              </el-form-item>
              <el-form-item label="免费设计">
                <span>{{ props.row.freeDesign }}</span>
              </el-form-item>
              <el-form-item label="报价">
                <span>{{ props.row.initialOffer }}</span>
              </el-form-item>
              <el-form-item label="方案说明">
                <span>{{ props.row.quoteExplain }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商家名称" prop="merchant.merName"></el-table-column>
        <el-table-column label="报价" prop="initialOffer"></el-table-column>
        <el-table-column label="操作" prop="operation" align="center">
          <template slot-scope="scope">
            <el-button
              :class="{active: isActive}"
              size="mini"
              class="cancel"
              type="primary"
              @click="handleDelete(scope.$index, bidList)"
            >允许中标</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>


    <!-- 分页 -->
    <el-pagination 
     background
      layout="prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pagesize"
      :total="totalPage"
      ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newList: [],
      bidList: [],
      totalPage: 0,
      currentPage: 1,
      pagesize: 2,
      totalCount: 0,
      isActive:true
    };
  },
  created(){
     
      this.axios
      .post("/showTenderInfoAndMerInfo", {
        tenderId: sessionStorage.getItem('tenderId'),
        currentPage: 1, //当前页
        pageSize: this.pagesize
        // sessionStorage.getItem("tenderId")
      }) // 后台请求地址
      .then(res => {
        // 获取newList信息
        console.log("数据：", res)
        this.newList = res.data.data.tender;
        this.bidList = res.data.data.bids[0].bids;
        this.tmerName = res.data.data.bids[0].bids[0].merchant.merName;
        this.totalPage = res.data.data.page.totalCount;
      })
      .catch(err => {
        console.log(err);
      });
    
  },
  methods: {
   
    // 转换时间戳
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
    // 转换投标状态
    getStatus(num) {
      if(num == 1) {
        return "审核状态"
      } else if(num == 2) {
        this.isActive = true;
        return "招标状态"
      } else if(num == 3) {
        return "招标成功"
      } else if(num == 4){
        return "招标失败"
      }
    },
    handleCurrentChange(val) {
      console.log(`当前页haha: ${val}`);
      this.axios
      .post("/showTenderInfoAndMerInfo", {
        currentPage: val, //当前页
        pageSize: this.pagesize,
        tenderId:sessionStorage.getItem('tenderId')
      }) // 后台请求地址
      .then(res => {
        // 获取当前页
        this.currentPage = val;

        this.bidList = res.data.data.bids[0].bids;
        // this.tmerName = res.data.data.bids[0].bids[0].merchant.merName;
        // console.log("商家",res.data)
        // 获取总页数
        // this.totalPage = res.data.data.page.totalCount;
        // this.bidList  = res.data.data.bids[0].bids;
      })
      .catch(err => {
        console.log(err);
      });
    },
    handleSizeChange(val) {
      // 分页-每页条数
      this.pagesize = val;
    },
    handleDelete(index, rows) {
      if(this.newList.state == 1) {
        this.$message({
          message: '此标正在审核中'
        });
      } else if (this.newList.state == 3) {
        this.$message({
          message: '此标已被商家成功招中',
          type: 'warning'
        })
      } else if (this.newList.state == 4) {
        this.$message.error('招标失败');
      } else {
        this.axios
        .post("/winMerBid", {
          tenderId: sessionStorage.getItem('tenderId'),
          accId: rows[index].merchant.accId
          // this.bidList[0].merchant.accId
          // this.res.data.data.bids[0].merchant.accId
        }) // 后台请求地址
        .then(res => {
          console.log(index, rows[index].merchant.accId);
          if(res.data.code == 400) {
            this.$message.error('此标已过期');
          } else if(res.data.code == 200) {
            this.$message({
              message: '恭喜中标，已成功发送消息给商家',
              type: 'success'
            });
            this.$router.push({ path: '/personalCenter/Mytender' })
          }
          // console.log("商家Id：",this.bidList[0].merchant.accId);
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.lis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  p {
    width: 360px;
  }
  p:last-child {
    color: red;
  }
}
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
  width: 50%;
}
// .active {
//   disabled: true;
// }
</style>