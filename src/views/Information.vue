<template>
  <div>
    <!-- <p>暂无站内消息！</p> -->
    <template>
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
          label="接收时间"
          prop="messageDate" width="90px">
        </el-table-column>
        <el-table-column
          label="消息类型"
          prop="messageTypes" width="90px">
        </el-table-column>
        <el-table-column
          label="消息内容"
          prop="messageContent" row-style="height: 57px; overflow: hidden">
        </el-table-column>
        <el-table-column
          label="发送人"
          prop="sendUserName" width="120px">
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
    </template>
  </div>
</template>


<script>
export default {
  created() {
    this.axios
      .post("/showUserMerchantCAMessage", {
        token: sessionStorage.getItem("token")
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: [{
        messageDate: '12987122',
        messageTypes: '中标',
        messageContent: '江浙小吃、小吃',
        sendUserName: '成都装修公司',
      }
      ]
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