<template>
  <div class="detailed">
    <index></index>
    <div class="det">
      <div class="detailed-head">
        <p>在线工地</p>
        <el-button type="text" @click="dialogFormVisible = true">上传图片</el-button>
        <el-dialog title="上传图片" :visible.sync="dialogFormVisible">
          <div>
            <span>请选择上传样式：</span>
            <el-select v-model="styleValue" placeholder="请选择">
                <el-option v-for="(item,index) in styleList" :key="index" :label="item" :value="item">
                </el-option>
            </el-select>
        </div>
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
              class="btn">上传到服务器</el-button>
            </el-upload>
          </form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false" class="btn">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false" class="btn">确 定</el-button>
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
          :active="ListTen.onlinesites.length"
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
        <div class="det-cont clear">
          <div class="detailed-cont">
            <div
              class="detailed-cont-c"
              v-for="(item,index) in ListTen.onlinesites"
              :key="index"
            >{{item.caluseState}}
            <img :src="item.caluseImg" alt />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="left clear">
        <div class="left_one">
          <div class="left-one">

              <span>免费送装修设计保价</span>
          </div>
          <div class="left-input">
            <span>10秒登记，轻松获得</span>
            <input type="text" placeholder="你的称呼">
             <input type="text" placeholder="你的电话">
             <input type="button" value="立即免费申请">
             <div class="">
               <span>了解更多免费服务</span>
             </div>
          </div>
        </div>
        <div class="left_two">
            <img src="../../public/img/meitu.jpg"/>
        </div>
        <div class="left_three">
          <div class="left-three">
            <span>热门小区推荐</span>
          </div>
          <div class="left-ui">
            <ul>
              <li>山海同湾</li>
              <li>中关村公馆</li>
              <li>欧郡香水城</li>
              <li>戛纳35号</li>
            </ul>
          </div>
          <div class="left-more">
            <span>了解更多小区</span>
          </div>
        </div>
      </div>
    <footerr class="foote"></footerr>
  </div>
</template>
<script>
import index from "@/components/index";
import footerr from "@/components/Footer.vue";
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
      photo: "", //选取图片时存储的地方
      styleValue:0,
     styleList:[1,2,3,4,5,6,7],
     text:""
    };
  },
  components: {
    index,
    footerr
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
            console.log(this.ListTen.onlinesites[0].caluseImg);
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
      formData.append("caluseState", this.styleValue);
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
        message: "上传成功",
        type: "success"
      });
    }
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
  margin-top: 30px;
  margin-left: 300px;
    float: left;
    position: relative;

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
.left{
    float: left;
    width: 240px;
    height: 800px;
   margin-top: 30px;
    margin-left: 50px;
    .left_one {
      width: 240px;
      height: 250px;
      border: 1px solid rgba(0, 0, 0, 0.11);
      margin-top: 5px;
      .left-one {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #27BC9C;
        color:white;
        font-size: 14px;
      }
      .left-input {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        span {
          font-size: 14px;
        }
        input {
          width: 200px;
          height: 30px;
          text-indent: 10px;
        }
        input[type="button"]{
          background-color: #F39943;
          outline: none;
          border: none;
          width: 200px;
          color: white;
          font-size: 14px;
        }
      }
    }
    .left_two {
      margin-top: 30px;
    }
    .left_three {
       width: 240px;
      height: 250px;
      border: 1px solid rgba(0, 0, 0, 0.11);
      margin-top:30px;
      .left-three {
         width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.185);
        background-color: #F39943;
      }
      .left-ui {
        width: 100%;
        ul {
          margin-left: 10%;
          width: 80%;
          text-align: center;
          li {
             border-bottom: 1px solid rgba(0, 0, 0, 0.185);
            height: 40px;
            line-height: 40px;
            list-style-type: none;
            cursor: pointer;
          }
          li:nth-child(4) {
            border:none;
          }
          li:hover {
            background-color: rgba(0, 0, 0, 0.356);
          }
        }
      }
      .left-more{
        border-top: 1px solid  rgba(0, 0, 0, 0.185);
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    }
    .left_four {
      width: 240px;
      height: 250px;
      border: 1px solid rgba(0, 0, 0, 0.11);
      margin-top:30px;
      .left-four {
         width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.185);
        background-color: #27BC9C;
      }
      .four-ui{
        margin-top: 30px;
        width: 90%;
        li{
          float: left;
          list-style-type: none;
          padding-left: 20px;
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
.det-cont {
  margin-top: 50px;
 
}
   .foote {
     position: absolute;
     bottom: -550px;
     left: 0;
   }
.detailed-cont {
   border: 1px solid rgba(0, 0, 0, 0.479);
  width: 100%;
  height: 600px;
  padding-top: 20px;
  padding-bottom: 30px;
  img {
    margin-left: 100px;
    float: left;
    width: 150px;
    height: 120px;
    margin-top: -110px;
    vertical-align: middle;
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
.btn {
  width: 100px;
  height: 30px;
}
</style>