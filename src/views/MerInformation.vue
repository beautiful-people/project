<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="fn">类型1</el-menu-item>
      <el-menu-item index="2" @click="fn1">类型2</el-menu-item>
      <el-menu-item index="3" @click="fn2">类型3</el-menu-item>
    </el-menu>
    <div v-show="ind===0">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="时间"  prop="messageDate" width="150px"></el-table-column>
        <el-table-column label="sendRole" prop="sendRole" width="120px"></el-table-column>
        <el-table-column
          label="消息内容"
          prop="messageContent"
          row-style="height: 57px; overflow: hidden"
        ></el-table-column>
        <el-table-column label="发送人" prop="sendUserName" width="120px"></el-table-column>
        <el-table-column label="类型" prop="messageTypes" width="120px"></el-table-column>
      </el-table>
    </div>
    <div v-show="ind===1">
      <el-table :data="tableDatas" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="时间" prop="messageDate" width="150px"></el-table-column>
        <el-table-column label="sendRole" prop="sendRole" width="120px"></el-table-column>
        <el-table-column
          label="消息内容"
          prop="messageContent"
          row-style="height: 57px; overflow: hidden"
        ></el-table-column>
        <el-table-column label="发送人" prop="sendUserName" width="120px"></el-table-column>
        <el-table-column label="类型" prop="messageTypes" width="120px"></el-table-column>
      </el-table>
    </div>

    <div v-show="ind===2">
      <el-table :data="tableDatass" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="消息内容">
                <span>{{ props.row.messageContent }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="时间" prop="messageDate" width="150px"></el-table-column>
        <el-table-column label="sendRole" prop="sendRole" width="120px"></el-table-column>
        <el-table-column
          label="消息内容"
          prop="messageContent"
          row-style="height: 57px; overflow: hidden"
        ></el-table-column>
        <el-table-column label="发送人" prop="sendUserName" width="120px"></el-table-column>
        <el-table-column label="类型" prop="messageTypes" width="120px"></el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
export default {
  name: "inf",
  data() {
    return {
      ind: 0,
      tableData: [],
      tableDatas: [],
      tableDatass: []
    };
  },
  created() {
    this.getline();
  },
  methods: {
    fn() {
      this.ind = 0;
      this.getline();
    },
    fn1() {
      this.ind = 1;
      this.getline1();
    },
    fn2() {
      this.ind = 2;
      this.getline3();
    },

    getline() {
      this.axios
        .post(
          "/showMerIsAccessTender",
          {
            accId: sessionStorage.getItem("accId")
          },

          {
            headers: {
              "content-type": "application/json",
              token: sessionStorage.getItem("token")
            }
          }
        )
        .then(res => {
          // console.log(res.data);
          if (res.data.code == 200) {
            console.log(res.data.data.messages)
            for (var i = 0; i <res.data.data.messages.length;i++) {
              res.data.data.messages[i].messageDate = this.getTime(res.data.data.messages[i].messageDate)
              console.log(res.data.data.messages[i].messageDate)
            }
            this.tableData = res.data.data.messages;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getline1() {
      this.axios
        .post(
          "/showMerReleaseInfo",
          {
            accId: sessionStorage.getItem("accId")
          },

          {
            headers: {
              "content-type": "application/json",
              token: sessionStorage.getItem("token")
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
             for (var i = 0; i <res.data.data.messages.length;i++) {
              res.data.data.messages[i].messageDate = this.getTime(res.data.data.messages[i].messageDate)
              console.log(res.data.data.messages[i].messageDate)
            }
            this.tableDatas = res.data.data.messages;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getline3() {
      this.axios
        .post(
          "/showMerMerchantCAMessage",
          {
            accId: sessionStorage.getItem("accId")
          },

          {
            headers: {
              "content-type": "application/json",
              token: sessionStorage.getItem("token")
            }
          }
        )
        .then(res => {
          // console.log(res.data);
          if (res.data.code == 200) {
             for (var i = 0; i <res.data.data.messages.length;i++) {
              res.data.data.messages[i].messageDate = this.getTime(res.data.data.messages[i].messageDate)
              console.log(res.data.data.messages[i].messageDate)
            }
            this.tableDatass = res.data.data.messages;
            console.log(this.tableDatass);
          }
        })
        .catch(err => {
          console.log(err);
        });
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