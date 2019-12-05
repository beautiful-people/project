<template>
  <div>
    <!-- <p>暂无站内消息！</p> -->

    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="消息内容" :id="props.row.messageId" :ids="props.row.messageId">
              <span>{{ props.row.messageContent }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="接收时间" prop="messageDate" width="90px"></el-table-column>
      <el-table-column label="消息类型" prop="messageTypes" width="90px"></el-table-column>
      <el-table-column
        label="消息内容"
        prop="messageContent"
        row-style="height: 57px; overflow: hidden"
      ></el-table-column>
      <el-table-column label="发送人" prop="sendUserName" width="120px"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.axios
      .post("/showUserMerchantCAMessage", {
        token: sessionStorage.getItem("token"),
        accId: 1
      })
      .then(res => {
        this.tableData = res.data.data.messages;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
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
    deleteRow(index, rows) {
      console.log(index, rows[index].messageId);

      this.axios
        .post("/deleteUserMessage", {
          // messageId : this.data.data.messages.messageId
          messageId: rows[index].messageId
        })
        .then(res => {
          // console.log("数据：", this.tableData)
          if (res.data.code == 200) {
            // this.tableData = res.data.data.messages;

            this.axios
              .post("/showUserMerchantCAMessage", {
                token: sessionStorage.getItem("token"),
                accId: 1
              })
              .then(res => {
                this.tableData = res.data.data.messages;
                console.log(res.data);
              })
              .catch(err => {
                console.log(err);
              });

            alert("删除成功");
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