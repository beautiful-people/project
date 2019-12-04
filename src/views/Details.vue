<template>
  <div class="detailed">
    <index></index>
    <div class="det">
      <div class="detailed-head">
        <span></span>
        <p>在线工地</p>
      <button type="button" @click="getimg">上传</button>
      </div>
      <div class="detailed-main" :v-model="ListTen">
        <p>{{ListTen.calusename}}</p>
        <ul class="clear">
          <li>
            面积:
            <span>{{ListTen.area}}</span>
          </li>
          <li>
            风格:
            <span>{{ListTen.familyStructure}}</span>
          </li>
          <li>
           
          </li>
        </ul>
        <p class="pe">中建国际城9号楼3单元在施工地</p>
        <el-steps
          :space="200"
          :active="Number(ListTen.onlinesites.length)"
          finish-status="success"
          class="el"
        >
          <el-step title="开工大吉" ></el-step>
          <el-step title="水电改造" ></el-step>
          <el-step title="泥瓦阶段"></el-step>
          <el-step title="木工阶段" ></el-step>
          <el-step title="油漆阶段" ></el-step>
          <el-step title="安装阶段" ></el-step>
          <el-step title="验收完成" ></el-step>
        </el-steps>
        <div >
            <img :src=ListTen.onlinesites[0].caluseImg alt="" style="width:150px;height:150px;">
        
            <img :src=ListTen.onlinesites[1].caluseImg alt="" style="width:150px;height:150px;">
        
            <img :src=ListTen.onlinesites[2].caluseImg alt="" style="width:150px;height:150px;">
       
            <img :src=ListTen.onlinesites[3].caluseImg alt="" style="width:150px;height:150px;">
      
            <img :src=ListTen.onlinesites[4].caluseImg alt="" style="width:150px;height:150px;">
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import index from "@/components/index";
export default {
  name: "Detailed",
  data: function() {
    return {
      tenderId: sessionStorage.getItem("tenderIds"),
      ListTen: [],
      ind:0,
      tenderIds:3
    };
  },
  components: {
    index
  },
  created() {
    this.getmain();
    //  this.getmains();
  },
  methods: {
    getmain() {
      this.axios
        .post(
          "/tender/selectTenderWithOnlinesite",
          {
            tenderId:this.tenderIds
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
            console.log(this.ListTen.calusename);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
      getimg(){
         this.$router.push("/imageUpload?" + this.tenderIds);
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
  height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.267);
  margin-top: 40px;
  margin-left: 340px;
  .detailed-head {
    width: 800px;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.267);
    line-height: 50px;
  }
  .detailed-main {
    width: 800px;
    height: 200px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.479);
    p {
      width: 100%;
      height: 40px;
      line-height: 40px;
      padding-left: 40px;
      color: black;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid rgba(0, 0, 0, 0.479);
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
</style>