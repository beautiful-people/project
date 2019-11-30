<template>
  <div id="invdetail">
    <div class="content">
      <table
        class="tab"
        v-for="(item,index) in tableData"
        :key="index"
        cellspacing="0"
        cellpadding="0"
      >
        <tr>
          <th colspan="4" style="font-size:40px;color:black;text-align:center">{{item.address}}</th>
        </tr>
        <tr>
          <td>招标编号：{{item.id}}</td>
          <td>招标开始时间：{{item.date}}</td>
          <td>招标结束时间：{{item.begin}}</td>
          <td>工期：{{item.end}}</td>
        </tr>
        <tr>
          <td>房屋面积：{{item.size}}</td>
          <td>装修预算：{{item.price}}</td>
          <td>审核人：{{item.people}}</td>
          <td style="color:red;">当前状态：{{item.state}}</td>
        </tr>
        <tr>
          <td>房屋现状：</td>
          <td>联系方式：</td>
          <td>户型结构：</td>
          <td >详细地址</td>
        </tr>
        <tr>
          <td colspan="4">
            装修招标详细要求：
            <br />
            {{item.claim}}
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
        <tr>
          <td colspan="4" style="text-align:center">
            <el-button type="text" @click="dialogFormVisible = true">我要投标</el-button>
          </td>
        </tr>
      </table>
      <!-- Form -->

      <el-dialog title="提交投标信息" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form" style="text-align: left;">
          
  
          <el-form-item label="初步报价:" :label-width="formLabelWidth">
            
            <el-input v-model="form.begin_price" autocomplete="off" placeholder="如：全部8万元"></el-input>
          </el-form-item>

          <el-form-item label="装修定价:" :label-width="formLabelWidth">
            <el-input v-model="form.zx_price" autocomplete="off" placeholder="如：300-500元/平米"></el-input>
          </el-form-item>

          <el-form-item label="报价说明:" :label-width="formLabelWidth">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="form.bj_textarea"
              style="width:calc(100% -120px);"
            ></el-input>
            <input type="checkbox" name id="tbgz" checked />
            <label for="tbgz">已同意投标承诺保证书</label>
           
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
        begin_price: "",
        zx_price: "",
        bj_textarea: ""
      },
      formLabelWidth: "120px",

      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          begin: "2016-06-01",
          end: "2016-07-04",
          address: "上海市普陀区金沙江路 1518 弄",
          size: "186(平方米)",
          price: "50万至100万",
          people: "管理员",
          state: "招标中",
          claim:
            "我注重的是：高端设计，叠墅，地下室是90，轻奢风格，不超过100万之类，小孩子婚房，环保材料，明年拿房，隔壁有样板间，可以带设计师去看看……"
        }
      ]
    };
  },
  created() {
    this.axios
      .post("/login")
      .then(res => {
        if (res.data.code == 200) {
          console.log(res.data);
          this.tables = res.data;
        }
      })
      .catch(err => {
        console.log(err);
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
          this.dialogFormVisible = false;
          this.form.begin_price = "";
          this.form.zx_price = "";
          this.form.bj_textarea = "";
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
      this.form.zx_price = "";
      this.form.bj_textarea = "";
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