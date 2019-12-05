<template>
  <div class="detailed">
    <index></index>
    <div class="det">
      <div class="detailed-head">
        <p>在线工地</p>
        <el-button type="text" @click="dialogFormVisible = true">上传图片</el-button>
        <el-dialog title="上传图片" :visible.sync="dialogFormVisible">
          <form>
            <el-upload
              class="upload-demo"
              ref="upload"
              action="uploadState"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :auto-upload="false"
              :on-change="imgBroadcastChange"
              :onSuccess="uploadSuccess"
              :headers="headers"
              list-type="picture-card"
              name="photo"
            >
              <el-button slot="trigger" size="small" type="primary" class="getImg">选取图片</el-button>
              <el-button
                style="margin-left: 10px;"
                size="small"
                type="success"
                @click="startUpload()"
              >上传到服务器</el-button>
            </el-upload>
          </form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <div class="detailed-main" :v-model="ListTen">
        <p>{{ListTen.calusename}}</p>
        <ul class="clear">
          <li>
            面积：
            <span>{{ListTen.area}}</span>
          </li>
          <li>
            风格：
            <span>{{ListTen.familyStructure}}</span>
          </li>
          <li></li>
        </ul>
        <p class="pe">中建国际城9号楼3单元在施工地</p>
        <el-steps
          :space="200"
          :active="Number(ListTen.onlinesites.length)"
          finish-status="success"
          class="el"
        >
          <el-step title="开工大吉"></el-step>
          <el-step title="水电改造"></el-step>
          <el-step title="泥瓦阶段"></el-step>
          <el-step title="木工阶段"></el-step>
          <el-step title="油漆阶段"></el-step>
          <el-step title="安装阶段"></el-step>
          <el-step title="验收完成"></el-step>
        </el-steps>
         <div class="det-cont">
          <div class="detailed-cont">
            <div class="detailed-cont-c">开门大吉</div>
            <img :src="ListTen.onlinesites[0].caluseImg" alt />
          </div>
          <div class="detailed-cont">
            <div class="detailed-cont-c">水电改造</div>
            <img :src="ListTen.onlinesites[1].caluseImg" alt />
          </div>
          <div class="detailed-cont">
            <div class="detailed-cont-c">泥瓦阶段</div>
            <img :src="ListTen.onlinesites[2].caluseImg" alt />
          </div>
          <div class="detailed-cont">
            <div class="detailed-cont-c">木工阶段</div>
            <img :src="ListTen.onlinesites[3].caluseImg" alt />
          </div>
          <div class="detailed-cont">
            <div class="detailed-cont-c">油漆阶段</div>
            <img :src="ListTen.onlinesites[4].caluseImg" alt />
          </div>
          <div class="detailed-cont">
            <div class="detailed-cont-c">油漆阶段</div>
            <img :src="ListTen.onlinesites[5].caluseImg" alt />
          </div>
        </div>
    </div>
      </div>
      
    <!-- <footerr></footerr> -->
  </div>
</template>
<script>
import index from "@/components/index";
// import footerr from "@/components/Footer.vue";
export default {
  name: "Detailed",
  data: function() {
    return {
      tenderId: sessionStorage.getItem("tenderIds"),
      ListTen: [],
      ind: 0,
      tenderIds: location.search.substr(1),
      dialogTableVisible: false,
      dialogFormVisible: false,
      fileList: [], //上传图片的
      photo: "" //选取图片时存储的地方
    };
  },
  components: {
    index
    // footerr
  },
  created() {
    this.getmain();
  },
  methods: {
    getmain() {
      this.axios
        .post(
          "/tender/selectTenderWithOnlinesite",
          {
            tenderId: this.tenderIds
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.ListTen = res.data.data.tender;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getimg() {
      this.$router.push("/imageUpload?" + this.tenderIds);
    },
    imgBroadcastChange(file, fileList) {
      this.photo = file.raw;
      /* this.fileName = file.name; */
      console.log(fileList);
      console.log(this.photo);
    },
    uploadSuccess(res, file) {
      console.log(res);
      console.log(file);
    },
    startUpload() {
      const formData = new FormData();
      formData.append("tenderId", this.tenderIds);
      formData.append("caluseState", 6);
      formData.append("photo", this.photo);
      this.axios
        .post("/uploadState", formData)
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            this.open();
            this.fileList = [];
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    open() {
        this.$message({
          message: '上传成功',
          type: 'success'
        });
      },
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.clear::before,
.clear::after {
  display: table;
  content: "";
}
.clear::after {
  clear: both;
}

.det {
  width: 800px;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.267);
  margin-top: 40px;
  margin-left: 340px;

  .detailed-head {
    width: 800px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.267);
    line-height: 50px;
    text-align: center;
    color: rgba(0, 89, 255, 0.788);
    font-weight: bold;
    font-size: 24px;
    p {
      display: inline-block;
      width: 80%;
    }
    .btn-sc {
      width: 80px;
      height: 30px;
    }
  }
  .detailed-main {
    width: 800px;
    height: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.479);
    p {
      display: inline-block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 40px;
      color: black;
      font-size: 18px;
      font-weight: 600;
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.479); */
    }
    .pe {
      color: rgba(0, 0, 0, 0.479);
      font-size: 14px;
    }
    ul {
      width: 100%;
      height: 40px;
      border: 1px solid rgba(0, 0, 0, 0.267);
      li {
        float: left;
        height: 40px;
        line-height: 40px;
        list-style-type: none;
        padding-left: 40px;
      }
    }
    .el {
      margin-left: 40px;
      margin-top: 10px;
      font-size: 16px;
    }
  }
}
.det-cont {
  margin-top: 50px;
}
.detailed-cont {
  width: 100%;
  height: 150px;
  padding-top: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;

  img {
    float: left;
    width: 300px;
    height: 150px;
  }
}
.detailed-cont-c {
  float: left;
  width: 100px;
  height: 150px;
  line-height: 150px;
  margin-left: 130px;
  margin-right: 100px;
  color: rgba(0, 89, 255, 0.788);
  font-weight: bold;
}
</style>