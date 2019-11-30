<template>
  <div id="invdetail">
    <div class="content">
      <table class="tab" cellspacing="0" cellpadding="0">
        <tr>
          <th
            colspan="4"
            style="font-size:40px;color:black;text-align:center"
          >{{tableData.calusename}}</th>
        </tr>
        <tr>
          <td>招标编号：{{tableData.tenderNum}}</td>
          <td>招标开始时间：{{getTime(tableData.tenderStartTime)}}</td>
          <td>招标结束时间：{{getTime(tableData.tenderEndTime)}}</td>
          <td>工期：{{tableData.timeForProject}}</td>
        </tr>
        <tr>
          <td>房屋面积：{{tableData.area}}</td>
          <td>装修预算：{{tableData.decorationBudget}}</td>
          <td>审核人：管理员</td>
          <td style="color:red;" v-if="tableData.state == 2">当前状态：中标</td>
          <td style="color:red;" v-else-if="tableData.state == 3">当前状态：招标</td>
        </tr>
        <tr>
          <td>房屋现状：{{tableData.housingSituation}}</td>
          <td>联系方式：{{tableData.phone}}</td>
          <td>户型结构：{{tableData.familyStructure}}</td>
          <td>详细地址：{{tableData.location}}</td>
        </tr>
        <tr>
          <td colspan="4">
            装修招标详细要求：
            <br />
            {{tableData.fitmentRequest}}
          </td>
        </tr>
        <tr>
          <td colspan="4">
            投标公司要求：
            <br />
            <span style="color:red">
              1、经工商注册的正规本地公司
              <br />2、已通过装信通认证的无业主投诉与差评的精品装修公司！
            </span>
          </td>
        </tr>
        <tr v-if="tableData.state == 3">
          <td colspan="4" style="text-align:center">
            <el-button type="text" @click="dialogFormVisible = true">我要投标</el-button>
          </td>
        </tr>
      </table>
      <!-- Form -->

      <el-dialog title="提交投标信息" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form" style="text-align: left;margin-left:-2%;">
          <el-form-item style="text-align:center;">
            <el-checkbox checked v-model="form.freeBudget">免费上门量房做预算</el-checkbox>
            <el-checkbox checked v-model="form.freeDesign">免费设计</el-checkbox>
          </el-form-item>
          <el-form-item label="初步报价:" :label-width="formLabelWidth">
            <el-input
              v-model="form.initialOffer"
              autocomplete="off"
              id="cbbj"
             
              placeholder="如：全部8万元"
              style="width:60%;margin-right:20px;"
            ></el-input>
            <span style="color:red;">单位：万元</span>
          </el-form-item>

          <!-- <el-form-item label="装修定价:" :label-width="formLabelWidth">
            <el-input
              v-model="form.zx_price"
              autocomplete="off"
              placeholder="如：300-500元/平米"
              style="width:60%;margin-right:20px;"
            ></el-input>
          </el-form-item>-->

          <el-form-item label="报价说明:" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="form.quoteExplain"
              style="width:60%;"
            ></el-input>

            <el-form-item>
              <el-checkbox checked>已同意投标承诺保证书</el-checkbox>
            </el-form-item>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="open">提交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>


<script>
export default {
  name: "invdetail",

  data() {
    return {
      dialogFormVisible: false,
      form: {
        initialOffer: "",
        quoteExplain: "",
        freeBudget: "",
        freeDesign: "",
        tenderId: this.tenderId
      },
      formLabelWidth: "120px",
      tenderId: location.search.substr(1),
      tableData: []
    };
  },
  created() {
    this.axios
      .post("/tender/findBidCount", {
        tenderId: this.tenderId
      })
      .then(res => {
        if (res.data.code == 200) {
          // console.log(res.data.data.tender);
          this.tableData = res.data.data.tender;
          console.log(this.tableData);
        }
      })
      .catch(err => {
        console.log(err, this.tenderId);
      });
  },
  methods: {
    open() {
      this.$confirm("你确定要参加这次投标吗, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios
            .post("/bid/insertBid", { // 投标请求
              tenderId:this.tenderId,
              merId:0,
              freeBudget:this.form.freeBudget,
              freeDesign:this.form.freeDesign,
              initialOffer:this.form.initialOffer,
              quoteExplain:this.form.quoteExplain

            })
            .then(res => {
              if (res.data.code == 200) {
              
               console.log(this.form.freeBudget)
      
              }
            })
            .catch(err => {
              console.log(err, this.tenderId);
            });

          this.dialogFormVisible = false;
          this.form.begin_price = "";
          this.form.quoteExplain = "";
          this.$message({
            type: "success",
            message: "投标成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消投标"
          });
        });
    },
    cancel() {
      this.dialogFormVisible = false;
      this.form.begin_price = "";
      this.form.quoteExplain = "";
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
    },
    reg(val) {
      // 正则
      var re = /\S/;
      re.test(val);
    }
  }
};
</script>


<style lang="less" scoped>
.content {
  width: 90%;
  height: 640px;
  margin: 10px auto;
  // border: 1px solid #dddddd;
  padding: 10px;
  max-width: 1200px;
  position: relative;

  .tab {
    width: 1200px;
    height: 500px;
    // border: 1px solid #dddddd;
    color: #62727f;
    font-weight: bold;
    text-align: left;
    td,
    th {
      padding-left: 10px;
      border: 1px solid #dddddd;
    }

    button {
      width: 200px;
      height: 50px;
      background: #f18c20;
      border-radius: 20px;
      border: none;
      color: white;
      font-size: 20px;
      font-weight: bold;
      box-shadow: 0px 2px #f57915;
      outline: none;
    }
    button:hover {
      background: #f18c20dc;
      cursor: pointer;
    }
  }
}
</style>