<template>
  <div class="detailed">
    <index></index>
    <div class="det">
      <div class="detailed-head">
        <span></span>
        <p>在线工地</p>
      </div>
      <div class="detailed-main" :v-model="ListTen" >
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
            上传者:
            <span>{{ListTen.linkMan}}</span>
          </li>
        </ul>
        <p class="pe">中建国际城9号楼3单元在施工地</p>
        <el-steps :space="200" :active="Number(ListTen.onlinesites[1].caluseState)" finish-status="success" class="el">
          <el-step title="开工大吉"></el-step>
          <el-step title="水电改造"></el-step>
          <el-step title="泥瓦阶段"></el-step>
          <el-step title="木工阶段"></el-step>
          <el-step title="油漆阶段"></el-step>
          <el-step title="安装阶段"></el-step>
          <el-step title="验收完成"></el-step>
        </el-steps>
      </div>
      <div v-for="item in ListTens" :key="item.caluseId" class="dmg">
        <img :src=item.caluseImg alt="">
      </div>
    </div>
    <footerr class="foott"></footerr>
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
     ListTen:[],
      ListTens:[]
    };
  },
  components: {
    index,
    footerr
  },
  created() {
    this.getmain();
     this.getmains();
  },
  methods: {
    getmain() {
      this.axios
        .post(
          "/selectOnlinepicWorker",
          {
            tenderId: this.tenderId
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if(res.data.code==200){
              this.ListTen=res.data.data.tenderss;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getmains() {
      this.axios
        .post(
          "/selectOnlineoneWorker",
          {
            tenderId:this.tenderId
          },

          {
            headers: {
              "content-type": "application/json"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if(res.data.code==200){
              this.ListTens=res.data.data.onlinesites;
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
.detailed {
  position: relative;
  .foott{
    position: absolute;
    bottom: -1000px;
    left: 0;
  }
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
    font-size: 24px;
    font-weight: bold;
    color: rgba(0, 89, 255, 0.788);
  }
  .detailed-main {
    width: 800px;
    height: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.479);
    p {
      display:block;
      width: 60%;
      height: 40px;
      line-height: 40px;
      padding-left: 40px;
      color: black;
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid rgba(0, 0, 0, 0.479);
     /*  transform: translateX(30px); */
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
      
      font-size: 16px;
      height: 120px;
      margin-top: 60px;
      div{
        height: 100px;
        width: 100px;
      }
    }
  }
}
.dmg{
  width: 46%;
  height: 200px;
  margin-top: 20px;
  margin-left: 30px;
  float: left;
  img{
    width: 300px;
    height: 160px;
    float: left;
    /* transform: translateX(100px); */
    
  }
}
</style>