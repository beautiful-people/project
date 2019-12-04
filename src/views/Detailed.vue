<template>
    <div class="detailed">
        <index></index>
        <div class="det">
            <div class="detailed-head">
                <span></span>
                <p>在线工地</p>
            </div>
           <div class="detailed-main">
               <p>中建国际城9号楼3单元在施工地</p>
               <ul class="clear">
                   <li>面积:<span>80</span></li>
                   <li>风格:<span>欧式</span></li>
                   <li>上传者:<span>中建国际城9号</span></li>
               </ul>
               <p class="pe">中建国际城9号楼3单元在施工地</p>
               <el-steps
              :space="200"
              :active="1"
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
            </div>  
        </div>
    </div>

</template>
<script>
import index from "@/components/index";
export default {
     name: "Detailed",
  components: {
    index
  },
}
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
        width:800px;
        height: 50px;
        border: 1px solid rgba(0, 0, 0, 0.267);
       line-height: 50px;
    }
    .detailed-main {
        width:800px;
        height: 200px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.479);
        p {
            width:100%;
            height: 40px; 
            line-height: 40px;
            padding-left: 40px;
            color: black;
            font-size: 18px;
            font-weight: 600;
            border-bottom: 1px solid rgba(0, 0, 0, 0.479);
        }
        .pe{
             color: rgba(0, 0, 0, 0.479);
            font-size: 14px;
        }
        ul {
            width:100%;
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